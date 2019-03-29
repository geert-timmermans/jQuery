let salary = 0;
let gender = null;
let children = 0;

let woman = 0.02;
let threeChildren = 0.01;
let fourChildren = woman;

let expenses = 0.18;
let insurance = 0.07;
let contributions = 0.05;
let totalCosts = expenses + insurance + contributions;


function netto(){
    sum = salary - ((salary/100) * totalCosts);
}

function discount(){
    if (children === 3){
        totalCosts -= 0.01;
    } else if (children === 4){
        totalCosts -= 0.02;
    }

    if (gender === "woman") {
        totalCosts -= 0.02;
    }
}

function appendText(){
    $('.container2').html(`<h3>Your salary would be &euro; ${sum} </h3>`);
}



    //functie start op muisklik, binnenhalen values + hide form + show reset button
$('#submit').click(function(e){
    e.preventDefault();
    salary = $('#salary').val()
    gender = $('#gender').val()
    children = $('#children').val()
    $('.container').hide()
    $('#reset').show()
    discount();
    netto();
    appendText();
})

    // reset the page
$('#reset').click(function(){
    location.reload();
    totalCosts = expenses + insurance + contributions;
})