var globals = {
   coordinates: [
      {"x": -85, "y": 4},
      {"x": -22, "y": 91},
      {"x": 47, "y": -32},
      {"x": -50, "y": -7},
      {"x": 49, "y": 16},
      {"x": -29, "y": 56},
      {"x": -69, "y": 2},
      {"x": -70, "y": 75},
      {"x": 98, "y": -1},
      {"x": 55, "y": -100},
      {"x": 85, "y": -100},
      {"x": 9, "y": 31},
      {"x": -57, "y": 45},
      {"x": -100, "y": -19},
      {"x": 11, "y": -78},
      {"x": 65, "y": -46},
      {"x": 12, "y": 15},
      {"x": 94, "y": 6},
      {"x": -19, "y": 30},
      {"x": 30, "y": 88}
   ]
};

function distance (pointA, pointB) {
   return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

function main () {
   var point = {"x": 2, "y": 3};
   for (var i = 0; i < 20; i++) {
      print(distance(point, globals.coordinates[i]) + "\n");
   }
}
