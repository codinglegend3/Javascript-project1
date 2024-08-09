const btn = document.querySelector("button");
const sectionTwo = document.querySelector("#ThankYou");
const sectionOne = document.querySelector("#rating");
const span = document.querySelector("span");

// targeting all h4 elemnts using ID
const h4One = document.querySelector("#h4-1");
let h4OneText = h4One.innerHTML
console.log(h4OneText);

const h4Two = document.querySelector("#h4-2");
let h4TwoText = h4Two.innerHTML
console.log(h4TwoText);

const h4Three = document.querySelector("#h4-3");
let h4ThreeText = h4Three.innerHTML
console.log(h4ThreeText);

const h4Four = document.querySelector("#h4-4");
let h4FourText = h4Four.innerHTML
console.log(h4FourText);

const h4Five = document.querySelector("#h4-5");
let h4FiveText = h4Five.innerHTML
console.log(h4FiveText);

// target all h4 elements complete
function span1() {
	span.innerHTML = "1";
	h4One.style.backgroundColor = "white";
	h4Two.style.backgroundColor = "#333333"
	h4Three.style.backgroundColor = "#333333"
	h4Four.style.backgroundColor = "#333333"
	h4Five.style.backgroundColor = "#333333"
}

function span2() {
	span.innerHTML = "2";
	h4One.style.backgroundColor = "#333333";
	h4Two.style.backgroundColor = "white";
	h4Three.style.backgroundColor = "#333333";
	h4Four.style.backgroundColor = "#333333";
	h4Five.style.backgroundColor = "#333333";
}

function span3() {
	span.innerHTML = "3";
	h4One.style.backgroundColor = "#333333";
	h4Two.style.backgroundColor = "#333333";
	h4Three.style.backgroundColor = "white";
	h4Four.style.backgroundColor = "#333333";
	h4Five.style.backgroundColor = "#333333";
}

function span4() {
	span.innerHTML = "4";
	h4One.style.backgroundColor = "#333333";
	h4Two.style.backgroundColor = "#333333";
	h4Three.style.backgroundColor = "#333333";
	h4Four.style.backgroundColor = "white";
	h4Five.style.backgroundColor = "#333333";
}

function span5() {
	span.innerHTML = "5";
	h4One.style.backgroundColor = "#333333";
	h4Two.style.backgroundColor = "#333333";
	h4Three.style.backgroundColor = "#333333";
	h4Four.style.backgroundColor = "#333333";
	h4Five.style.backgroundColor = "white";
}



// submit function;
function marryme() {
	sectionOne.style.display = "none"
	sectionTwo.style.display = "flex"
}