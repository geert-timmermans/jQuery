let count = 0;
let num = Math.floor((Math.random() * 100) + 1);


document.getElementById("text").innerHTML = 'Guess the number. It should be between 1 and 100'

$('button').click(function() {
    let answer = $('#answer').val();
    count++;
    if(answer < num){
        document.getElementById("text2").innerHTML = 'Not high enough'
        $('#text2').css('background-color', 'red')
    } else if(answer > num){
        document.getElementById("text2").innerHTML = 'Take it down'
        $('#text2').css('background-color', 'red')
    } else{
        document.getElementById("text2").innerHTML = `You rock!!! It only took you ${count} tries`
        $('#text2').css('background-color', 'green')
        $('#text2').css('font-size', '2em')
    }
});