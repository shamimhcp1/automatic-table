

var firstName = document.getElementById('firstName');
firstName.onkeyup = function () {
    document.getElementById('firstNameValue').innerHTML = document.getElementById('firstName').value;
    fullNameValue ()
};


var lastName = document.getElementById('lastName');
lastName.onkeyup = function () {
    document.getElementById('lastNameValue').innerHTML = document.getElementById('lastName').value;
    fullNameValue ()
};

function fullNameValue () {
    var fullName = document.getElementById('firstName').value+' '+document.getElementById('lastName').value;
    document.getElementById('fullNameValue').innerHTML = fullName;
}
