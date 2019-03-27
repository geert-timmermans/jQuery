let count = 0;

$('#button1').click(function() {
    count++;
    $('input').val(count);
});

$('#button2').click(function() {
    count--;
    $('input').val(count);
});