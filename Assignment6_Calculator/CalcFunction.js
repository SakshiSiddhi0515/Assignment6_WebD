// Page One
$(document).ready(() => {
    $('form').submit((e) => {
        e.preventDefault();
        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#password').val();

        // Check for null values
        if (email === '' || username === '' || password === '') {
            $('#error').html('Please fill all the fields.');
            return;
        }

        // Check for special characters
        const specialChars = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$/;
        if (!specialChars.test(username) || !specialChars.test(password)) {
            $('#error').html('Please enter a valid User Name and Password (no special characters allowed).');
            return;
        }

        // Check for valid email
        const northeasternEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
        if (!northeasternEmail.test(email)) {
            $('#error').html('Please enter a valid Northeastern email address.');
            return;
        }

        // Redirect to Page Two
        window.location.href = 'CalcOperation.html';
    });
});

// Page Two
$(document).ready(() => {
    // Get the user name from the query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    $('#username').html(username);

    // Calculator functions
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    // Button click events
    $('#add').click(() => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        if (isNaN(num1) || isNaN(num2)) {
            $('#error').html('Please enter valid numbers.');
            return;
        }
        const result = add(Number(num1), Number(num2));
        $('#result').val(result);
        $('#error').html('');
    });

    $('#subtract').click(() => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        if (isNaN(num1) || isNaN(num2)) {
            $('#error').html('Please enter valid numbers.');
            return;
        }
        const result = subtract(Number(num1), Number(num2));
        $('#result').val(result);
        $('#error').html('');
    });

    $('#multiply').click(() => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        if (isNaN(num1) || isNaN(num2)) {
            $('#error').html('Please enter valid numbers.');
            return;
        }
        const result = multiply(Number(num1), Number(num2));
        $('#result').val(result);
        $('#error').html('');
    });

    $('#divide').click(() => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        if (isNaN(num1) || isNaN(num2)) {
            $('#error').html('Please enter valid numbers.');
            return;
        }
        if (num2 == 0) {
            $('#error').html('Cannot divide by zero.');
            return;
        }
        const result = divide(Number(num1), Number(num2));
        $('#result').val(result);
        $('#error').html('');
   
    });
})