TrumpInvader.Game = function(game) {
    this.enemyGroup;
    this.eshipGroup;
    this.laserGroup;
    this.gameover;
    this.health;
    this.score;
    this.music;
};
TrumpInvader.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.score = 0;
        this.music = this.add.audio("Bergentrückung");
        this.buildWorld();
    },
    
    buildWorld: function() {
        this.add.image(0, 0, "EvilTrump");
        this.add.image(255, 975, "messagebox");
        var text;
        var text2;
        var text3;
        text = this.add.bitmapText(314, 996, "eightbitwonder", "In the year 3025, America");
        text2 = this.add.bitmapText(314, 1036, "eightbitwonder", "has finally regained its former");
        text3 =this.add.bitmapText(314, 1076, "eightbitwonder", "glory after years of cruel rule");
        
    },
    update: function() {},
};