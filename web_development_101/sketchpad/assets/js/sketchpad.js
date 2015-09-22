//init
$(document).ready(function() {
    get_viewport();

    mode_1();
    mode_2();
    mode_3();
    mode_4();
    mode_5();
    draw_grid_click();
    reset_click();

    default_mode();

    toggle_selected();

})

var grid_colour = 'rgba(255,208,93,0.0)';
var size = 10;
var mode = 1;

//general
//grid size  ==============================================================
function get_viewport(){
    var height = $(window).height();
    var width = $(window).width();
    var height_menu = height/7;
    $('.option_bar > div').css({
                    'height': + height_menu + 'px',
                    'width': + width*0.2 + 'px',
                });
    $('.container').css({
                    'height': + height*1.026 + 'px',
                    'width': + width*0.798 + 'px',
                });


}


function draw_grid(amount) {
    var $newdiv;
    var number_of_squares_width;

    var width = $('.container').css('width').replace(/[^-\d\.]/g, '');
    var height = $('.container').css('height').replace(/[^-\d\.]/g, '');
    var square_width = (height / amount) -2 ; //short side of rectangle

    number_of_squares_width = Math.floor(width/(square_width+2));
    var amount = amount * number_of_squares_width; //long side of rectangle    
    
    for (var i = 0; i < amount; i++) {
        $newdiv = $('<div class="square"/>');
        $('.container').append($newdiv) ;
    }

    $('.square').css({
        'width': square_width + 'px',
        'height': square_width + 'px',
        'background-color': 'rgba(255,208,93,0.0)'
    });
}

function draw_grid_click(){
    $('.size').click(function(){
        size = prompt("Please enter the new grid size: ", 10);
        $('.container').empty();
        draw_grid(size);
        determine_mode(mode);
    })
}


//reset  ==============================================================
function reset() {
    $('.container').empty();
        draw_grid(size);
}

function reset_click(){
    $('.reset').click(function(){
        reset();
        determine_mode(mode);
    })
}

//choose mode
function determine_mode(mode){
    console.log("in" + mode)
    switch(mode){
        case 1:
            default_mode();
            break;
        case 2:
            trail_mode();
            break;
        case 3:
            rainbow_mode();
            break;
        case 4:
            random_mode();
            break;
        case 5:
            opacity_mode();
            break;
    }
}

// MODES ==============================================================
//mode 1
function mode_1() {
    $('.default').click(function() {
        mode = 1;
        default_mode();
    });
}

function default_mode() {
        if (mode == 1) {
            reset();
            $('.square').mouseenter(function() {
                $(this).css({
                    'background-color': '#1f2223'
                });
            });
        }
    }


//mode 2
function mode_2() {
    $('.trail').click(function() {
        mode = 2;
        trail_mode();
    })
}

function trail_mode() {
        if (mode == 2) {
            reset();
            $('.square').mouseenter(function() {
                $(this).css({
                    'background-color': '#1f2223',
                    'transition': ''
                });
            });
            $('.square').mouseleave(function() {
                $(this).css({
                    'background-color': 'rgba(255,208,93,0.0)',
                    'transition': 'background-color 3.0s ease'
                });
            });
        }
    }


//mode 3
function mode_3() {
    $('.rainbow').click(function() {
        mode = 3;
        rainbow_mode();
    })
}

function rainbow_mode() {
        if (mode == 3) {
            var rainbow_colours = ['#d10000', '#ff6622', '#ffda21', '#33dd00', '#1133cc', '#220066', '#330044'];
            var index = -1;
            reset();
            $('.square').mouseenter(function() {
                if (index == 5) {
                    index = -1;
                }
                index = index + 1;
                $(this).css({
                    'background-color': rainbow_colours[index],
                    'transition': ''
                });
            });

            $('.square').mouseleave(function() {
                $(this).css({
                    'background-color': 'rgba(255,208,93,0.0)',
                    'transition': 'background-color 3.0s ease'
                });
            });
        }
    }


//mode 4
function mode_4() {
    $('.random').click(function() {
        mode = 4;
        random_mode();
    })
}

function random_mode() {
        if (mode == 4) {
            reset();
            $('.square').mouseenter(function() {
                var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
                $(this).css({
                    'background-color': colour,
                    'transition': ''
                });
            });
            $('.square').mouseleave(function() {
                $(this).css({
                    'background-color': 'rgba(255,208,93,0.0)',
                    'transition': 'background-color 5.0s ease'
                });
            });
        }
    }


//mode 5
function mode_5() {
    $('.opacity').click(function() {
        mode = 5;
        opacity_mode();
    })
}

function opacity_mode() {
    if (mode == 5) {  

        console.log('I am in');  
        reset();
        var increment = 0.2;

        $('.square').mouseenter(function() {


            var colour = $(this).css("background-color");
            console.log('colour: ' + colour)

            if (colour == "rgb(0, 0, 0)") { 
                return false;
            }

            var opacity = parseFloat(colour.substring(colour.lastIndexOf(",") + 2, colour.length - 1).trim());
            console.log('opacity: ' + opacity)
            var result = opacity + increment;
            $(this).css({
                'background-color': 'rgba(0,0,0,' + result + ')',
            });

        });
    }
}


function toggle_selected(){
    $(".option_bar > div").slice(0,5).click(function() {
      $(".option_bar > div").removeClass('selected');
      $(this).addClass('selected'); 
  });
}