// GET MODAL ELEMENT
var modal1 = document.getElementById('simpleModal1');

// GET OPEN MODAL BUTTON
var modalBtn1 = document.getElementById('modalBtn1');

// GET CLOSE BUTTON
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0]; // ByClass WILL GET US AN ARRAY/COLLECTION OF CLASSES WITH THIS closeBtn, WE JUST WANT THE FIRST ONE[0]
// CAREFULL ABOUT THIS^


// E V E N T S

// LISTEN FOR OPEN CLICK
modalBtn1.addEventListener('click', openModal1); // WE LISTEN FOR A click, WHEN THAT HAPPENS, RUN openModal FUNCTION

// LISTEN FOR CLOSE CLICK
closeBtn1.addEventListener('click', closeModal1); // WE LISTEN FOR A click, WHEN THAT HAPPENS, RUN closeModal FUNCTION


// LISTEN FOR OUTSIDE CLICK
window.addEventListener('click', clickOutside1);


// FUNCTION TO OPEN MODAL(all we do is change modal display so its not "none" anymore, so its not hidden anymore)
function openModal1() {
	modal1.style.display = 'block';
}


// FUNCTION TO CLOSE MODAL(all we do is change modal display so its "none", so its hidden
function closeModal1() {
	modal1.style.display = 'none';
}


// FUNCTION TO CLOSE MODAL(all we do is change modal display so its "none", so its hidden
function clickOutside1(e) {
	if(e.target == modal1) { // MAKE SURE THE TARGET IS EQUAL TO MODAL(the dark area around)
		modal1.style.display = 'none';
	}
}






var modal2 = document.getElementById('simpleModal2'); //PIC TWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
var modalBtn2 = document.getElementById('modalBtn2');
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0]; 
modalBtn2.addEventListener('click', openModal2); 
closeBtn2.addEventListener('click', closeModal2); 
window.addEventListener('click', clickOutside2);
function openModal2() {
	modal2.style.display = 'block';
}
function closeModal2() {
	modal2.style.display = 'none';
}
function clickOutside2(e) {
	if(e.target == modal2) {
		modal2.style.display = 'none';
	}
}





var modal3 = document.getElementById('simpleModal3'); //PIC THREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
var modalBtn3 = document.getElementById('modalBtn3');
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0]; 
modalBtn3.addEventListener('click', openModal3); 
closeBtn3.addEventListener('click', closeModal3); 
window.addEventListener('click', clickOutside3);
function openModal3() {
	modal3.style.display = 'block';
}
function closeModal3() {
	modal3.style.display = 'none';
}
function clickOutside3(e) {
	if(e.target == modal3) {
		modal3.style.display = 'none';
	}
}






var modal4 = document.getElementById('simpleModal4'); //PIC FOURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
var modalBtn4 = document.getElementById('modalBtn4');
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0]; 
modalBtn4.addEventListener('click', openModal4); 
closeBtn4.addEventListener('click', closeModal4); 
window.addEventListener('click', clickOutside4);
function openModal4() {
	modal4.style.display = 'block';
}
function closeModal4() {
	modal4.style.display = 'none';
}
function clickOutside4(e) {
	if(e.target == modal4) {
		modal4.style.display = 'none';
	}
}





var modal5 = document.getElementById('simpleModal5'); //PIC FIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
var modalBtn5 = document.getElementById('modalBtn5');
var closeBtn5 = document.getElementsByClassName('closeBtn5')[0]; 
modalBtn5.addEventListener('click', openModal5); 
closeBtn5.addEventListener('click', closeModal5); 
window.addEventListener('click', clickOutside5);
function openModal5() {
	modal5.style.display = 'block';
}
function closeModal5() {
	modal5.style.display = 'none';
}
function clickOutside5(e) {
	if(e.target == modal5) {
		modal5.style.display = 'none';
	}
}





var modal6 = document.getElementById('simpleModal6'); //PIC SIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
var modalBtn6 = document.getElementById('modalBtn6');
var closeBtn6 = document.getElementsByClassName('closeBtn6')[0]; 
modalBtn6.addEventListener('click', openModal6); 
closeBtn6.addEventListener('click', closeModal6); 
window.addEventListener('click', clickOutside6);
function openModal6() {
	modal6.style.display = 'block';
}
function closeModal6() {
	modal6.style.display = 'none';
}
function clickOutside6(e) {
	if(e.target == modal6) {
		modal6.style.display = 'none';
	}
}





var modal7 = document.getElementById('simpleModal7'); //PIC SEVENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
var modalBtn7 = document.getElementById('modalBtn7');
var closeBtn7 = document.getElementsByClassName('closeBtn7')[0]; 
modalBtn7.addEventListener('click', openModal7); 
closeBtn7.addEventListener('click', closeModal7); 
window.addEventListener('click', clickOutside7);
function openModal7() {
	modal7.style.display = 'block';
}
function closeModal7() {
	modal7.style.display = 'none';
}
function clickOutside7(e) {
	if(e.target == modal7) {
		modal7.style.display = 'none';
	}
}




var modal8 = document.getElementById('simpleModal8'); //PIC EIGHTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
var modalBtn8 = document.getElementById('modalBtn8');
var closeBtn8 = document.getElementsByClassName('closeBtn8')[0]; 
modalBtn8.addEventListener('click', openModal8); 
closeBtn8.addEventListener('click', closeModal8); 
window.addEventListener('click', clickOutside8);
function openModal8() {
	modal8.style.display = 'block';
}
function closeModal8() {
	modal8.style.display = 'none';
}
function clickOutside8(e) {
	if(e.target == modal8) {
		modal8.style.display = 'none';
	}
}




var modal9 = document.getElementById('simpleModal9'); //PIC NINEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
var modalBtn9 = document.getElementById('modalBtn9');
var closeBtn9 = document.getElementsByClassName('closeBtn9')[0]; 
modalBtn9.addEventListener('click', openModal9); 
closeBtn9.addEventListener('click', closeModal9); 
window.addEventListener('click', clickOutside9);
function openModal9() {
	modal9.style.display = 'block';
}
function closeModal9() {
	modal9.style.display = 'none';
}
function clickOutside9(e) {
	if(e.target == modal9) {
		modal9.style.display = 'none';
	}
}