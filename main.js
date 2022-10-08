function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_coin = loadSound("coin.wav")
	gameover = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_kill = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("game-console")
	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on("pose", gotPoses)
}
function modelLoaded(){
	console.log("PoseNet in initialized")
}

function draw() {
	game()

}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}






