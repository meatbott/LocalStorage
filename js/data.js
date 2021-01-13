//Data.js//
/*let newCard = {
    "heading": {name: "Title of Card",
                input: "input",
                type: "text"
                }",
    "date": "MM/DD/YYYY",
    "iteration": "14",
    "surveyer": "29",
    "headhunter": "45",
    "cultist": "78",
    "nurse": "4",
    "tile": "72",
    "heritage": "Sacred Path",
    "gold": "56.2B",
    "ship": "1000/750",
    "amber": "534",
    "mentorship": "800.3B",
    "forest": "13",
    "chicken": "14",
    "stone": "11",
    "oni": "10",
    "frog": "14",
    "comments": "Check out this idea!"
}*/

let formTemplate ={
  heading: {
          name: "Heading",
          type: "text",
          input: "input"
   },
  date: {
          name: "Date",
          type: "date",
          input: "input"
  },
  iteration: {
          name: "Iteration",
          type: "number",
          input: "input"
  },
  surveyer: {
          name: "Surveyers",
          type: "number",
          input: "input"
  },
  headhunter: {
           name: "Headhunters",
           type: "number",
           input: "input"
  },
  cultist: {
           name: "Cultists",
           type: "number",
           input: "input"
  },
  nurse: {
           name: "Nurses",
           type: "number",
           input: "input"
  },
  tile: {
           name: "Tiles",
           type: "number",
           input: "input"
  },
  heritage: {
           name: "Heritage",
           type: "text",
           input: "input"
  },
  gold: {
           name: "Gold",
           type: "text",
           input: "input"
  },
  amber: {
           name: "Amber",
           type: "number",
           input: "input"
  },
  mentor: {
           name: "Mentorship Cost",
           type: "text",
           input: "input"
  },
  forest: {
           name: "Forest Relic",
           type: "number",
           input: "input"
  },
  chicken: {
           name: "Chicken Relic",
           type: "number",
           input: "input"
  },
  stone: {
           name: "Stone Relic",
           type: "number",
           input: "input"
  },
  oni: {
           name: "Oni Relic",
           type: "number",
           input: "input"
  },
  frog: {
           name: "Frog Relic",
           type: "number",
           input: "input"
  },
  comment: {
           name: "Comments",
           type: "text",
           input: "textarea"
  }
};

function Card(heading, date, iteration, surveyer, headhunter, cultist, nurse, tile, heritage,
gold, ship, amber, mentorship, forest, chicken, stone, oni, frog, comments){
  this.heading = heading;
  this.date = date;
  this.iteration = iteration;
  this.surveyer = surveyer;
  this.headhunter = headhunter;
  this.cultist = cultist;
  this.nurse = nurse;
  this.tile = tile;
  this.heritage = heritage;
  this.gold = gold;
  this.amber = amber;
  this.mentorship = mentorship;
  this.forest = forest;
  this.chicken = chicken;
  this.stone = stone;
  this.oni = oni;
  this.frog = frog;
  this.comments = comments;
}
