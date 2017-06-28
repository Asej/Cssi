console.log("this works better now.");

var cookies = [
  "chocholate chips.",
  "lemon cookies.",
  "thin mints.",
  "samoa.",
  "oatmeal rasins.",
  "oreos."
];

function eat(cookies){
  console.log('I just ate ' + cookies );
  }

function eatCookies(){
  for (var i=0; i < cookies.length; i =i+1){
    eat(cookies[i]);
  }
}
  var eatButton = $(".devour");
  eatButton.on("click",eatCookies
  );
var text =$('.myClass');

var colorButton = $(".color")
eatButton.on("click",function (){
  text.toggleClass("green");
});
