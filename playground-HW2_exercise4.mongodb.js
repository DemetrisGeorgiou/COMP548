
db.animals.insertMany([
  // 20 Dogs
  { name: "Rex", type: "Dog", age: 3 },
  { name: "Milo", type: "Dog", age: 5 },
  { name: "Buddy", type: "Dog", age: 6 },
  { name: "Shadow", type: "Dog", age: 4 },
  { name: "Chester", type: "Dog", age: 7 },
  { name: "Coco", type: "Dog", age: 2 },
  { name: "Bella", type: "Dog", age: 5 },
  { name: "Ruby", type: "Dog", age: 6 },
  { name: "Sophie", type: "Dog", age: 4 },
  { name: "Penny", type: "Dog", age: 2 },
  { name: "Bailey", type: "Dog", age: 8 },
  { name: "Lola", type: "Dog", age: 9 },
  { name: "Daisy", type: "Dog", age: 6 },
  { name: "Max", type: "Dog", age: 7 },
  { name: "Lucy", type: "Dog", age: 3 },
  { name: "Oscar", type: "Dog", age: 2 },
  { name: "Jack", type: "Dog", age: 5 },
  { name: "Rocky", type: "Dog", age: 1 },
  { name: "Duke", type: "Dog", age: 4 },

  // 20 Cats
  { name: "Lily", type: "Cat", age: 3 },
  { name: "Maggie", type: "Cat", age: 6 },
  { name: "Socks", type: "Cat", age: 5 },
  { name: "Ziggy", type: "Cat", age: 2 },
  { name: "Whiskers", type: "Cat", age: 4 },
  { name: "Smokey", type: "Cat", age: 7 },
  { name: "Simba", type: "Cat", age: 3 },
  { name: "Nala", type: "Cat", age: 5 },
  { name: "Ginger", type: "Cat", age: 6 },
  { name: "Tigger", type: "Cat", age: 4 },
  { name: "Cleo", type: "Cat", age: 2 },
  { name: "Oscar", type: "Cat", age: 6 },
  { name: "Luna", type: "Cat", age: 7 },
  { name: "Pepper", type: "Cat", age: 5 },
  { name: "Kiki", type: "Cat", age: 4 },
  { name: "Patches", type: "Cat", age: 3 },
  { name: "Toby", type: "Cat", age: 2 },
  { name: "Misty", type: "Cat", age: 8 },
  { name: "Sasha", type: "Cat", age: 5 },
  { name: "Fluffy", type: "Cat", age: 4 },

  // 10 Rabbits
  { name: "Thumper", type: "Rabbit", age: 1 },
  { name: "Flopsy", type: "Rabbit", age: 2 },
  { name: "Mopsy", type: "Rabbit", age: 3 },
  { name: "Cottontail", type: "Rabbit", age: 2 },
  { name: "Snowball", type: "Rabbit", age: 1 },
  { name: "Binky", type: "Rabbit", age: 3 },
  { name: "Lily", type: "Rabbit", age: 4 },
  { name: "Hopper", type: "Rabbit", age: 2 },
  { name: "Pip", type: "Rabbit", age: 1 },
  { name: "Bunny", type: "Rabbit", age: 5 }
]);

// Queries
// Some answers are over looping and the results are shown 3 times instead of 1. I am not sure how to fix this so I left it like this.
// Find All Animals
db.animals.find().toArray(); 

// Find All Dogs
db.animals.find({ type: "Dog" }).toArray();

// Find All Cats
db.animals.find({ type: "Cat" }).toArray();

// Find All Rabbits
db.animals.find({ type: "Rabbit" }).toArray();

// Find a Dog by Name (Example: "Max")
db.animals.find({ name: "Max", type: "Dog" }).toArray();

// Sort All Dogs by Age (Oldest to Youngest)
db.animals.find({ type: "Dog" }).sort({ age: -1 }).toArray();

// Sort All Cats by Age (Youngest to Oldest)
db.animals.find({ type: "Cat" }).sort({ age: 1 }).toArray();

// Find the Youngest Dog
db.animals.find({ type: "Dog" }).sort({ age: 1 }).limit(1).toArray();

// Find the Oldest Rabbit
db.animals.find({ type: "Rabbit" }).sort({ age: -1 }).limit(1).toArray();

// Find All Animals Between Ages 3 and 6
db.animals.find({ age: { $gte: 3, $lte: 6 } }).toArray();

// Find All Animals Older Than 5 Years
db.animals.find({ age: { $gt: 5 } }).toArray();

// Find All Animals Younger Than 4 Years
db.animals.find({ age: { $lt: 4 } }).toArray();
