"use strict";

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#ConvertBaseButton").addEventListener('click', Convert);
	document.querySelector("#ExampleButton").addEventListener('click', ExampleConversion);
	document.querySelector("#FlipButton").addEventListener('click', Flip);
	document.querySelectorAll("#ClearButton").forEach(t => {
		t.addEventListener('click', Clear);
	});
	document.querySelectorAll(".copy").forEach(t => {
		t.addEventListener('click', Copy);
	});
	document.querySelectorAll(".source").forEach(t => {
		t.addEventListener('click', Source);
	});
	document.querySelectorAll(".destination").forEach(t => {
		t.addEventListener('click', Desintation);
	});



	document.querySelectorAll(".conversionTextArea").forEach(t => {
		t.addEventListener('input', Length);
	});
	// I don't know if change does anything, but input doesn't seem to cover all
	// cases of user interaction. 
	document.querySelectorAll(".conversionTextArea").forEach(t => {
		t.addEventListener('change', Length);
	});
});




function Convert() {
	let inputAlphabet = document.getElementById("inputAlphabet").value;
	let inputString = document.getElementById("inputString").value;
	let outputAlphabet = document.getElementById("outputAlphabet").value;

	let outputString = baseConvert(inputString, inputAlphabet, outputAlphabet);
	console.log(outputString);
	document.getElementById("outputString").value = outputString;
	Update();
}


function Flip() {
	let inputAlphabet = document.getElementById("inputAlphabet").value;
	let inputString = document.getElementById("inputString").value;
	let outputAlphabet = document.getElementById("outputAlphabet").value;
	let outputString = document.getElementById("outputString").value;

	document.getElementById("inputAlphabet").value = outputAlphabet;
	document.getElementById("inputString").value = outputString;
	document.getElementById("outputAlphabet").value = inputAlphabet;
	document.getElementById("outputString").value = inputString;

	Update();
}


function ExampleConversion() {
	document.getElementById("inputString").value = "k-6cq1CLkrfCmW84VUX-6AmJUfkP-orILPxm_BuBPjY";
	document.getElementById("inputAlphabet").value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	document.getElementById("outputAlphabet").value = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
	Convert();
	Update();
}


function Copy() {
	//console.log("Triggered Copy");
	// Alternative selector:
	//console.log(this.parentNode.previousElementSibling.firstElementChild.value);

	let input = this.parentNode.previousElementSibling.firstElementChild;
	input.select();
	input.setSelectionRange(0, 99999);
	document.execCommand("copy");
}

function Source() {
	console.log("Entered Source");
	let input = this.parentNode.parentNode.firstElementChild.firstElementChild.value;
	document.getElementById("inputAlphabet").value = input;
	Update();
}

function Desintation() {
	console.log("Entered Desintation");
	let input = this.parentNode.parentNode.firstElementChild.firstElementChild.value;
	document.getElementById("outputAlphabet").value = input;
	Update();
}

function Clear() {
	//console.log("Triggered Clear");
	document.getElementById("inputAlphabet").value = "";
	document.getElementById("inputString").value = "";
	document.getElementById("outputAlphabet").value = "";
	document.getElementById("outputString").value = "";
	Update();
}


function Length() {
	//console.log("Triggered Length");
	//console.log(this);
	this.parentNode.querySelector(".lengthDisplay").textContent = this.value.length;
}


function LengthAll() {
	//console.log("Triggered LengthAll");

	document.getElementById("inputAlphabetLength").textContent = document.getElementById("inputAlphabet").value.length;
	document.getElementById("inputStringLength").textContent = document.getElementById("inputString").value.length;
	document.getElementById("outputAlphabetLength").textContent = document.getElementById("outputAlphabet").value.length;
	document.getElementById("outputStringLength").textContent = document.getElementById("outputString").value.length;


}

// Update updates all information presented on the screen.  
function Update(){
	LengthAll();
}