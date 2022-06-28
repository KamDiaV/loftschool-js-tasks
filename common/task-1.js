const string = "ПрИвЕт! Как дела?";

console.log(getVowels(string));

function getVowels(string) { 
  var s = "";
  var dictionary = "аеёиоуыэюя"; 

  for (var i = [0]; i < string.length; i++) {
      var a1 = string[i];
      
      if (dictionary.includes(a1.toLowerCase())) {
         s += a1;
      }
  }
  return s;
}

// const string = "Привет! Как дела?";

// for (var i = [0]; i < string.length; ++i) {
//   var a1 = string[i];

//   if (dictionary.includes(a1)) {
//   console.log(a1);
// }
// }

// var a1 = string[0];

// if (dictionary.includes(a1)) {
//   console.log(a1);
// }


// var a2 = string[1];

// if (dictionary.includes(a2)) {
//   console.log(a2); 
// }
  

// var a3 = string[2];

// if (dictionary.includes(a3)) {
//   console.log(a3);
// }




