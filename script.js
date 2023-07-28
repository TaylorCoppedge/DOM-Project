function regexChecker() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let firstNameRegex = /^[A-Z]\w{2,19}$/
    let lastNameRegex = /^[A-Z]\w{2,19}$/
    if (firstName.match(firstNameRegex)) {
        alert('Yay! Your inputs were all correct!');
        console.log(true);
    }
    else {
        alert('Oh no! Thats an invalid format!');
        console.log(false);
    }
    if (lastName.match(lastNameRegex)) {
        alert('Yay! Your inputs were all correct!');
        console.log(true);
    }
    else {
        alert('Oh no! Thats an invalid format!');
        console.log(false);
    }
}

