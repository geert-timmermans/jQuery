$('#submit').click(function (e) {
    e.preventDefault();
    let firstName = $('#firstName').val();
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    console.log(firstName);
    console.log(name);
    console.log(email);
    console.log(phone);
});