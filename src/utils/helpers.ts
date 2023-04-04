export const padWithLeadingZeros: (num: number, totalLength: number) => string = (num, totalLength) => {
    return String(num).padStart(totalLength, '0');
};

export const pokemonSVG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'

export const pokemonTypes = [
  {
    "id": 1,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 2,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 3,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 4,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 5,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 6,
    "type": ["Fire", "Flying"],
    "color": "Red"
  },
  {
    "id": 7,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 8,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 9,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 10,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 11,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 12,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 13,
    "type": ["Bug", "Flying"],
    "color": "Green"
  },
  {
    "id": 14,
    "type": ["Bug", "Poison"],
    "color": "Green"
  },
  {
    "id": 15,
    "type": ["Bug", "Poison"],
    "color": "Green"
  },
  {
    "id": 16,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 17,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 18,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 19,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 20,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 21,
    "type": ["Normal"],
    "color": "Pink"
  },
   {
    "id": 22,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 23,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 24,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 25,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 26,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 27,
    "type": ["Ground"],
    "color": "Brown"
  },
  {
    "id": 28,
    "type": ["Ground"],
    "color": "Brown"
  },
  {
    "id": 29,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 30,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 31,
    "type": ["Poison", "Ground"],
    "color": "Purple"
  },
  {
    "id": 32,
    "type": ["Poison", "Ground"],
    "color": "Purple"
  },
  {
    "id": 33,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 34,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 35,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 36,
    "type": ["Bug"],
    "color": "Green"
  },
  {
    "id": 37,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 38,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 39,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 40,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 41,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 42,
    "type": ["Water", "Psychic"],
    "color": "Blue"
  },
  {
    "id": 43,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 44,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
  {
    "id": 45,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
  {
    "id": 46,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 47,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 48,
    "type": ["Poison", "Ground"],
    "color": "Purple"
  },
  {
    "id": 49,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
{
    "id": 50,
    "type": ["Bug"],
    "color": "Blue"
  },
  {
    "id": 51,
    "type": ["Bug", "Poison"],
    "color": "Blue"
  },
  {
    "id": 52,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 53,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 54,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 55,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 56,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 57,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 58,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 59,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 60,
    "type": ["Normal", "Flying"],
    "color": "Brown"
  },
  {
    "id": 61,
    "type": ["Fighting"],
    "color": "Pink"
  },
  {
    "id": 62,
    "type": ["Fighting"],
    "color": "Pink"
  },
  {
    "id": 63,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 64,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 65,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 66,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 67,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 68,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 69,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 70,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 71,
    "type": ["Grass", "Poison"],
    "color": "Green"
  },
  {
    "id": 72,
    "type": ["Water", "Psychic"],
    "color": "Blue"
  },
  {
    "id": 73,
    "type": ["Water", "Psychic"],
    "color": "Blue"
  },
  {
    "id": 74,
    "type": ["Water", "Psychic"],
    "color": "Blue"
  },
  {
    "id": 75,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
 {
    "id": 76,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
  {
    "id": 77,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
  {
    "id": 78,
    "type": ["Rock", "Ground"],
    "color": "Brown"
  },
  {
    "id": 79,
    "type": ["Psychic"],
    "color": "Pink"
  },
  {
    "id": 80,
    "type": ["Psychic"],
    "color": "Pink"
  },
  {
    "id": 81,
    "type": ["Psychic"],
    "color": "Yellow"
  },
  {
    "id": 82,
    "type": ["Psychic"],
    "color": "Yellow"
  },
  {
    "id": 83,
    "type": ["Psychic"],
    "color": "Yellow"
  },
  {
    "id": 84,
    "type": ["Grass", "Poison"],
    "color": "Blue"
  },
  {
    "id": 85,
    "type": ["Grass", "Poison"],
    "color": "Blue"
  },
  {
    "id": 86,
    "type": ["Grass", "Poison"],
    "color": "Blue"
  },
  {
    "id": 87,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 88,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 89,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 90,
    "type": ["Water", "Ice"],
    "color": "Blue"
  },
  {
    "id": 91,
    "type": ["Water", "Ice"],
    "color": "Blue"
  },
  {
    "id": 92,
    "type": ["Bug"],
    "color": "Red"
  },
  {
    "id": 93,
    "type": ["Bug"],
    "color": "Red"
  },
  {
    "id": 94,
    "type": ["Poison", "Flying"],
    "color": "Purple"
  },
  {
    "id": 95,
    "type": ["Poison", "Flying"],
    "color": "Purple"
  },
  {
    "id": 96,
    "type": ["Normal"],
    "color": "Brown"
  },
  {
    "id": 97,
    "type": ["Normal"],
    "color": "Brown"
  },
  {
    "id": 98,
    "type": ["Ground"],
    "color": "Brown"
  },
  {
    "id": 99,
    "type": ["Ground"],
    "color": "Brown"
  },
  {
    "id": 100,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 101,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 102,
    "type": ["Grass", "Psychic"],
    "color": "Green"
  },
  {
    "id": 103,
    "type": ["Grass", "Psychic"],
    "color": "Green"
  },
  {
    "id": 104,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 105,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 106,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 107,
    "type": ["Ice", "Psychic"],
    "color": "Brown"
  },
  {
    "id": 108,
    "type": ["Ice", "Psychic"],
    "color": "Brown"
  },
  {
    "id": 109,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 110,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 111,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 112,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 113,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 114,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 115,
    "type": ["Rock"],
    "color": "Brown"
  },
  {
    "id": 116,
    "type": ["Rock"],
    "color": "Brown"
  },
  {
    "id": 117,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 118,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 119,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 120,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 121,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 122,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 123,
    "type": ["Dragon"],
    "color": "Blue"
  },
  {
    "id": 124,
    "type": ["Dragon"],
    "color": "Blue"
  },
  {
    "id": 125,
    "type": ["Dragon"],
    "color": "Blue"
  },
   {
    "id": 126,
    "type": ["Ice", "Psychic"],
    "color": "White"
  },
  {
    "id": 127,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 128,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 129,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 130,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 131,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 132,
    "type": ["Normal"],
    "color": "Pink"
  },
  {
    "id": 133,
    "type": ["Normal"],
    "color": "Brown"
  },
  {
    "id": 134,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 135,
    "type": ["Electric"],
    "color": "Purple"
  },
  {
    "id": 136,
    "type": ["Fire"],
    "color": "Purple"
  },
  {
    "id": 137,
    "type": ["Normal"],
    "color": "Brown"
  },
  {
    "id": 138,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 139,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 140,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 141,
    "type": ["Poison"],
    "color": "Purple"
  },
  {
    "id": 142,
    "type": ["Normal", "Flying"],
    "color": "Pink"
  },
  {
    "id": 143,
    "type": ["Normal"],
    "color": "Brown"
  },
  {
    "id": 144,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 145,
    "type": ["Dragon"],
    "color": "Purple"
  },
  {
    "id": 146,
    "type": ["Psychic"],
    "color": "Pink"
  },
  {
    "id": 147,
    "type": ["Fire"],
    "color": "Red"
  },
  {
    "id": 148,
    "type": ["Water"],
    "color": "Blue"
  },
  {
    "id": 149,
    "type": ["Psychic"],
    "color": "Pink"
  },
  {
    "id": 150,
    "type": ["Psychic"],
    "color": "Purple"
  },
  {
    "id": 151,
    "type": ["Psychic"],
    "color": "Pink"
  },
  {
    "id": 150,
    "type": ["Electric"],
    "color": "Yellow"
  },
  {
    "id": 151,
    "type": ["Psychic"],
    "color": "Pink"
  }
];
