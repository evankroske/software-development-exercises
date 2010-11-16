var globals = {
   "restaurants": [
      {"name": "Patty's Pizza Club", "x": -86, "y": 51},
      {"name": "Louie's Taco Joint", "x": 81, "y": -38},
      {"name": "Barbara's Food Loft", "x": -6, "y": 92},
      {"name": "Martha's Cheese Club", "x": -85, "y": 49},
      {"name": "Martha's Pizza Shop", "x": -44, "y": -34},
      {"name": "Bloaty's Wings Bar", "x": 3, "y": 86},
      {"name": "Patty's Pizza Restaurant", "x": 45, "y": 86},
      {"name": "Patty's Pizza Loft", "x": -52, "y": -28},
      {"name": "Patty's Taco Bus", "x": 85, "y": 66},
      {"name": "Barbara's Baguette Loft", "x": -57, "y": -2},
      {"name": "Bloaty's Food Shop", "x": -64, "y": -26},
      {"name": "Johnny's Cheese Place", "x": 24, "y": 98},
      {"name": "Barbara's Food Joint", "x": 24, "y": -82},
      {"name": "Bloaty's Cheese Restaurant", "x": -9, "y": -59},
      {"name": "Johnny's Tofu Bar", "x": 11, "y": 38},
      {"name": "Bloaty's Food Place", "x": 93, "y": 40},
      {"name": "Barbara's Taco Place", "x": -20, "y": 24},
      {"name": "Martha's Food Bus", "x": -43, "y": 22},
      {"name": "Louie's Baguette Loft", "x": 57, "y": 64},
      {"name": "Barbara's Pizza Joint", "x": -84, "y": 43},
   ]
};

function main () {
   var currentLocation = {"x": 2, "y": 50};
   var closestRestaurant = globals.restaurants[0];
   var distanceToClosestRestaurant = distance(currentLocation, globals.restaurants[0]);
   for (var i = 0; i < 20; i++) {
      var restaurant = globals.restaurants[i];
      var distanceToRestaurant = distance(currentLocation, restaurant);
      if (distanceToRestaurant < distanceToClosestRestaurant) {
         closestRestaurant = restaurant;
         distanceToClosestRestaurant = distanceToRestaurant;
      }
   }

   print("Current location: (" + currentLocation.x + ", " + currentLocation.y + ")\n");
   print("Closest restaurant: " + closestRestaurant.name + " at (" + closestRestaurant.x + ", " + closestRestaurant.y + ")\n");
}

function distance (currentLocation, restaurant) {
   return Math.sqrt(Math.pow(restaurant.x - currentLocation.x, 2) + Math.pow(restaurant.y - currentLocation.y, 2));
}

function printCoordinate(coordinate) {
   print("(" + coordinate.x + ", " + coordinate.y + ")\n");
}

