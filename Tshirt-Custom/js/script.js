// To increase the font-size using slider control(range slide)
// ***********************************************************
var range = document.querySelector("#range");
var form = document.querySelector("#printchatbox");
range.addEventListener("input", function () {
  // let x = (form.style["font-size"] = this.value + "px");
  // let x = (form.style["font-size"] = this.value);
  // x = x + 1 + "px";
  // form.style["font-size"] = this.value + "rem";
  // form.style["font-size"] = range.value+  "px";
  // form.style["font-size"] = 1 + range.value + "px";
  form.style["font-size"] = 2 + range.value + "px"; // bets way to increase the  letter in size
  console.log(form.style["font-size"]);
});

// for FONTs
// ************
// when the user types a text, it will display on the T-shirt
var inputBox = document.getElementById("tshirt-preview");
inputBox.onkeyup = function () {
  // to change the color of the text to red
  if (this.value.length > 20) {
    let xy = document.querySelector(".chTxtColor");
    xy.style.color = "red";
  } else {
    let xy = document.querySelector(".chTxtColor");
    xy.style.color = "black";
  }
  //  && this.value.length <= 20

  if (this.value.length >= 1) {
    let zzz = document.getElementById("errorsDip");
    zzz.style.display = "none";
  }

  // // to change the border color
  // let inpBorder = document.getElementById("tshirt-preview");
  // inpBorder.style.borderColor = "skyblue";
  //  //************************ */
  // if the enterd value is right then the red border turned off
  let ti = document.querySelector(".chatinput");
  ti.classList.remove("is-invalid");

  document.getElementById("printchatbox").innerHTML = inputBox.value;
};

//Form Validation
// *****************

// let rf = document.getElementById("registration-form");
let addCa = document.getElementById("submitButton"); // // on clicking Add to cart Buttons
addCa.onclick = addToCart;

// addToCart function starts here
function addToCart(e) {
  let errors = [];
  let elErrDisp = document.getElementById("errorsDip");
  elErrDisp.innerHTML = "";

  //   text input
  let textIpute = document.getElementsByName("inputText");

  // get their values
  let elFnValue = textIpute[0].value;

  //   to check if it is empty or not
  if (!elFnValue) {
    // for border coloring if it is empty
    let ti = document.querySelector(".chatinput");
    ti.classList.add("is-invalid");
    errors.push("Text is required");
  } else if (elFnValue.length > 20) {
    errors.push("Max 20 charcter allowed");
    // add class is-invalid from bootstrap
    // for border color change if the input is invalid
    let ti = document.querySelector(".chatinput");
    ti.classList.add("is-invalid");
  }
  // for errors
  if (errors.length > 0) {
    e.preventDefault();
    elErrDisp.style.display = "block";
    elErrDisp.style.color = "red";
    for (l = 0; l < errors.length; l++) {
      elErrDisp.innerHTML = errors[l] + "<br>";
    }
  } else {
    // calling price calculating function
    calcPrice();
    // if the enterd value is right then the red border turned off
    let ti = document.querySelector(".chatinput");
    ti.classList.remove("is-invalid");
  }
}
// a function that calculate the price is start here
function calcPrice() {
  let tprice = 20.0;

  let tTax = (9 * 40) / 100;
  let x = tprice + tTax;
  let zx = document.querySelector(".carts1");
  zx.innerHTML =
    "Costum Shirt " +
    "<hr/>" +
    "Subtotal:" +
    "\xa0\xa0 \xa0 \xa0\xa0 \xa0 \xa0\xa0\xa0 \xa0 \xa0 " + // to add space
    "$" +
    tprice.toFixed(2) +
    "<br/>" +
    "Tax:" +
    "\xa0\xa0\xa0\xa0 \xa0 \xa0\xa0 \xa0\xa0\xa0\xa0 \xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0" +
    "$" +
    tTax.toFixed(2) +
    "<br/>" +
    "Total:" +
    "\xa0\xa0\xa0 \xa0 \xa0\xa0 \xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0" +
    "$" +
    x.toFixed(2);
}

let changeFontStyle = (font) => {
  document.getElementById("printchatbox").style.fontFamily = font.value;
};
// font color

function initbl() {
  document.getElementById("printchatbox").style.color = "black";
}

function init() {
  // document.getElementById("chkd").style.color = "blue";
  document.querySelector(".dispText").style.color = "blue";
  // document.getElementById("about").style.color = "blue";
}

function init1() {
  document.getElementById("printchatbox").style.color = "red";
}
function init2() {
  document.getElementById("printchatbox").style.color = "green";
}

//Remove cart
let rm = document.getElementById("rmCart");
rm.onclick = removeCa;

function removeCa() {
  let zx = document.querySelector(".carts1");
  zx.style.display = "none";
  let l = document.getElementById("removeCart");
  l.style.display = "block";
}

// to display error message if input txt more than 20
// if (this.value.length > 20) {
// let vc = document.getElementById("errorsDip");
// vc.style.display = "block";
// }

// let hhh = () => {
//   let zx = document.querySelector(".carts1");
//   zx.style.display = "none";
// };
// font Selection
// let fch = document.querySelector(".input");
// let pp = document.getElementById("input-font");
// fch.onchange = changeFontStyle;

//
// let zx = document.querySelector(".carts1");
// zx.style.display = "block";
