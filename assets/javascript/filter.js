// Initialize filter values
let blurValue = 0;
let brightnessValue = 100;
let contrastValue = 100;
let grayscaleValue = 0;
let invertValue = 0;
let saturateValue = 100;

// Set initial slider values
$('#slider_value1').html("0");
$('#slider_value2').html("100");
$('#slider_value3').html("100");
$('#slider_value4').html("0");
$('#slider_value5').html("0");
$('#slider_value6').html("100");

// Slider Events
$(document).on('input', '#slider1',function(e){
    $('#slider_value1').html(e.target.value);
    blurValue = e.target.value;
    applyFilter()
});

$(document).on('input', '#slider2',function(e){
    $('#slider_value2').html(e.target.value);
    brightnessValue = e.target.value;
    applyFilter()
});

$(document).on('input', '#slider3',function(e){
    $('#slider_value3').html(e.target.value);
    contrastValue = e.target.value;
    applyFilter()
});

$(document).on('input', '#slider4',function(e){
    $('#slider_value4').html(e.target.value);
    grayscaleValue = e.target.value;
    applyFilter()
});

$(document).on('input', '#slider5',function(e){
    $('#slider_value5').html(e.target.value);
    invertValue = e.target.value;
    applyFilter()
});

$(document).on('input', '#slider6',function(e){
    $('#slider_value6').html(e.target.value);
    saturateValue = e.target.value;
    applyFilter()
});

// Resets All the Filters
$('#resetFilter').on('click', function(){
    $('#slider_value1').html("0");
    $('#slider_value2').html("100");
    $('#slider_value3').html("100");
    $('#slider_value4').html("0");
    $('#slider_value5').html("0");
    $('#slider_value6').html("100");
    $('#slider1').prop('value', '0');
    $('#slider2').prop('value', '100');
    $('#slider3').prop('value', '100');
    $('#slider4').prop('value', '0');
    $('#slider5').prop('value', '0');
    $('#slider6').prop('value', '100');
    blurValue = 0;
    brightnessValue = 100;
    contrastValue = 100;
    grayscaleValue = 0;
    invertValue = 0;
    saturateValue = 100;
    applyFilter()
});

// Applys the Filter
function applyFilter(){
    contextDraft.canvas.style.filter = `blur(${blurValue}px) 
    brightness(${brightnessValue}%) 
    contrast(${contrastValue}%) 
    grayscale(${grayscaleValue}%) 
    invert(${invertValue}%) 
    saturate(${saturateValue}%)`;
    contextReal.canvas.style.filter = `blur(${blurValue}px) 
    brightness(${brightnessValue}%) 
    contrast(${contrastValue}%) 
    grayscale(${grayscaleValue}%) 
    invert(${invertValue}%) 
    saturate(${saturateValue}%)`;
}
  