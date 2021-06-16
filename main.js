song="";
song1="";

leftWristX="";
leftWristY="";

rightWristX="";
rightWristY="";

function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotResult);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotResult(result){
    if(result.length()>0){
        console.log(result);
        leftWristX=result[0].pose.leftWrist.x;
        leftWristy=result[0].pose.leftWrist.y;
        console.log("left wrist x= "+leftWristX+" and left wrist Y= "+leftWristY);

        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;
        console.log("right wrist x= "+rightWristX+" right wrist y="+rightWristY);
    }
}

function draw(){
    image(video,0,0,600,500);
}