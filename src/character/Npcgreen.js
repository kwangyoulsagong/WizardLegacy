
class Npcgreen extends Phaser.Physics.Arcade.Sprite{
    static player_movement=2
    constructor(scene){
        super(scene,Config.width/8,Config.height/3,"npcgreen")
        this.scale=0.75
        this.alpha=1//opacity
        scene.add.existing(this)//오벡제트 추가
        scene.physics.add.existing(this)//물리엔진 적용
    }
}