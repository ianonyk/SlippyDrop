var director = require('./BKGM/director'),
    game = require('./game'),
    constants = require('./constants'),
    random = require('./random'),
    SCALE = constants.SCALE,
    SQRT_SCALE = constants.SQRT_SCALE,
    drop = require('./drop'),
    WIDTH = game.WIDTH,
    HEIGHT = game.HEIGHT;

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
        'guide',
        {
            name: 'buttons',
            args: function(){
                return [{ 
                    x : WIDTH/2,
                    y : drop.y - 140,
                    w : 300 * SQRT_SCALE,
                    h : 50 * SQRT_SCALE,
                    s : 15 * SQRT_SCALE,
                    f : 30 * SQRT_SCALE,
                    list : [
                        "Touch and drag",
                        "Tilt your device"
                    ],
                    actions : [
                        "game",
                        "gamegrav"
                    ]
                }];
            }
        }
    ]);
        
    director.state('explode', [
        'background',
        'blocks.draw',
        'createExplosion',
        'explosion'
    ]);
        
    director.state('gameover', [
        'background',
        'blocks.update',
        'blocks.draw',
        'result',
        {
            name: 'logo',
            args: [WIDTH/2, HEIGHT/2 + 50],
        },
        'guide',
        {
            name: 'buttons',
            args: function(){
                return [{ 
                    x : WIDTH/2,
                    y : drop.y - 140,
                    w : 300 * SQRT_SCALE,
                    h : 50 * SQRT_SCALE,
                    s : 15 * SQRT_SCALE,
                    f : 30 * SQRT_SCALE,
                    list : [
                        "Touch and drag",
                        "Tilt your device"
                    ],
                    actions : [
                        "game",
                        "gamegrav"
                    ]
                }];
            }
        }
    ]);
};