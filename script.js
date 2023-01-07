let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});

/*https://usefulangle.com/post/352/javascript-capture-image-from-camera*/




function printOne(){
  document.body.classList.toggle('onePrint');
  window.print();
} 

function printTwo(){
  document.body.classList.toggle('twoPrint');
  window.print();
}

function printThree(){
  document.body.classList.toggle('threePrint');
  window.print();
}
function printFour(){
  document.body.classList.toggle('fourPrint');
  window.print();
}
function printFive(){
  document.body.classList.toggle('fivePrint');
  window.print();
}
function printSix(){
  document.body.classList.toggle('sixPrint');
  window.print();
}
function printSeven(){
document.body.classList.toggle('sevenPrint');
window.print();
}

console.log(innerWidth);