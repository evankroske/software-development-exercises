/*
Generates a list of restaurant objects with random names and locations
*/
function main () {
   generateRestaurantArray({"padding": "   ", "tab": "   "});
}

function generateRestaurantArray (data) {
   print(data.padding + '"restaurants": [\n');
   for (var i = 0; i < 20; i++) {
      var randX = Math.floor(Math.random() * 201) - 100;
      var randY = Math.floor(Math.random() * 201) - 100;

      print(data.padding + data.tab + '{"name": "' + generateRestaurantName() + 
         '", "x": ' + randX + ', "y": ' + randY + '},\n');
   }
   print(data.padding + "]\n");
}

function generateRestaurantName () {
   var names = ["Patty's", "Johnny's", "Bloaty's", "Martha's", "Louie's", "Barbara's"];
   var specialties = ["Pizza", "Cheese", "Food", "Wings", "Spaghetti", "Taco", "Tofu", "Baguette"];
   var venues = ["Joint", "Club", "Bar", "Restaurant", "Place", "Loft", "Bus", "Shop"];
   var randomName = pick(names);
   var randomSpecialty = pick(specialties);
   var randomVenue = pick(venues);

   return [randomName, randomSpecialty, randomVenue].join(" ");
}

function pick (things) {
   return things[Math.floor(Math.random() * things.length)];
}
