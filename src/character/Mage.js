class Mage extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(scene,Config.width/2,Config.height/8,"mage")
        this.scale=0.75
        this.alpha=1//opacity
        scene.add.existing(this)//오벡제트 추가
        scene.physics.add.existing(this)//물리엔진 적용
    }
}