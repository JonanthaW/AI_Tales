var noun = require('noun-json');
var verb = require('verb-corpus');
var adjective = require('adjectives');

// arrays

let style = [
  "",
  "like algernon blackwood",
  "like arthur conan doyle",
  "like edgar allan poe",
  "like H.P Lovecraft",
  "like jule vernes"
];
let theme = [
  "19th century romance",
  "action archeology",
  "airships",
  "artificial intelligence",
  "comedic fantasy",
  "cyberpunk",
  "dark fantasy",
  "dragon",
  "egypt",
  "feudal japan",
  "general fantasy",
  "History",
  "horror",
  "Hunter gatherer",
  "litRPG",
  "magic academy",
  "magic library",
  "mars colonization",
  "medieval",
  "military scifi",
  "Mistery",
  "Naval age of discovery",
  "Philosopy",
  "Pirate",
  "Poetic fantasy",
  "Post-apocalyptic",
  "Rat",
  "Roman empire",
  "Science fantasy",
  "Space opera",
  "superheroes",
  "travel",
  "urban fantasy",
  "valentine",
  "viking",
  "western romance",
  "fairy"
];

// input

let phrase = [
`Generate a tale, use your creativity`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who can talks like a person`,
`Generate a ${theme[Math.floor(Math.random()*theme.length)]} tale`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who come to Earth to save humanity`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who discovers she has the ability to time-travel`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who wakes up with the ability to read minds`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who band together to solve a mystery`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who befriends a friendly ghost`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who embark on a quest to find a legendary treasure`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who develop a society and language of their own`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} that seeks to summon a powerful demon into the world and the group of heroes who must stop them.`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who discovers it is a vampire and must choose between its humanity and its thirst for blood`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who grants wishes, but each wish comes with a terrible price`,
`Generate a tale ${style[Math.floor(Math.random()*style.length)]} about a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]} who ${verb[Math.floor(Math.random()*verb.length)]} like a ${adjective[Math.floor(Math.random()*adjective.length)]} ${noun[Math.floor(Math.random()*noun.length)]}`
];

exports.generateText = () => {
  return `${phrase[Math.floor(Math.random()*phrase.length)]}`;
}