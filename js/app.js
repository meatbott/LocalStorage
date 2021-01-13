//App.js//
/*TODO: Storage solution obviously. That is the main goal for this experiment. It
        turns out that just working with key-value pairs without some string parsing will be
        more involved than it seems on the surface.

        Also a way to reorganize the cards by different stats and a data display of
        a chart over time --data visualization-- would be a neat feature.

        Ok also I need to create a better template(?) or prototype object to base the formBuild
        function off of.
*/
let expDiv = document.getElementById("expDiv");
let mainContainer = document.getElementById("main-container");
let formHolder = document.getElementById("form-holder");
let saveFile = localStorage;
let createCard = document.getElementById("create-card");


let createElements = function(elem, cls, content){
  let newElem = document.createElement(elem);
  newElem.classList.add(...cls);
  newElem.innerText = content;
  return newElem;
};

let capitalize = function(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
};

let formBuild = function(){
  for(let thing in formTemplate){
    let thisThing = formTemplate[thing];
    let newItem = createElements("div", ["container"],"");
    formHolder.append(newItem);
    let newLabel = createElements("label",[],`${thisThing.name}: `);
    newLabel.htmlFor = `${thing}-input`;
    newItem.append(newLabel);
    let newInput = createElements(`${thisThing.input}`,[],"");
    newInput.id = `${thing}-input`;
    newInput.name = `${thing}-input`;
    newInput.type = `${thisThing.type}`;
    newItem.append(newInput);
  };
};

formBuild();

/*let adjustForm = function(){
  let commentField = document.getElementById("comments-input");
  //commentField.type = "number";
  console.log(commentField.type);
};

adjustForm();*/

let makeNewCard = function(){
  let newDiv = document.createElement("div");
  newDiv.classList.add("new-div","card-template");
  let titleInput = document.getElementById("title-input");
  let titleText = titleInput.value;

  let newHeading = newDiv.append(createElements("h2", ["heading"], titleText));
  mainContainer.prepend(newDiv);
  titleInput.value = "";
};

createCard.addEventListener("click", makeNewCard);
console.log(saveFile);
