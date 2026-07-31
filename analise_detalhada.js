var fs = require('fs');
var data = fs.readFileSync('/workspace/modely_COMPLETO.js', 'utf8');

var positionsMatch = data.match(/var positions = \[([\s\S]*?)\];/);
var positionsStr = positionsMatch[1].replace(/\n/g, ',').replace(/,,+/g, ',');
var positions = positionsStr.split(',').map(Number).filter(n => !isNaN(n));

// Centro aproximado
var centerX = 2.16;
var centerZ = 90.23;

console.log("=== ANÁLISE DETALHADA DAS MÃOS E DEDOS ===\n");

// Regiões prováveis das mãos (extremidades dos braços em Z)
// Braços vão até Z~177, mãos devem estar nas extremidades

var maoDireita = []; // Z alto, X positivo
var maoEsquerda = []; // Z alto, X negativo

for (var i = 0; i < positions.length; i += 3) {
    var x = positions[i];
    var y = positions[i + 1];
    var z = positions[i + 2];
    
    // Mãos: Z > 140 (extremidade frontal), Y entre 10 e 50 (altura dos braços)
    if (z > 140 && y > 5 && y < 60) {
        if (x > centerX + 5) {
            maoDireita.push({x, y, z, idx: i/3});
        } else if (x < centerX - 5) {
            maoEsquerda.push({x, y, z, idx: i/3});
        }
    }
}

console.log("Vértices Mão Direita:", maoDireita.length);
console.log("Vértices Mão Esquerda:", maoEsquerda.length);

// Analisar dedos na mão direita
if (maoDireita.length > 0) {
    console.log("\n--- MAO DIREITA ---");
    var minY = Math.min.apply(null, maoDireita.map(v => v.y));
    var maxY = Math.max.apply(null, maoDireita.map(v => v.y));
    var minX = Math.min.apply(null, maoDireita.map(v => v.x));
    var maxX = Math.max.apply(null, maoDireita.map(v => v.x));
    var minZ = Math.min.apply(null, maoDireita.map(v => v.z));
    var maxZ = Math.max.apply(null, maoDireita.map(v => v.z));
    
    console.log("Bounds: X[" + minX.toFixed(1) + "," + maxX.toFixed(1) + "] " +
                "Y[" + minY.toFixed(1) + "," + maxY.toFixed(1) + "] " +
                "Z[" + minZ.toFixed(1) + "," + maxZ.toFixed(1) + "]");
    
    // Dividir em fatias verticais para identificar dedos
    var dedos = {};
    for (var j = 0; j < maoDireita.length; j++) {
        var v = maoDireita[j];
        var fingerKey = Math.floor(v.y / 3); // fatias de 3 unidades
        if (!dedos[fingerKey]) dedos[fingerKey] = [];
        dedos[fingerKey].push(v);
    }
    
    console.log("\nPossíveis dedos (por altura Y):");
    Object.keys(dedos).sort().forEach(function(key) {
        var d = dedos[key];
        var fingerMinY = Math.min.apply(null, d.map(v => v.y));
        var fingerMaxY = Math.max.apply(null, d.map(v => v.y));
        var fingerMinZ = Math.min.apply(null, d.map(v => v.z));
        var fingerMaxZ = Math.max.apply(null, d.map(v => v.z));
        console.log("  Dedo Y" + key + ": " + d.length + " vértices, " +
                    "Y[" + fingerMinY.toFixed(1) + "-" + fingerMaxY.toFixed(1) + "]" +
                    " Z[" + fingerMinZ.toFixed(1) + "-" + fingerMaxZ.toFixed(1) + "]");
    });
}

// Analisar pés
console.log("\n=== ANÁLISE DOS PÉS ===\n");

var peDireito = [];
var peEsquerdo = [];

for (var i = 0; i < positions.length; i += 3) {
    var x = positions[i];
    var y = positions[i + 1];
    var z = positions[i + 2];
    
    // Pés: Y < -50
    if (y < -50) {
        if (x > centerX) {
            peDireito.push({x, y, z, idx: i/3});
        } else {
            peEsquerdo.push({x, y, z, idx: i/3});
        }
    }
}

console.log("Vértices Pé Direito:", peDireito.length);
console.log("Vértices Pé Esquerdo:", peEsquerdo.length);

if (peDireito.length > 0) {
    var minY = Math.min.apply(null, peDireito.map(v => v.y));
    var maxY = Math.max.apply(null, peDireito.map(v => v.y));
    var minX = Math.min.apply(null, peDireito.map(v => v.x));
    var maxX = Math.max.apply(null, peDireito.map(v => v.x));
    var minZ = Math.min.apply(null, peDireito.map(v => v.z));
    var maxZ = Math.max.apply(null, peDireito.map(v => v.z));
    
    console.log("\nPé Direito Bounds: X[" + minX.toFixed(1) + "," + maxX.toFixed(1) + "] " +
                "Y[" + minY.toFixed(1) + "," + maxY.toFixed(1) + "] " +
                "Z[" + minZ.toFixed(1) + "," + maxZ.toFixed(1) + "]");
}

if (peEsquerdo.length > 0) {
    var minY = Math.min.apply(null, peEsquerdo.map(v => v.y));
    var maxY = Math.max.apply(null, peEsquerdo.map(v => v.y));
    var minX = Math.min.apply(null, peEsquerdo.map(v => v.x));
    var maxX = Math.max.apply(null, peEsquerdo.map(v => v.x));
    var minZ = Math.min.apply(null, peEsquerdo.map(v => v.z));
    var maxZ = Math.max.apply(null, peEsquerdo.map(v => v.z));
    
    console.log("Pé Esquerdo Bounds: X[" + minX.toFixed(1) + "," + maxX.toFixed(1) + "] " +
                "Y[" + minY.toFixed(1) + "," + maxY.toFixed(1) + "] " +
                "Z[" + minZ.toFixed(1) + "," + maxZ.toFixed(1) + "]");
}

// Análise completa por regiões do corpo
console.log("\n=== REGIÕES PRINCIPAIS DO CORPO ===\n");

var regioes = {
    "Cabeça": {yMin: 75, yMax: 100},
    "Pescoço": {yMin: 60, yMax: 75},
    "Ombros/Bracos (parte superior)": {yMin: 40, yMax: 60},
    "Bracos/Maos": {yMin: 10, yMax: 40},
    "Torax": {yMin: -20, yMax: 10},
    "Quadril": {yMin: -40, yMax: -20},
    "Pernas (parte superior)": {yMin: -60, yMax: -40},
    "Pernas/Pe (parte inferior)": {yMin: -100, yMax: -60}
};

for (var nome in regioes) {
    var r = regioes[nome];
    var count = 0;
    var regionVerts = [];
    
    for (var i = 0; i < positions.length; i += 3) {
        var y = positions[i + 1];
        if (y >= r.yMin && y <= r.yMax) {
            count++;
            regionVerts.push({
                x: positions[i],
                y: positions[i + 1],
                z: positions[i + 2],
                idx: i/3
            });
        }
    }
    
    if (count > 0) {
        var avgX = regionVerts.reduce(function(sum, v) { return sum + v.x; }, 0) / count;
        var avgZ = regionVerts.reduce(function(sum, v) { return sum + v.z; }, 0) / count;
        console.log(nome + ": " + count + " vértices, centro aprox. X=" + avgX.toFixed(1) + ", Z=" + avgZ.toFixed(1));
    }
}
