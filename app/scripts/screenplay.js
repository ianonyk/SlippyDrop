var director = require('./BKGM/director'),
    game = require('./game'),
    constants = require('./constants'),
    random = require('./random'),
    SCALE = constants.SCALE,
    SQRT_SCALE = constants.SQRT_SCALE,
    drop = require('./drop'),
    DROP_Y = constants.DROP_Y,
    WIDTH = game.WIDTH,
    HEIGHT = game.HEIGHT,
    buttons = constants.BUTTONS;

module.exports = function(){

    director.state('game', [
        'background',
        'setup',
        'drop.tail',
        'drop.update',
        'blocks.update',
        'collide',
        'score',
        'drop.draw',
        'drop.drawTouch',
        'displayScore',
        'blocks.draw'
    ]);

    director.state('gamegrav', [
        'background',
        'setup',
        'drop.tail',
        'drop.grav',
        'blocks.update',
        'collide',
        'score',
        'drop.draw',
        'displayScore',
        'blocks.draw'
    ]);
    
    director.state('menu', [
        'setup',
        'background',
        {
            name: 'logo',
            args: [WIDTH/2, HEIGHT/2 + 120],
        },
        'drop.tail',
        'drop.draw',
        'guide'        
    ]);
        
    director.state('explode', [
        'background',
        'blocks.draw',
        'createExplosion',
        'explosion'
    ]);
        
    director.state('gameover', [
        'calscore',
        'background',
        'blocks.update',
        'blocks.draw',
        'result',
        {
            name: 'logo',
            args: [WIDTH/2, HEIGHT/2 + 50],
        },
        //'guide',
        {
            name: "buttons",
            args: [buttons]
        }
    ]);
};