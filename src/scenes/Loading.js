

// Phaser.Scene을 상속하여 LoadingScene 클래스를 정의해 줌
class Loading extends Phaser.Scene {
    constructor() {
        super("Loading");
        // bootGame : 이 scene의 identifier
    }

    preload() {
    	// 이미지를 로드해 줌
        this.load.image("schooltile","src/assets/background/school.png")
        this.load.image("playerlevel1","src/assets/sprites/playerlevel1.png")
        this.load.image("npcred","src/assets/sprites/npcred.png")
        this.load.image("npcgreen","src/assets/sprites/npcgreen.png")
        this.load.image("npcgreenblack","src/assets/sprites/npcgreenblack.png")
        this.load.image("npcredblack","src/assets/sprites/npcredblack.png")
        this.load.image("desk","src/assets/collision/desk.png")
        this.load.image("mage","src/assets/sprites/mage.png")
        
    }

    create() {
        this.add.text(20,20, "Loading ...")
        this.scene.start("school")
        
    }
}