/*===================================================================================== */
$(document).ready(function(){
    var contador = 0;
$('.btnTableCall').click(function efecto(){
if (contador/2==0){
$('#multiTable').animate({'left':00+'px'});
contador+=1;
}
else{
$('#multiTable').animate({'left':-145+'px'});
contador+=-1;	
}
});
});
/*=================================================slider===================================== */
var betBigBlind=8;
function setBetText(valBet)
{
    console.log(valBet);
  if (valBet==betBigBlind)
  {
      return "1XBB";
  }
  else if (valBet==2*betBigBlind)
  {
      return "2XBB";
  }
  else if (valBet==3*betBigBlind)
  {
      return "3XBB";
  }
  else if (valBet==5*betBigBlind)
  {
      return "5XBB";
  }
};
/*=============================================END  slider=====================================*/
/*==============================================timer======================================= */

$(document).ready(function() {
    $('.button0').click(function() {
        // Run the countdown
        $('.timer0').circularCountDown({
            delayToFadeIn: 00,
            size: 220,
            fontColor: '#000',
            colorCircle: '#E74C3C',
            background: 'rgba(245,183, 177,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher0').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher0').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button1').click(function() {
        // Run the countdown
        $('.timer1').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher1').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher1').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button2').click(function() {
        // Run the countdown
        $('.timer2').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher2').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher2').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button3').click(function() {
        // Run the countdown
        $('.timer3').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher3').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher3').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button4').click(function() {
        // Run the countdown
        $('.timer4').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher4').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher4').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button5').click(function() {
        // Run the countdown
        $('.timer5').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher5').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher5').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button6').click(function() {
        // Run the countdown
        $('.timer6').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher6').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher6').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button7').click(function() {
        // Run the countdown
        $('.timer7').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher7').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher7').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button8').click(function() {
        // Run the countdown
        $('.timer8').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher8').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher8').show();
                //alert('terminé');
            }
        });
    });
});
$(document).ready(function() {
    $('.button9').click(function() {
        // Run the countdown
        $('.timer9').circularCountDown({
            delayToFadeIn: 00,
            size: 145,
            fontColor: '#fff',
            colorCircle: '#E74C3C',
            background: 'rgba(27, 79, 114,.0)',
            reverseLoading: false,
            duration: {
                seconds: parseInt($('.delay').val())
            },
            beforeStart: function() {
                $('.launcher9').hide();
            },
            end: function(countdown) {
                countdown.destroy();
                $('.launcher9').show();
                //alert('terminé');
            }
        });
    });
});
