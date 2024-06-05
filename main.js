status="";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
    object_name = document.getElementById("object_name").value;
    console.log(object_name);
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function draw(){
    image (video, 0, 0, 300, 300);
}