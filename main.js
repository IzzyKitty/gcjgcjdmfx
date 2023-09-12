video=""
status1=""
objects=[]

function setup(){
canvas=createCanvas(480,380)
canvas.center()
video.hide()
}

function preload(){
video=createVideo("video.mp4")
}

function draw(){
image(video,0,0,480,380)
if(status1!=""){
objectDetector.detect(video,gotresults)
for(i=0; i<objects.length; i++){
document.getElementById("number_of_objects").innerHTML="number of objects detectd are"+objects.length
document.getElementById("status").innerHTML="status: objects detected"
fill("#6CBCCF")
percent=floor(objects[i].confidence*100)
text(objects[i].label+""+percent,objects[i].x,objects[i].y)
noFill()
stroke("#6CBCCF")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelloaded(){
console.log("model has been loaded");
video.loop()
video.volume(0)
video.speed(1)
}

function gotresults(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results
}