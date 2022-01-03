noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;
function setup() {

    video = createCapture(VIDEO);
    video.size(550,500)
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
  }
  function draw(){
      background("grey");
      textSize(difference);
      fill("red");
      text("Saran", 50, 400);

}
  function modelLoaded(){
    console.log('posenet is initialized');
  }
  function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "   noseY = " + noseY);
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX)
    console.log("leftwristX = " + leftwristX + "rightwristX" + rightwristX + "difference = " + difference);

}
  }