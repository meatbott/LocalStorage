//App.js//
/*TODO: Storage solution obviously. That is the main goal for this experiment. It
        turns out that just working with key-value pairs without some string parsing will be
        more involved than it seems on the surface.

        Also a way to reorganize the cards by different stats and a data display of
        a chart over time --data visualization-- would be a neat feature.
*/
let expDiv = document.getElementById("expDiv");
let mainContainer = document.getElementById("main-container");
let formStructure = document.getElementById("form-structure");
let saveFile = localStorage;
let createCard = document.getElementById("create-card");


let createElements = function(elem, cls, content){
  let newElem = document.createElement(elem);
  newElem.classList.add(...cls);
  newElem.innerText = content;
  return newElem;
}

let formBuild = function(){
  for(thing in new Card){
    let newItem = createElements("div", [`${thing}-value`,"container"],"");
    formStructure.append(newItem);
    let newLabel = createElements("label",[],thing);
    //capitalize label content
    newLabel.htmlFor = `${thing}-input`;
    newItem.append(newLabel);
    let newInput = createElements("input",[],"");
    newInput.id = `${thing}-input`;
    newInput.name = `${thing}-input`;
    newItem.append(newInput);
  }
}

formBuild();

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
