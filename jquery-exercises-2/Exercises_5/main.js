// Write your solution here

$('input:text').focus(function () {
    $(this).css('border', '2px solid green');
});

$('input:text').blur(function () {
    $(this).css('border', '2px solid red');
});


//Hieronder dezelfde functies, maar andere benamingen van de functie zelf


/* $('input:text').focusin(function () {
    $(this).css('border', '2px solid green');
});

$('input:text').focusout(function () {
    $(this).css('border', '2px solid red');
}); */