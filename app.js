const rates = document.querySelectorAll(".rates");

//rating hover effect
let hoverRates = document.querySelectorAll(".rates:hover");

for(let i = 0; i < hoverRates.length; i++){
  hoverRates[i].style.backgroundColor = "hsl(25, 97%, 53%)";
  hoverRates[i].style.color ="hsl(0, 0%, 100%)";
}

//rating record functionality

let rating = 0;

for(let i = 0; i< rates.length; i++){
  rates[i].addEventListener("click",disp);
}

function disp(){
  let parent = this.parentNode;
  let listCont = parent.querySelectorAll(".rates");
  for(let i = 0; i < listCont.length; i++){
    listCont[i].style.backgroundColor = "rgba(38,47,56,1)";
  }
  this.style.backgroundColor = "hsl(217, 12%, 63%)";
  txt = this.firstChild.firstChild;
  rating = txt.nodeValue;
}



//Submit button functionality
const btn = document.getElementById("subBtn");
btn.addEventListener("click", dispBack);

function dispBack() {
  //text align after card rotates
  document.body.style.textAlign = "center";
  //selecting cards to display
  let hoverCard = document.querySelector("#ratingCardHover");
  let ratingCard = document.querySelector(".ratingCard");
  let ratingSelect = document.querySelector("#ratingSelected");
  ratingSelect.innerHTML = rating;
  hoverCard.style.display = "block";
  ratingCard.style.display = "none";
  
  setHead();

}

//hover card selector
function hoverCard(){
  let ratingCardHover = document.querySelector("#ratingCardHover");
  return ratingCardHover;
}

//submission page head formatting
function setHead(){
  let ratingCardHover = hoverCard();
  let hoverCardHead = ratingCardHover.querySelector("h1");
  hoverCardHead.style.marginBottom = "18px";
  hoverCardHead.style.marginTop = "28px";
}

//submission page card padding formatting
function setPadding(){
  let ratingCardHover = hoverCard();
  ratingCardHover.style.padding = "36px 30px";
}