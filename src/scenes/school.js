//import Phaser from 'phaser';
//import Config from '../Config';
//import Player from '../character/Player';
class school extends Phaser.Scene {
    constructor() {
        super("school");
    }
    init(){ //ScenePlugin.add() or ScenePlugin.start() 에서 데이터를 받아올수있다

   }
    preload() {// scene이 로드 되기전 호출 사용할 에셋들 로드
        
    }

    create() {//scene이 로드될때 한번 호출, 게임 오브젝트 배치, ScenePlugin.add() or ScenePlugin.start() 에서 데이터를 받아올수있다
        this.bg=this.add.image(Config.width,Config.height,"schooltile")
        .setOrigin(1,1)
        this.bg.displayWidth=this.sys.canvas.width //캔버스 가로길이만큼 설정
        this.bg.displayHeight=this.sys.canvas.height//캔버스 세로기리이만큼 설정
        this.pl=new Player(this)
        this.pl.body.collideWorldBounds=true
        this.npcred=new Npcred(this).setImmovable(true)
        this.npcred2=this.add.image(180,448,"npcred")
        this.npcred2.scale=0.75
        this.npcgreen=new Npcgreen(this).setImmovable(true)
        this.npcgreen2=this.add.image(1275,448,"npcgreen")
        this.npcgreenblack2=this.add.image(1330,448,"npcgreenblack")
        this.npcgreenblack=new Npcgreenblack(this).setImmovable(true)
        this.npcredblack=new Npcredblack(this).setImmovable(true)
        this.npcredblack2=this.add.sprite(230,448,"npcredblack")
        this.npcredblack2.scale=0.75
        this.npcredblack2.flipX=true
        this.npcgreen2.scale=0.75
        this.npcgreenblack2.scale=0.75
        this.npcgreenblack2.flipX=true
   
        this.cursor=this.input.keyboard.createCursorKeys()//키보드 입력시
        this.cameras.main.startFollow(this.pl)//카메라가 플레이어를 따라다님
        this.desk=this.add.image(1300,500,"desk")
        this.desk2=this.add.image(200,500,"desk")
        this.desk2.scale=0.35
        this.desk.scale=0.35
        this.mage=new Mage(this)
        this.mage.setImmovable(true)
        this.mage2=this.add.sprite(100,100,"mage")
        this.npccollisionarr=[this.npcgreen,this.npcgreenblack,this.npcred,this.npcredblack,this.mage]
        for(let i=0; i<this.npccollisionarr.length; i++){
            this.physics.add.collider(this.pl,this.npccollisionarr[i])
            this.npccollisionarr[i].body.collideWorldBounds=true
        }
        
       
    }
    update(){//60fps 마다 프레임 호출C
        this.pl.setVelocity(0)
        if(this.cursor.left.isDown){
            this.pl.position("left")
        }
        else if(this.cursor.right.isDown){
            this.pl.position("right")
        }
        if(this.cursor.up.isDown){
            this.pl.position("up")
        }
        else if(this.cursor.down.isDown){
            this.pl.position("down")
        }
        this.physics.add.collider(this.pl,this.npcred)
        this.randomPosition()
        this.randomMove()
        

        
    }
    
    randomPosition(){
        this.direction=Phaser.Math.Between(0,300)//0부터 300까지 랜덤 값으로 지정
        this.direction2=Phaser.Math.Between(0,300)
        this.direction3=Phaser.Math.Between(0,300)
        this.direction4=Phaser.Math.Between(0,300)
       
        
    }
    randomMove(){
        const directionArray=[this.direction,this.direction2,this.direction3,this.direction4]
        const npcArray=[this.npcred,this.npcgreen,this.npcredblack,this.npcgreenblack]
        for(let i=0; i<directionArray.length; i++){
            switch(directionArray[i]){
                case 0: 
                    npcArray[i].setVelocityX(2000)
                    npcArray[i].flipX=false
                    break
                case 1:
                    npcArray[i].setVelocityX(-2000)
                    npcArray[i].flipX=true
                    break
                case 2: 
                    npcArray[i].setVelocityY(2000)
                    break
                case 3:
                    npcArray[i].setVelocityY(-2000)
                    break
                case 4:
                    npcArray[i].setVelocityX(2000)
                    npcArray[i].flipX=false
                    break
                case 5:
                    npcArray[i].setVelocityX(-2000)
                    npcArray[i].flipX=true
                    break
                case 6: 
                    npcArray[i].setVelocityY(2000)
                    break
                case 7:
                    npcArray[i].setVelocityY(-2000)
                    break
                default: 
                npcArray[i].setVelocity(0)
                break

            }
        }
               
   }
}