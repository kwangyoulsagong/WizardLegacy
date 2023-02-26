
class Player extends Phaser.Physics.Arcade.Sprite{
    static player_movement=2
    constructor(scene){
        super(scene,Config.width/2,Config.height/2,"playerlevel1")
        this.scale=0.75
        this.alpha=1//opacity
        scene.add.existing(this)//오벡제트 추가
        scene.physics.add.existing(this)//물리엔진 적용
    }
    position(direction){
        switch(direction){
            case "left": 
            this.x-=Player.player_movement
            this.flipX=true
            break
            case "right": 
            this.x+=Player.player_movement
            this.flipX=false
            break
            case "up": 
            this.y-=Player.player_movement
            break
            case "down": 
            this.y+=Player.player_movement
            break
        }
    }
}