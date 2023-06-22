//your JS code here. If required.
const sizeInfo=document.querySelector("#sizeInfo");
const width=document.querySelector("h1:first-child");
const height=document.querySelector("h1:last-child");

function screensize(){
	width.innerText='Width: ${document.body.clientWidth}px';
	height.innerText='Height: ${document.body.clientHeight}px';
	
}
window.addEventListener('resize', screensize);
screensize();
