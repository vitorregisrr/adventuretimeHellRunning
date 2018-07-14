var monstros1, monstro1, loopMonstro1, monstro1Speed, monstro1Interval;
var boss,flyBoss,bulletBoss,bulletsBossGroup,loopBossAttack,bulletAnim,bulletAnimKill,bossHp;
function monstro1Gen() {

        monstros1 = game.add.group();
        monstros1.enableBody = true;
        clearInterval(loopMonstro1);
        loopMonstro1 = window.setInterval(monstro1LoopCreate, monstro1Interval);
}


function monstro1LoopCreate() {

        monstro1 = monstros1.create(game.rnd.integerInRange(0, 600), -30, 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);
        monstro1.body.setSize(30, 40, 10,6);

}

function monstro1Moviment(){
        
    //faz todos os monstros1 seguirem o mago
    monstros1.forEachAlive(function (monstro1) {
    game.physics.arcade.moveToObject(monstro1, mage, monstro1Speed)

    });
}

function bossGen(){
        boss = game.add.sprite(30,30, 'boss');
        bossHp = 10;
         /*BOSS FISICA */
        game.physics.arcade.enable(boss);
        boss.body.collideWorldBounds = true; //habilita a colisão
        boss.body.immovable = true;

        var flyBoss = boss.animations.add('bossFly');
        boss.animations.play('bossFly', 10, true);
        boss.body.setSize(boss.height - 190, boss.width - 160,180,20);
        
}

function bossShoted(){
        bossHp -= 1;
        if(bossHp == 0){
            boss.kill();
            game.time.events.remove(loopBossAttack);
            comedownPlatforms4();
        }

}
