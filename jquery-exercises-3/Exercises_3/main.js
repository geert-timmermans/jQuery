let count = 0;
let num = Math.floor((Math.random() * 100) + 1);


alert('Guess the number. It should be between 1 and 100')


$('button').click(function() {
    let answer = $('#answer').val();
    count++;
    if(answer < num){
        alert('Not high enough')
    } else if(answer > num){
        alert('Take it down')
    } else{
        alert(`You rock!!! It only took you ${count} tries`)
    }
});