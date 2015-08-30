var gpio = require("pi-gpio");
var async = require("async");

var timer = function(){
  var pinNo = 12;
  async.waterfall(
  [
    function(callback){
      gpio.open(pinNo, "input", function(err, value){
        callback(err, value);
      });
    },
    function(arg1, callback){
      gpio.read(pinNo, function(err, value){
        callback(err, arg1, value);
        console.log(value);
      });
    }
  ],
    function(err, result){
      gpio.close(pinNo);
      if(!err){
        setTimeout(timer, 1000);
      }
    }
  );
};
timer();
