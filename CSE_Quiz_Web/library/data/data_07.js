/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_07 = [
  {
    "id": 0,
    "question": "Sky : Blue, Grass : ____ ?",
    "choices": [
      "Red",
      "Yellow",
      "Green",
      "Purple",
      "Black"
    ],
    "correct_ans": "Green",
    "explanation": "The question is asking for the color most commonly associated with the word “Grass”. Just as the sky is most commonly associated with the color blue, grass is most commonly associated with the color green. Therefore, the correct answer is “Green”."
  },
  {
    "id": 1,
    "question": "Philippines : Manila, France : ____ ?",
    "choices": [
      "Paris",
      "Lyon",
      "Bordeaux",
      "Marseille",
      "Strasbourg"
    ],
    "correct_ans": "Paris",
    "explanation": "The correct answer is Paris because it is the capital city of France, just as Manila is the capital city of the Philippines. Each option in the question represents a capital city, but only Paris is the capital of France."
  },
  {
    "id": 2,
    "question": "Sun : Yellow, Sky : ____ ?",
    "choices": [
      "Red",
      "Blue",
      "Green",
      "Purple",
      "Black "
    ],
    "correct_ans": "Blue",
    "explanation": "The question is asking for the color most commonly associated with the word “Sky”. Just as the sun is most commonly associated with the color yellow, the sky is most commonly associated with the color blue. Therefore, the correct answer is “Blue”."
  },
  {
    "id": 3,
    "question": "Dog : Bark, Cat : ____ ?",
    "choices": [
      "Roar",
      "Moo",
      "Meow",
      "Quack",
      "Neigh"
    ],
    "correct_ans": "Meow",
    "explanation": "The question is asking for the sound most commonly associated with the word “Cat”. Just as a dog is most commonly associated with the sound bark, a cat is most commonly associated with the sound meow. Therefore, the correct answer is “Meow”."
  },
  {
    "id": 4,
    "question": "Dog : Bark, Lion : ____ ?",
    "choices": [
      "Roar",
      "Moo",
      "Meow",
      "Quack",
      "Neigh"
    ],
    "correct_ans": "Roar",
    "explanation": "The question is asking for the sound most commonly associated with the word “Lion”. Just as a dog is most commonly associated with the sound bark, a lion is most commonly associated with the sound roar. Therefore, the correct answer is “Roar”."
  },
  {
    "id": 5,
    "question": "Bread : Bakery, Fish : ____ ?",
    "choices": [
      "Orchard",
      "Butcher",
      "Dairy",
      "Vineyard",
      "Fishery"
    ],
    "correct_ans": "Fishery",
    "explanation": "The question is asking for the place most commonly associated with the word “Fish”. Just as bread is most commonly associated with a bakery, fish is most commonly associated with a fishery. Therefore, the correct answer is “Fishery”."
  },
  {
    "id": 6,
    "question": "Car : Road, Plane : ____ ?",
    "choices": [
      "Sky",
      "Field",
      "Sea",
      "Mountain",
      "Forest"
    ],
    "correct_ans": "Sky",
    "explanation": "The question is asking for the place most commonly associated with the word “Plane”. Just as a car is most commonly associated with the road, a plane is most commonly associated with the sky. Therefore, the correct answer is “Sky”."
  },
  {
    "id": 7,
    "question": "Pencil : Write, Knife : ____ ?",
    "choices": [
      "Draw",
      "Cut",
      "Paint",
      "Type",
      "Read"
    ],
    "correct_ans": "Cut",
    "explanation": "The question is asking for the action most commonly associated with the word “Knife”. Just as a pencil is most commonly used to write, a knife is most commonly used to cut. Therefore, the correct answer is “Cut”."
  },
  {
    "id": 8,
    "question": "Elephant : Large, Ant : ____ ?",
    "choices": [
      "Small",
      "Big",
      "Tall",
      "Short",
      "Wide"
    ],
    "correct_ans": "Small",
    "explanation": "The question is asking for the size most commonly associated with the word “Ant”. Just as an elephant is most commonly associated with being large, an ant is most commonly associated with being small. Therefore, the correct answer is “Small”."
  },
  {
    "id": 9,
    "question": "Whale : Ocean, Camel : ____ ?",
    "choices": [
      "Forest",
      "Mountain",
      "Desert",
      "River",
      "Sky"
    ],
    "correct_ans": "Desert",
    "explanation": "The question is asking for the habitat most commonly associated with the word “Camel”. Just as a whale is most commonly associated with the ocean, a camel is most commonly associated with the desert. Therefore, the correct answer is “Desert”."
  },
  {
    "id": 10,
    "question": "Sun : Hot, Ice : ____ ?",
    "choices": [
      "Warm",
      "Cold",
      "Wet",
      "Dry",
      "Soft"
    ],
    "correct_ans": "Cold",
    "explanation": "The question is asking for the temperature most commonly associated with the word “Ice”. Just as the sun is most commonly associated with being hot, ice is most commonly associated with being cold. Therefore, the correct answer is “Cold”."
  },
  {
    "id": 11,
    "question": "Tree : Oxygen, Car : ____ ?",
    "choices": [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Hydrogen",
      "Helium"
    ],
    "correct_ans": "Carbon Dioxide",
    "explanation": "The question is asking for the gas most commonly associated with the word “Car”. Just as a tree is most commonly associated with producing oxygen, a car is most commonly associated with producing carbon dioxide. Therefore, the correct answer is “Carbon Dioxide”."
  },
  {
    "id": 12,
    "question": "Butterfly : Fly, Snake : ____ ?",
    "choices": [
      "Jump",
      "Swim",
      "Crawl",
      "Run",
      "Walk"
    ],
    "correct_ans": "Crawl",
    "explanation": "The question is asking for the movement most commonly associated with the word “Snake”. Just as a butterfly is most commonly associated with flying, a snake is most commonly associated with crawling. Therefore, the correct answer is “Crawl”."
  },
  {
    "id": 13,
    "question": "Bird : Fly, Fish : ____ ?",
    "choices": [
      "Jump",
      "Swim",
      "Crawl",
      "Run",
      "Walk"
    ],
    "correct_ans": "Swim",
    "explanation": "The question is asking for the movement most commonly associated with the word “Fish”. Just as a bird is most commonly associated with flying, a fish is most commonly associated with swimming. Therefore, the correct answer is “Swim”."
  },
  {
    "id": 14,
    "question": "Winter : Cold, Summer : ____ ?",
    "choices": [
      "Cold",
      "Hot",
      "Wet",
      "Dry",
      "Windy"
    ],
    "correct_ans": "Hot",
    "explanation": "The question is asking for the temperature most commonly associated with the word “Summer”. Just as winter is most commonly associated with being cold, summer is most commonly associated with being hot. Therefore, the correct answer is “Hot”."
  },
  {
    "id": 15,
    "question": "Piano : Music, Oven : ____ ?",
    "choices": [
      "Dance",
      "Song",
      "Cooking",
      "Painting",
      "Writing"
    ],
    "correct_ans": "Cooking",
    "explanation": "The question is asking for the activity most commonly associated with the word “Oven”. Just as a piano is most commonly associated with music, an oven is most commonly associated with cooking. Therefore, the correct answer is “Cooking”."
  },
  {
    "id": 16,
    "question": "Rain : Wet, Snow : ____ ?",
    "choices": [
      "Dry",
      "Wet",
      "Hot",
      "Cold",
      "Warm"
    ],
    "correct_ans": "Cold",
    "explanation": "The question is asking for the temperature most commonly associated with the word “Snow”. Just as rain is most commonly associated with being wet, snow is most commonly associated with being cold. Therefore, the correct answer is “Cold”."
  },
  {
    "id": 17,
    "question": "Book : Read, Car : ____ ?",
    "choices": [
      "Write",
      "Read",
      "Paint",
      "Drive",
      "Cook"
    ],
    "correct_ans": "Drive",
    "explanation": "The question is asking for the action most commonly associated with the word “Car”. Just as a book is most commonly associated with reading, a car is most commonly associated with driving. Therefore, the correct answer is “Drive”."
  },
  {
    "id": 18,
    "question": "Shirt : Cotton, Pan : ____ ?",
    "choices": [
      "Silk",
      "Cotton",
      "Wool",
      "Metal",
      "Wood"
    ],
    "correct_ans": "Metal",
    "explanation": "The question is asking for the material most commonly associated with the word “Pan”. Just as a shirt is most commonly made of cotton, a pan is most commonly made of metal. Therefore, the correct answer is “Metal”."
  },
  {
    "id": 19,
    "question": "Tranquil : Peaceful, Terrible : ____ ?",
    "choices": [
      "Joyful",
      "Horrible",
      "Beautiful",
      "Comfortable",
      "Pleasant"
    ],
    "correct_ans": "Horrible",
    "explanation": "The question is asking for the word most closely associated with “Terrible”. Just as “Tranquil” is associated with “Peaceful”, “Terrible” is associated with “Horrible”. Therefore, the correct answer is “Horrible”."
  },
  {
    "id": 20,
    "question": "Happy : Joyful, Sad : ____ ?",
    "choices": [
      "Cheerful",
      "Miserable",
      "Delighted",
      "Ecstatic",
      "Blissful"
    ],
    "correct_ans": "Miserable",
    "explanation": "The question is asking for the word most closely associated with “Sad”. Just as “Happy” is associated with “Joyful”, “Sad” is associated with “Miserable”. Therefore, the correct answer is “Miserable”."
  },
  {
    "id": 21,
    "question": "Bright : Shiny, Dark : ____ ?",
    "choices": [
      "Glossy",
      "Dull",
      "Sparkling",
      "Lustrous",
      "Radiant"
    ],
    "correct_ans": "Dull",
    "explanation": "The question is asking for the word most closely associated with “Dark”. Just as “Bright” is associated with “Shiny”, “Dark” is associated with “Dull”. Therefore, the correct answer is “Dull”."
  },
  {
    "id": 22,
    "question": "Strong : Powerful, Weak : ____ ?",
    "choices": [
      "Mighty",
      "Feeble",
      "Robust",
      "Sturdy",
      "Vigorous"
    ],
    "correct_ans": "Feeble",
    "explanation": "The question is asking for the word most closely associated with “Weak”. Just as “Strong” is associated with “Powerful”, “Weak” is associated with “Feeble”. Therefore, the correct answer is “Feeble”."
  },
  {
    "id": 23,
    "question": "Courageous : Brave, Cowardly : ____ ?",
    "choices": [
      "Fearless",
      "Timid",
      "Bold",
      "Daring",
      "Valiant"
    ],
    "correct_ans": "Timid",
    "explanation": "The question is asking for the word most closely associated with “Cowardly”. Just as “Courageous” is associated with “Brave”, “Cowardly” is associated with “Timid”. Therefore, the correct answer is “Timid”."
  },
  {
    "id": 24,
    "question": "Eloquent : Articulate, Inarticulate : ____ ?",
    "choices": [
      "Persuasive",
      "Coherent",
      "Mute",
      "Expressive",
      "Fluent"
    ],
    "correct_ans": "Mute",
    "explanation": "The question is asking for the word most closely associated with “Inarticulate”. Just as “Eloquent” is associated with “Articulate”, “Inarticulate” is associated with “Mute”. Therefore, the correct answer is “Mute”."
  },
  {
    "id": 25,
    "question": "Benevolent : Kind, Malevolent : ____ ?",
    "choices": [
      "Generous",
      "Evil",
      "Good",
      "Friendly",
      "Pleasant"
    ],
    "correct_ans": "Evil",
    "explanation": "The question is asking for the word most closely associated with “Malevolent”. Just as “Benevolent” is associated with “Kind”, “Malevolent” is associated with “Evil”. Therefore, the correct answer is “Evil”."
  },
  {
    "id": 26,
    "question": "Optimistic : Hopeful, Pessimistic : ____ ?",
    "choices": [
      "Cheerful",
      "Gloomy",
      "Joyful",
      "Happy",
      "Positive"
    ],
    "correct_ans": "Gloomy",
    "explanation": "The question is asking for the word most closely associated with “Pessimistic”. Just as “Optimistic” is associated with “Hopeful”, “Pessimistic” is associated with “Gloomy”. Therefore, the correct answer is “Gloomy”."
  },
  {
    "id": 27,
    "question": "Innovative : Creative, Conventional : ____ ?",
    "choices": [
      "Artistic",
      "Traditional",
      "Original",
      "Imaginative",
      "Inventive"
    ],
    "correct_ans": "Traditional",
    "explanation": "The question is asking for the word most closely associated with “Conventional”. Just as “Innovative” is associated with “Creative”, “Conventional” is associated with “Traditional”. Therefore, the correct answer is “Traditional”."
  },
  {
    "id": 28,
    "question": "Authentic : Genuine, Fake : ____ ?",
    "choices": [
      "Real",
      "Original",
      "Counterfeit",
      "True",
      "Legitimate"
    ],
    "correct_ans": "Counterfeit",
    "explanation": "The question is asking for the word most closely associated with “Fake”. Just as “Authentic” is associated with “Genuine”, “Fake” is associated with “Counterfeit”. Therefore, the correct answer is “Counterfeit”."
  },
  {
    "id": 29,
    "question": "Generous : Giving, Selfish : ____ ?",
    "choices": [
      "Taking",
      "Sharing",
      "Caring",
      "Loving",
      "Helping"
    ],
    "correct_ans": "Taking",
    "explanation": "The question is asking for the word most closely associated with “Selfish”. Just as “Generous” is associated with “Giving”, “Selfish” is associated with “Taking”. Therefore, the correct answer is “Taking”."
  },
  {
    "id": 30,
    "question": "Courageous : Brave, Cowardly : ____ ?",
    "choices": [
      "Fearless",
      "Timid",
      "Bold",
      "Daring",
      "Valiant"
    ],
    "correct_ans": "Timid",
    "explanation": "The question is asking for the word most closely associated with “Cowardly”. Just as “Courageous” is associated with “Brave”, “Cowardly” is associated with “Timid”. Therefore, the correct answer is “Timid”."
  },
  {
    "id": 31,
    "question": "Beautiful : Attractive, Ugly : ____ ?",
    "choices": [
      "Handsome",
      "Pretty",
      "Repulsive",
      "Cute",
      "Charming"
    ],
    "correct_ans": "Repulsive",
    "explanation": "The question is asking for the word most closely associated with “Ugly”. Just as “Beautiful” is associated with “Attractive”, “Ugly” is associated with “Repulsive”. Therefore, the correct answer is “Repulsive”."
  },
  {
    "id": 32,
    "question": "Rich : Wealthy, Poor : ____ ?",
    "choices": [
      "Affluent",
      "Prosperous",
      "Impoverished",
      "Fortunate",
      "Successful"
    ],
    "correct_ans": "Impoverished",
    "explanation": "The question is asking for the word most closely associated with “Poor”. Just as “Rich” is associated with “Wealthy”, “Poor” is associated with “Impoverished”. Therefore, the correct answer is “Impoverished”."
  }


];
