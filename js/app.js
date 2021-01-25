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
let saveFile = localStorage;
let createCardButton = document.getElementById("create-card");

const createElements = function(elem, cls, content){
  let newElem = document.createElement(elem);
  newElem.classList.add(...cls);
  newElem.innerText = content;
  return newElem;
};



const formBuild = function(){
  let formHolder = document.getElementById("form-holder");
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
    newInput.dataset.element = thisThing.element;
    newInput.dataset.prefix = thisThing.name;
    newItem.append(newInput);
  };
};

formBuild();

const makeNewCard = function(){
  let mainContainer = document.getElementById("main-container");
  let formHolder = document.getElementById("form-holder");
  let newDiv = document.createElement("div");
  newDiv.classList.add("new-div","card-template");
  let valuesInput = document.querySelectorAll("input");
  let textArea = document.querySelectorAll("textarea");
  let wholeArray = [...valuesInput, ...textArea];
  console.log(wholeArray[0].value);
  for(let i=0; i<wholeArray.length; i++){
    let presentValue = wholeArray[i];
    let presentValueText = presentValue.value;
    newDiv.append(createElements(`${presentValue.dataset.element}`,["result"],`${presentValue.dataset.prefix}: ${presentValueText}`));
    mainContainer.prepend(newDiv);
    presentValue.value= "";
  };
};

createCardButton.addEventListener("click", makeNewCard);
/*I want to get the new card function to be working for all fields. Then I want
to add a layer of protection by making fields required and host a popup modal That
will ask to verify the input data before sending it to be saved and displayed. This
can be achieved by instead of calling the makeNewCard function directly from the
createCardButton it calls a separate function containing the values for the variables
in the makeNewCard function first.

I still need to get a save function going on as well.*/
