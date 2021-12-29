Left_Eye_X = 0;
Left_Eye_Y = 0;

function preload() {
    angel_halo = loadImage("https://i.postimg.cc/8cxpBcmv/488-4889233-angels-halo-transparent-angels-halo-png-png-download-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(angel_halo,Left_Eye_X-70, Left_Eye_Y-120, 110, 40);
}

function take_snapshot() {
    save("Angel_Filter.png")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        Left_Eye_X =  results[0].pose.leftEye.x;
        Left_Eye_Y =  results[0].pose.leftEye.y;
        console.log(Left_Eye_X);
        console.log(Left_Eye_Y);
    }
    
}

function modelLoaded() {
    console.log("PoseNet is Initialised!");
}