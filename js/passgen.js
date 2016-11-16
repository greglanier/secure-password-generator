//Returns a random number between the provided values.
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function password_generator( len ) {

  //binary values for each possible entity.
  var total = 0;
  //lowercase = 1, uppercase = 2, numeric = 4, punctuation = 8
  if(document.getElementById("lowercaseCheck").checked){ total += 1; }
  if(document.getElementById("uppercaseCheck").checked){ total += 2; }
  if(document.getElementById("numericCheck").checked){ total += 4; }
  if(document.getElementById("punctuationCheck").checked){ total += 8; }
  //Get the textbox input value.
  var textboxVal = ($("#NumberOfChars").val() || 8);
  //document.getElementById('charLengthVar').value;
  //Grab the length of the texbox input value.
  var length = (len)?(len):(textboxVal);
  //Declare all valid alpha characters in lower.
  var stringLower = "abcdefghijklmnopqrstuvwxyz";
  //Declare all valid alpha characters in upper.
  var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Declare all valid numeric values.
  var numeric = '0123456789';
  //Declare all valid punctuation values.
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  //Empty strings to push to.
  var password = "";
  var character = "";
  var crunch = true;
  var charType = 0;

  while( password.length<length && total > 0) {

    //1) Math.random*Math.random gives a random decimal value. This means
    //you'll get a random part of 1.
    //2) From that, you multiply against the length of the string.
    //3) Return correlates to the position of the character in the list of accepted values.
    entity1 = Math.ceil(stringLower.length * Math.random()*Math.random());
    entity2 = Math.ceil(stringUpper.length * Math.random()*Math.random());
    entity3 = Math.ceil(numeric.length * Math.random()*Math.random());
    entity4 = Math.ceil(punctuation.length * Math.random()*Math.random());

    //Here we are taking the binary total and determining which boxes were checked
    //then using that to randomly pick characters from those.
    switch(total){
      //nothing picked
      case 0:
        //Should never hit this..
        alert("You cannot generate a password with no characters!");
        break;
      //lowercase picked
      case 1:
        character += stringLower.charAt(entity1);
        break;
      //uppercase picked
      case 2:
        character += stringUpper.charAt(entity2);
        break;
      //lowercase, and uppercase picked
      case 3:
        charType = Math.ceil(getRandomArbitrary(0, 2));
        switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += stringUpper.charAt(entity2);
          break;
        }
        break;
      //numeric picked
      case 4:
        character += numeric.charAt(entity3);
        break;
      //lowercase, and numeric picked
      case 5:
        charType = Math.ceil(getRandomArbitrary(0, 2));
        switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += numeric.charAt(entity3);
          break;
        }
        break;
      //uppercase, and numeric picked
      case 6:
        charType = Math.ceil(getRandomArbitrary(0, 2));
        switch(charType){
          case 1:
          character += stringUpper.charAt(entity2);
          break;
          case 2:
          character += numeric.charAt(entity3);
          break;
        }
        break;
      //lowercase, uppercase, and numeric picked.
      case 7:
        charType = Math.ceil(getRandomArbitrary(0, 3));
        switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += stringUpper.charAt(entity2);
          break;
          case 3:
          character += numeric.charAt(entity3);
          break;
        }
        break;
      //punctuation picked.
      case 8:
        character += punctuation.charAt(entity4);
        break;
      //lowercase, and punctuation picked.
      case 9:
      charType = Math.ceil(getRandomArbitrary(0, 2));
      switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //uppercase, and punctuation picked.
      case 10:
      charType = Math.ceil(getRandomArbitrary(0, 2));
      switch(charType){
          case 1:
          character += stringUpper.charAt(entity2);
          break;
          case 2:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //lowercase, uppercase, and punctuation picked.
      case 11:
      charType = Math.ceil(getRandomArbitrary(0, 3));
      switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += stringUpper.charAt(entity2);
          break;
          case 3:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //numeric, and punctuation picked.
      case 12:
        charType = Math.ceil(getRandomArbitrary(0, 2));
        switch(charType){
          case 1:
          character += numeric.charAt(entity3);
          break;
          case 2:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //lower, numeric, and punctuation picked.
      case 13:
      charType = Math.ceil(getRandomArbitrary(0, 3));
      switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += numeric.charAt(entity3);
          break;
          case 3:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //upper, numeric, and punctuation picked.
      case 14:
      charType = Math.ceil(getRandomArbitrary(0, 3));
      switch(charType){
          case 1:
          character += stringUpper.charAt(entity2);
          break;
          case 2:
          character += numeric.charAt(entity3);
          break;
          case 3:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      //lower, upper, numeric, and punctuation picked.
      case 15:
      charType = Math.ceil(getRandomArbitrary(0, 4));
      switch(charType){
          case 1:
          character += stringLower.charAt(entity1);
          break;
          case 2:
          character += stringUpper.charAt(entity2);
          break;
          case 3:
          character += numeric.charAt(entity3);
          break;
          case 4:
          character += punctuation.charAt(entity4);
          break;
        }
        break;
      default:
        alert("Invalid option set. Please contact system administrator");
      break;
    }

    password = character;
}

  if(total == 0){
    alert("You cannot generate a password with no characters!");
  }
  else
  {
    $(function () {$('#passwordText').val(password); });
  }

}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#passwordText').val()).select();
    document.execCommand("copy");
    $temp.remove();
}

function Submit() {
  password_generator();
}

//self invoking function to properly swap dropdown button text on selection.
$(function(){
    $(".dropdown-menu li a").click(function(){
    $(".charmenu:first-child").text($(this).text());
     $(".charmenu:first-child").val($(this).text());
    });
});
