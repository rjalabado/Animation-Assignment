var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/patrick.png");
ASSET_MANAGER.queueDownload("./sprites/patrick meme.jpg");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();
	var patrick = new Patrick(gameEngine);
	var patrickMeme = new PatrickMeme(gameEngine);

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(patrick);
	gameEngine.addEntity(patrickMeme);
	gameEngine.start();
});
