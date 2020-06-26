let navigation = document.getElementById("header");
let logo = document.getElementById("logo");
let sticky = navigation.offsetTop;

let middle = document.getElementsByClassName("middle")[0];
console.log(sticky)

document.body.onscroll = function () {
  if (window.pageYOffset > sticky) {
    console.log(document.documentElement.scrollTop);

    navigation.style.height = "70px";
    navigation.classList.add("sticky");
    logo.style.fontSize = "2rem";
    middle.style.paddingTop = "70px";
  } else {
    navigation.style.height = "130px";
    navigation.classList.remove("sticky");
    logo.style.fontSize = "3rem";
    middle.style.paddingTop = "0px";
    
  }
};


var covers = document.getElementsByClassName("cover");
var len = covers.length;
covers[len-1].style.paddingBottom = "0";