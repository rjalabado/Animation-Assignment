class Patrick {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/patrick.png")
        this.animation = new Animator(this.spritesheet)
    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0)
        //this.animation.drawFrame(this.game.clockTick, ctx, 0, 0)
    }

    update() {
        
    }
}