// Script para analisar a estrutura do personagem modely
var fs = require('fs');
var data = fs.readFileSync('/workspace/modely_COMPLETO.js', 'utf8');

// Extrair posições
var positionsMatch = data.match(/var positions = \[([\s\S]*?)\];/);
if (!positionsMatch) {
    console.log("Erro: não foi possível extrair posições");
    process.exit(1);
}

var positionsStr = positionsMatch[1].replace(/\n/g, ',').replace(/,,+/g, ',');
var positions = positionsStr.split(',').map(Number).filter(n => !isNaN(n));

console.log("Total de valores em positions:", positions.length);
console.log("Total de vértices (positions/3):", positions.length / 3);

// Analisar bounding box
var minX = Infinity, maxX = -Infinity;
var minY = Infinity, maxY = -Infinity;
var minZ = Infinity, maxZ = -Infinity;

for (var i = 0; i < positions.length; i += 3) {
    var x = positions[i];
    var y = positions[i + 1];
    var z = positions[i + 2];
    
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
}

console.log("\n=== BOUNDING BOX ===");
console.log("X:", minX.toFixed(2), "a", maxX.toFixed(2), "(largura:", (maxX - minX).toFixed(2) + ")");
console.log("Y:", minY.toFixed(2), "a", maxY.toFixed(2), "(altura:", (maxY - minY).toFixed(2) + ")");
console.log("Z:", minZ.toFixed(2), "a", maxZ.toFixed(2), "(profundidade:", (maxZ - minZ).toFixed(2) + ")");

// Centro do modelo
var centerX = (minX + maxX) / 2;
var centerY = (minY + maxY) / 2;
var centerZ = (minZ + maxZ) / 2;
console.log("\nCentro:", centerX.toFixed(2), centerY.toFixed(2), centerZ.toFixed(2));

// Analisar distribuição por altura (Y) para identificar partes do corpo
var slices = {};
var sliceSize = 1.0; // fatias de 1 unidade

for (var i = 0; i < positions.length; i += 3) {
    var y = positions[i + 1];
    var sliceKey = Math.floor(y / sliceSize);
    if (!slices[sliceKey]) {
        slices[sliceKey] = { count: 0, minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity };
    }
    slices[sliceKey].count++;
    var x = positions[i];
    var z = positions[i + 2];
    if (x < slices[sliceKey].minX) slices[sliceKey].minX = x;
    if (x > slices[sliceKey].maxX) slices[sliceKey].maxX = x;
    if (z < slices[sliceKey].minZ) slices[sliceKey].minZ = z;
    if (z > slices[sliceKey].maxZ) slices[sliceKey].maxZ = z;
}

console.log("\n=== DISTRIBUIÇÃO POR ALTURA (Y) ===");
var sortedSlices = Object.keys(slices).map(Number).sort(function(a, b) { return a - b; });

for (var i = 0; i < sortedSlices.length; i++) {
    var key = sortedSlices[i];
    var s = slices[key];
    var width = s.maxX - s.minX;
    var depth = s.maxZ - s.minZ;
    console.log("Y=" + (key * sliceSize).toFixed(0) + "-" + ((key + 1) * sliceSize).toFixed(0) + 
                ": " + s.count + " vértices, largura=" + width.toFixed(1) + ", prof=" + depth.toFixed(1));
}

// Identificar possíveis membros analisando laterais
console.log("\n=== ANÁLISE LATERAL (possíveis braços/pernas) ===");

// Dividir em quadrantes
var quadrants = {
    topRight: { count: 0, vertices: [] },
    topLeft: { count: 0, vertices: [] },
    bottomRight: { count: 0, vertices: [] },
    bottomLeft: { count: 0, vertices: [] }
};

var midX = centerX;
var midY = centerY;

for (var i = 0; i < positions.length; i += 3) {
    var x = positions[i];
    var y = positions[i + 1];
    var z = positions[i + 2];
    
    if (y > midY) {
        if (x > midX) quadrants.topRight.count++;
        else quadrants.topLeft.count++;
    } else {
        if (x > midX) quadrants.bottomRight.count++;
        else quadrants.bottomLeft.count++;
    }
}

console.log("Topo Direita:", quadrants.topRight.count);
console.log("Topo Esquerda:", quadrants.topLeft.count);
console.log("Baixo Direita:", quadrants.bottomRight.count);
console.log("Baixo Esquerda:", quadrants.bottomLeft.count);

// Salvar dados para análise posterior
var analysisData = {
    totalVertices: positions.length / 3,
    boundingBox: { minX, maxX, minY, maxY, minZ, maxZ },
    center: { centerX, centerY, centerZ },
    slices: slices
};

fs.writeFileSync('/workspace/analise_result.json', JSON.stringify(analysisData, null, 2));
console.log("\nDados salvos em analise_result.json");
