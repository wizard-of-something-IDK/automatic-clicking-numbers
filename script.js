var boxColor = [
	{
		color: "red"
	},
	{
		color: "#7C35BE"
	},
	{
		color: "blue"
	}
];

var elements = [];

function addingBoxes(color) {
	var that = this;
	this.start = 0;
	this.color = color;
	this.ele = document.createElement("div");

	this.ele.style.backgroundColor=this.color;
  this.ele.style.height="100px";
  this.ele.style.width="200px";
	this.ele.style.borderRadius = "10px";
	
	this.startEle = document.createElement("div");
	this.startEle.classList.add("box");
	this.startEle.style.textAlign = "center";
	this.startEle.style.fontSize = "18px";
	this.startEle.style.color = "white";
	this.startEle.style.padding = "35px";

	this.startEle.innerHTML = this.start;
	this.ele.appendChild(this.startEle);
	
	this.ele.addEventListener("click", function(){
		that.increaseStart();
	})
	
	document.body.appendChild(this.ele);
}
	
addingBoxes.prototype.increaseStart = function () {
	this.start = this.start + 1;
	this.startEle.innerHTML = this.start;
}

for (var i = 0; i < boxColor.length; i++){
	elements.push(new addingBoxes(boxColor[i].color));
}