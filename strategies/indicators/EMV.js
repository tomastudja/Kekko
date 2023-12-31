//EMV indicator by Gab0 - 06/jan/2019;
// Settings: NONE;
let _ = require('../../core/lodash');
let util = require('../../core/util');
let config = util.getConfig();
let log = require('../../core/log.js');

var Indicator = function(settings) {
    this.input = 'candle';

    this.result = NaN;
    this.age = 0;

    this.last = 0;
};

Indicator.prototype.update = function(candle) {


    if (this.age == 0)
    {
        this.last = (candle.high + candle.low) * 0.5;
    }
    else
    {
        var current = (candle.high + candle.low) * 0.5;
        var divisor = candle.volume / 10000.0 / (candle.high - candle.low);

        this.result = (current - this.last) / divisor;
        this.last = current;
    }

    this.age++;
};

module.exports = Indicator;
