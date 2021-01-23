var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/patrick.png")

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();
	var patrick = new Patrick(gameEngine);

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(patrick);
	gameEngine.start();
});
