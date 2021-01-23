class Patrick {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/patrick.png");
        this.animation = new Animator(this.spritesheet, 19, 28, 65, 92, 10, .30, 34, false, true);

        // set up animator, doesnt work because of constructor
    };

    draw(ctx) {
        //ctx.drawImage(this.spritesheet, 0, 0)
        this.animation.drawFrame(this.game.clockTick, ctx, 10, 10, 3);
         this.animation.drawFrame(this.game.clockTick, ctx, 10, 450, 3);
        this.animation.drawFrame(this.game.clockTick, ctx, 800, 10, 3);
        this.animation.drawFrame(this.game.clockTick, ctx, 800, 450, 3);
    }

    update() {
    }
}

class PatrickMeme {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/patrick meme.jpg");
        this.animation = new Animator(this.spritesheet, 0, 0, 498, 614, 1, 1, 34, false, true);

        // set up animator, doesnt work because of constructor
    };

    draw(ctx) {
        //ctx.drawImage(this.spritesheet, 0, 0)
        this.animation.drawFrame(this.game.clockTick, ctx, 263, 58, 1);
    }

    update() {
    }
}