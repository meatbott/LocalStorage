//Data.js//

const formTemplate ={
  heading: {
          name: "Heading",
          type: "text",
          input: "input",
          element: "h2"
   },
  date: {
          name: "Date",
          type: "date",
          input: "input",
          element: "p"
  },
  iteration: {
          name: "Iteration",
          type: "number",
          input: "input",
          element: "p"
  },
  surveyer: {
          name: "Surveyers",
          type: "number",
          input: "input",
          element: "p"
  },
  headhunter: {
           name: "Headhunters",
           type: "number",
           input: "input",
           element: "p"
  },
  cultist: {
           name: "Cultists",
           type: "number",
           input: "input",
           element: "p"
  },
  nurse: {
           name: "Nurses",
           type: "number",
           input: "input",
           element: "p"
  },
  tile: {
           name: "Tiles",
           type: "number",
           input: "input",
           element: "p"
  },
  heritage: {
           name: "Heritage",
           type: "text",
           input: "input",
           element: "p"
  },
  gold: {
           name: "Gold",
           type: "text",
           input: "input",
           element: "p"
  },
  amber: {
           name: "Amber",
           type: "number",
           input: "input",
           element: "p"
  },
  mentor: {
           name: "Mentorship Cost",
           type: "text",
           input: "input",
           element: "p"
  },
  forest: {
           name: "Forest Relic",
           type: "number",
           input: "input",
           element: "p"
  },
  chicken: {
           name: "Chicken Relic",
           type: "number",
           input: "input",
           element: "p"
  },
  stone: {
           name: "Stone Relic",
           type: "number",
           input: "input",
           element: "p"
  },
  oni: {
           name: "Oni Relic",
           type: "number",
           input: "input",
           element: "p"
  },
  frog: {
           name: "Frog Relic",
           type: "number",
           input: "input",
           element: "p"
  },
  comment: {
           name: "Comments",
           type: "text",
           input: "textarea",
           element: "p"
  }
};

function Card([heading, date, iteration, surveyer, headhunter, cultist, nurse, tile, heritage,
gold, amber, mentorship, forest, chicken, stone, oni, frog, comments]){
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
