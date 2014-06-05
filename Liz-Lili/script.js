var nth = 1;

var addButton = function() {
  var text = prompt("What will your button say?");
  var color;
  nth = incrementHeight(nth);

  if(isValidEntry(text)){
    color = prompt("Enter a color for the button").toLowerCase();
    isValidColor(isValidEntry(color), text, color, nth);
  }else{
    alert("You have enter words to make your button.");
    text = prompt("What will your button say?");
    color = prompt("Enter a color for the button").toLowerCase();
    isValidColor(isValidEntry(color), text, color, nth);
  }

};

var incrementHeight = function(n) {
  return n *= 1.618;
};

var isValidEntry = function(content){
  if(content === ""){
    return false;
  }
  return true;
};

var isValidColor = function(isValid, text, color, nth){
  if(isValid){
      makeButton(text, color, nth);
    }else{
      alert("Please enter a valid color value.");
      color = prompt("Enter a color for the button").toLowerCase();
      makeButton(text, color, nth);
    }
};

var makeButton = function(text, color, nth){
  var newButton = document.createElement('button');
  newButton.setAttribute('onClick', 'addButton()');

  newButton.style.backgroundColor = color;
  newButton.style.height = nth +"em";
  newButton.innerHTML = text;
  document.querySelector('body').appendChild(newButton);
};
