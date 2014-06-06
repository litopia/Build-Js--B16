var nth = 1;

var addButton = function() {
  var enterText = {
    text: null,
    promptMsg: "What will your button say?",
    alertText: "Please enter content for your button."
  };

  var enterColor = {
    text: null,
    promptMsg: "Enter color.",
    alertText: "Please enter a valid color."
  };

  enterText.text = prompt(enterText.promptMsg);

  nth = incrementHeight(nth);

  var foo = isValidEntry(enterText);

  while(foo === false){
    entryFail(enterText);
    foo = isValidEntry(enterText);
  }

  enterColor.text = prompt(enterColor.promptMsg);
  foo = isValidEntry(enterColor);
  while(foo === false){
    entryFail(enterColor);
    foo = isValidEntry(enterColor);
  }
  console.log("out of loop");
  makeButton(enterText, enterColor, nth);

};

 var incrementHeight = function(n) {
   return n *= 1.618;
 };

 var isValidEntry = function(entry){
   if(entry.text !== "" && entry.text !== null){
     return true;
   }
   return false;
 };

var entryFail = function(entry){
  alert(entry.alertText);
  entry.text=prompt(entry.promptMsg);
};

var makeButton = function(enterText, enterColor, nth){
  var newButton = document.createElement('button');
  newButton.setAttribute('onClick', 'addButton()');

  newButton.style.backgroundColor = enterColor.text;
  newButton.style.height = nth +"em";
  newButton.innerHTML = enterText.text;
  document.querySelector('body').appendChild(newButton);
};
