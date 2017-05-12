({"borough" : $in{ ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {"_id" : 1, "name" : 1, "cusine" : 1})  }




(
    {"_id : c3432343", "address" : {"building" : 538, "coord" : [-73.985, 40.767], "street" : "Bainbridge"}, "borough" : "Bronx", "name": "Down the Hatch"})





> db.restaurants.insertOne({"_id" : c3432343", "address" : {"building" : 538, "coord" : [-73.985, 40.767], "street" : "Bainbridge"}, "borough" : "Bronx", "name": "Down the Hatch"})