//App.js//
/*TODO: Storage solution obviously. That is the main goal for this experiment. It
        turns out that just working with key-value pairs without some string parsing will be
        more involved than it seems on the surface.

        Also a way to reorganize the cards by different stats and a data display of
        a chart over time --data visualization-- would be a neat feature.
*/
let mainContainer = document.getElementById("main-container");
let saveFile = localStorage;
let createCard = document.getElementById("create-card");

let createElements = function(elem, cls, content){
  let newElem = document.createElement(elem);
  newElem.classList.add(...cls);
  newElem.innerText = content;
  //newDiv.append(newElem);
  return newElem;
}


let makeNewCard = function(){
  let newDiv = document.createElement("div");
  newDiv.classList.add("new-div","card-template");
  let titleInput = document.getElementById("title-input");
  let titleText = titleInput.value;
  newDiv.append(createElements("h2", ["cat"], titleText));
  mainContainer.prepend(newDiv);
};

createCard.addEventListener("click", makeNewCard);
console.log(saveFile, newCard);
