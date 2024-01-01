noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,418);
    video.position(420,240);

    canvas=createCanvas(550,550);
    canvas.position(1000,180);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized !');
}

function draw(){
    background('#FFFFFF');
    textSize(difference);
    fill('#FFD700');
    stroke('#000');
    text('Saumya',30,300);
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX="+leftWristX+"rightWrist="+ rightWristX+"difference="+difference);
    }
}
