// Here we can use else-if ladder method also

/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/

// To build string, use template literal
// Select button element
const button = document.querySelector("button");
let resultdiv = document.createElement("div");
resultdiv.id = "result"; 
//   select wrapper
document.getElementById("wrapper").appendChild(resultdiv);  //to join into wrapper's child after showstats button

// Event listener - - to listen (track) the event whether action happening or not -- clicking, typing, mouse hovering, etc

button.addEventListener("click", displayStats); //click - event, displaystats- function name
// Creating a function
function displayStats() {
  //   console.log('clicked'); - to see or check in console if the user clicks an option
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  //   console.log(city);
  let population = 0,
    literacyRate = 0,
    langauge = "";

  switch (city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada";
      break;

    case "Chennai":
      population = 4646732;
      literacyRate = 90.2;
      language = "Tamil";
      break;

    case "Delhi":
      population = 16787941;
      literacyRate = 86.2;
      language = "Hindi";
      break;

    case "Mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;
  }
  let text = `The Indian city of ${city} a population of ${population}. Language spoken is ${langauge} and literacy rate is ${literacyRate}%. `;
  console.log(text);

  document.getElementById("result").innerHTML = text;
}
// finished at 5.56 pm at home
