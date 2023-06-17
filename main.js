noseX=0;
noseY=0;
difference=0;
rightWristX=0;
rightWristY=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}

function draw(){
    document.getElementById("square_side").innerHTML="width and height of a square will be ="+difference+"px";
    background('red');
    fill('black');
    stroke('yellow');
    square(noseX,noseY,difference);

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" +noseX +"noseY=" + noseY);
        
        leftWristX=results[0].pose.leftWrist.X;
        rightWristY=results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX);

console.log("leftwristX  ="+ leftWristX +"rightWridtX="+ rightWristX+"difference =" + difference);
    }
}

