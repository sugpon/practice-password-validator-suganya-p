const readlineSync = require('readline-sync');

let password;
let isValid;

do {
    password = readlineSync.question("Enter a password: ");
    
    let hasUppercase = false;
    let hasNumber = false;

    // Loop through each character in the password
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    // Check conditions
    isValid = password.length >= 8 && hasUppercase && hasNumber;

    if (!isValid) {
        console.log("Password must be at least 8 characters, include an uppercase letter, and a number.");
    }

} while (!isValid);

console.log("Password accepted!");
