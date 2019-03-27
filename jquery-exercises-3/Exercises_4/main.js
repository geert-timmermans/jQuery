
let i = 20;


$('#bttn1').click(function(){
    
        if(i <= 100){
            $('#rect').css('height', `${i}`)
            i += 10
        }   else{
            $('#rect').css('height', '10px')
        }
})

$('#bttn2').click(function () {
    $('#rect').css('background-color', '#32CD32')
})

$('#bttn3').click(function () {
    $('#rect').css('background-color', '#b2b2ff')
})

$('#bttn4').click(function() {
    $('#rect').hide()
})

$('#bttn5').click(function() {
    $('#rect').show()
})