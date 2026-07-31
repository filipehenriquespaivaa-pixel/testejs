// FBX Skeleton Export (JS puro, sem JSON, sem modules)
// Gerado em: 2026-07-31T02:22:48.358Z
// Fonte: Idle.fbx
// Ossos: 65
// Unidades originais do FBX (geralmente cm) — aplique sua própria escala ao usar.

(function(root) {
  'use strict';

  var BONES = [
  { name: 'mixamorig1Hips', parent: -1, position: [-0.310196, 99.494215, 0.723928], quaternion: [-0.03409, -0.046625, -0.027299, 0.997957], scale: [1, 1, 1] },
  { name: 'mixamorig1RightUpLeg', parent: 0, position: [-8.078198, -5.402374, -0.75177], quaternion: [-0.088733, -0.016298, 0.99556, -0.026845], scale: [1, 1, 1] },
  { name: 'mixamorig1RightLeg', parent: 1, position: [0, 42.775903, 0], quaternion: [-0.078389, 0.084911, -0.025163, 0.992981], scale: [1, 1, 1] },
  { name: 'mixamorig1RightFoot', parent: 2, position: [0, 42.179678, 0], quaternion: [0.515158, 0.018744, -0.029352, 0.856387], scale: [1, 1, 1] },
  { name: 'mixamorig1RightToeBase', parent: 3, position: [0, 16.260479, 0], quaternion: [0.347386, 0.061554, -0.018045, 0.935526], scale: [1, 1, 1] },
  { name: 'mixamorig1RightToe_End', parent: 4, position: [0, 6.180026, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1Spine', parent: 0, position: [0, 9.71727, -1.180245], quaternion: [-0.025612, 0.013291, 0.025896, 0.999248], scale: [1, 1, 1] },
  { name: 'mixamorig1Spine1', parent: 6, position: [0, 11.420137, 0], quaternion: [0.011772, 0.001904, 0.014776, 0.99982], scale: [1, 1, 1] },
  { name: 'mixamorig1Spine2', parent: 7, position: [0, 13.051578, 0], quaternion: [0.01155, 0.002099, 0.014816, 0.999821], scale: [1, 1, 1] },
  { name: 'mixamorig1Neck', parent: 8, position: [0, 14.683032, 0.000002], quaternion: [0.111098, -0.002163, 0.004627, 0.993796], scale: [1, 1, 1] },
  { name: 'mixamorig1Head', parent: 9, position: [0, 6.7202, 1.972157], quaternion: [0.050817, -0.002094, 0.005121, 0.998693], scale: [1, 1, 1] },
  { name: 'mixamorig1HeadTop_End', parent: 10, position: [0, 20.999847, 6.162763], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftShoulder', parent: 8, position: [6.140155, 13.000743, -0.233592], quaternion: [0.685104, 0.317645, -0.525754, 0.391557], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftArm', parent: 12, position: [0, 13.005933, 0], quaternion: [0.468897, 0.145826, 0.055021, 0.869392], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftForeArm', parent: 13, position: [0, 25.560784, 0], quaternion: [0.001613, -0.002788, 0.013525, 0.999903], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHand', parent: 14, position: [0, 23.404096, 0], quaternion: [0.06938, -0.244248, -0.009695, 0.967179], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandThumb1', parent: 15, position: [-2.867699, 3.93584, 1.188314], quaternion: [0.174549, 0.069501, 0.214486, 0.958487], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandThumb2', parent: 16, position: [-0.405408, 3.989582, 0], quaternion: [-0.098803, 0.07668, -0.219548, 0.967552], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandThumb3', parent: 17, position: [-0.037305, 3.599907, 0], quaternion: [-0.128273, -0.066935, 0.079216, 0.986301], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandThumb4', parent: 18, position: [0.442713, 2.979054, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandIndex1', parent: 15, position: [-3.484246, 11.757885, 0.113083], quaternion: [0.053668, 0.003073, 0.051175, 0.997242], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandIndex2', parent: 20, position: [0.023115, 3.298392, 0], quaternion: [0.150396, -0.000216, -0.025065, 0.988308], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandIndex3', parent: 21, position: [-0.006815, 3.081047, 0], quaternion: [0.069803, 0.000184, -0.011415, 0.997495], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandIndex4', parent: 22, position: [-0.0163, 2.712083, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandMiddle1', parent: 15, position: [-1.02928, 12.347121, -0.31581], quaternion: [0.123127, -0.000579, 0.014999, 0.992277], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandMiddle2', parent: 24, position: [0.009939, 3.432157, 0], quaternion: [0.150584, 0.000014, -0.02403, 0.988305], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandMiddle3', parent: 25, position: [-0.009976, 3.160916, 0], quaternion: [0.159224, 0.000295, -0.020682, 0.987026], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandMiddle4', parent: 26, position: [0.000037, 2.876376, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandRing1', parent: 15, position: [1.266743, 12.505947, -0.277068], quaternion: [0.169635, -0.005199, 0.000913, 0.985493], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandRing2', parent: 28, position: [-0.006585, 2.726053, 0], quaternion: [0.180263, 0.000122, -0.025597, 0.983285], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandRing3', parent: 29, position: [0.003414, 2.620303, 0], quaternion: [0.154251, -0.000214, -0.023396, 0.987755], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandRing4', parent: 30, position: [0.003171, 2.22689, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandPinky1', parent: 15, position: [3.246784, 11.101979, -0.112825], quaternion: [0.219523, -0.002955, -0.016543, 0.975463], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandPinky2', parent: 32, position: [0.008421, 2.734598, 0], quaternion: [0.150307, -0.000097, -0.025123, 0.98832], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandPinky3', parent: 33, position: [-0.002906, 2.193954, 0], quaternion: [0.142596, 0.000265, -0.022497, 0.989525], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftHandPinky4', parent: 34, position: [-0.005514, 1.97554, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1RightShoulder', parent: 8, position: [-6.140155, 12.993737, -0.175913], quaternion: [0.685853, -0.313041, 0.541357, 0.372215], scale: [1, 1, 1] },
  { name: 'mixamorig1RightArm', parent: 36, position: [0, 13.005933, 0], quaternion: [0.397179, -0.233146, -0.070775, 0.884806], scale: [1, 1, 1] },
  { name: 'mixamorig1RightForeArm', parent: 37, position: [0, 25.571063, 0], quaternion: [0.006618, 0.00287, -0.057427, 0.998324], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHand', parent: 38, position: [0, 23.401714, 0], quaternion: [0.067838, 0.124176, 0.034463, 0.989338], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandThumb1', parent: 39, position: [2.885085, 4.054333, 1.211989], quaternion: [0.177735, -0.061633, -0.230785, 0.954646], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandThumb2', parent: 40, position: [0.428412, 4.074775, 0], quaternion: [-0.088601, -0.066415, 0.255709, 0.960392], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandThumb3', parent: 41, position: [0.036494, 3.530412, 0], quaternion: [-0.162736, 0.066412, -0.079241, 0.981238], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandThumb4', parent: 42, position: [-0.464906, 2.873546, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandIndex1', parent: 39, position: [3.614494, 12.346582, -0.007772], quaternion: [0.050557, -0.00275, -0.049504, 0.99749], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandIndex2', parent: 44, position: [-0.011866, 3.1174, 0], quaternion: [0.151032, 0.000083, 0.018173, 0.988362], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandIndex3', parent: 45, position: [0.00661, 2.856062, 0], quaternion: [0.070097, -0.000158, 0.006917, 0.997516], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandIndex4', parent: 46, position: [0.005256, 2.534599, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandMiddle1', parent: 39, position: [0.922425, 12.17638, -0.222202], quaternion: [0.121191, 0.000105, -0.018485, 0.992457], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandMiddle2', parent: 48, position: [-0.016155, 3.479213, 0], quaternion: [0.151277, 0.000017, 0.019687, 0.988295], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandMiddle3', parent: 49, position: [0.013669, 3.22596, 0], quaternion: [0.159956, -0.000477, 0.014476, 0.987018], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandMiddle4', parent: 50, position: [0.002486, 2.927968, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandRing1', parent: 39, position: [-1.216574, 12.28207, -0.150985], quaternion: [0.168073, 0.003537, -0.007379, 0.985741], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandRing2', parent: 52, position: [-0.003705, 2.821586, 0], quaternion: [0.181238, -0.00011, 0.022065, 0.983192], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandRing3', parent: 53, position: [0.007794, 2.687694, 0], quaternion: [0.155085, -0.000119, 0.014821, 0.98779], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandRing4', parent: 54, position: [-0.004088, 2.36845, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandPinky1', parent: 39, position: [-3.320346, 11.194593, -0.137963], quaternion: [0.218712, 0.002951, 0.01036, 0.97573], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandPinky2', parent: 56, position: [-0.008058, 2.64045, 0], quaternion: [0.151061, 0.000021, 0.020119, 0.98832], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandPinky3', parent: 57, position: [0.005579, 2.149039, 0], quaternion: [0.143311, -0.00032, 0.015785, 0.989552], scale: [1, 1, 1] },
  { name: 'mixamorig1RightHandPinky4', parent: 58, position: [0.002479, 1.888428, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftUpLeg', parent: 0, position: [8.078198, -5.402374, -0.535869], quaternion: [-0.135434, -0.063587, -0.98582, 0.075986], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftLeg', parent: 60, position: [0, 42.789828, 0], quaternion: [-0.113353, -0.014266, 0.033642, 0.992883], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftFoot', parent: 61, position: [0, 42.17375, 0], quaternion: [0.472831, -0.028144, -0.009499, 0.880652], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftToeBase', parent: 62, position: [0, 16.182282, 0.000001], quaternion: [0.330497, -0.05941, 0.017695, 0.941769], scale: [1, 1, 1] },
  { name: 'mixamorig1LeftToe_End', parent: 63, position: [0, 6.205878, 0], quaternion: [0, 0, 0, 1], scale: [1, 1, 1] }
  ];

  // Reconstroi a hierarquia como THREE.Bone reais.
  // rig.roots -> array de THREE.Bone raiz (adicione à sua cena)
  // rig.bones -> array flat, mesmo índice/ordem de BONES
  function buildBones(THREE) {
    var boneObjs = BONES.map(function(b) {
      var bone = new THREE.Bone();
      bone.name = b.name;
      bone.position.fromArray(b.position);
      bone.quaternion.fromArray(b.quaternion);
      bone.scale.fromArray(b.scale);
      return bone;
    });
    BONES.forEach(function(b, i) {
      if (b.parent >= 0) boneObjs[b.parent].add(boneObjs[i]);
    });
    var roots = boneObjs.filter(function(_, i) { return BONES[i].parent === -1; });
    roots.forEach(function(r) { r.updateMatrixWorld(true); });
    return { bones: boneObjs, roots: roots };
  }

  root.Idle_Skeleton = {
    bones: BONES,
    buildBones: buildBones
  };
})(typeof self !== "undefined" ? self : this);
