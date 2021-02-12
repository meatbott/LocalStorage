//App.js//
/*TODO: Also a way to reorganize the cards by different stats and a data display of
        a chart over time --data visualization-- would be a neat feature.

        Ok also I need to create a better template(?) or prototype object to base the formBuild
        function off of.

        2/9/2021: Success in implementing ordered display! Now the cards show up in descending ordered
        by age by default. Adding a self-sort by different parameters would be the next thing to do.
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

/* I will need a safeguard against naming a heading the same as an exisitng heading so the data
does NOT get overwritten. If two object keys are the same, the first one gets replaced by
the second one currently.
*/

/*Needs a build function that can be reused rather than creating a new one every time I need
to create cards and such*/

const populate = function(){
  let orgArr = [];
  let mainContainer = document.getElementById("main-container");
  let currentDate = document.getElementById("current-date");

  for(card in saveFile)
  if(typeof saveFile[card]=="string"){
    let jasonObj = JSON.parse(saveFile[card]);
    orgArr.push(jasonObj);
  };

  orgArr.sort(function(a, b){
    return a.iteration - b.iteration;
  });

  for(obj in orgArr){
  let newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  let thisObj = orgArr[obj];
  for(prop in thisObj)
  newDiv.append(createElements(`${formTemplate[prop].element}`,["result"],`${formTemplate[prop].name}: ${thisObj[prop]}`));
  mainContainer.prepend(newDiv);
  };
};

window.onload = populate();

const makeNewCard = function(){
  let mainContainer = document.getElementById("main-container");
  let newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  let valuesInput = document.querySelectorAll("input");
  let textArea = document.querySelectorAll("textarea");
  let wholeArray = [...valuesInput, ...textArea];
  let arr = [];
  for(let i=0; i<wholeArray.length; i++){
    let presentValue = wholeArray[i];
    let presentValueText = presentValue.value;
    arr.push(presentValueText);
    newDiv.append(createElements(`${presentValue.dataset.element}`,["result"],`${presentValue.dataset.prefix}: ${presentValueText}`));
    mainContainer.prepend(newDiv);
    presentValue.value= "";
  };
  let objCard = new Card(...arr);
  let objStr = JSON.stringify(objCard);
  saveFile.setItem(arr[0], objStr);
  console.log(saveFile);
};

createCardButton.addEventListener("click", makeNewCard);



/*I want to get the new card function to be working for all fields. Then I want
to add a layer of protection by making fields required and host a popup modal That
will ask to verify the input data before sending it to be saved and displayed. This
can be achieved by instead of calling the makeNewCard function directly from the
createCardButton it calls a separate function containing the values for the variables
in the makeNewCard function first.*/
