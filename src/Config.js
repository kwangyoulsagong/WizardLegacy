

var Config = {
    // 맵 크기
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000,
    scene: [Loading,school],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
        },
    },
};
var game = new Phaser.Game(Config);

