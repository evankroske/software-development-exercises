function main () {
   generateRandCoordinateArray("   ");
}

function generateRandCoordinateArray (padding) {
   print(padding + "var coordinates = [\n");
   for (var i = 0; i < 20; i++) {
      var randX = Math.floor(Math.random() * 201) - 100;
      var randY = Math.floor(Math.random() * 201) - 100;

      print(padding + '   {"x": ' + randX + ', "y": ' + randY + '},\n');
   }
   print(padding + "];\n");
}
