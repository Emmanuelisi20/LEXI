//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const text = signupForm['email_field'].value;
    const password = signupForm['password_field'].value;

    // signup a user
    auth.createUserWithEmailAndPassword(text, password).then(cred => {
        console.log(cred.user)
        const container = document.querySelector('#container-signup');
        M.container.getInstance(container).close();
        signupForm.reset();
    });

});

//logout
const logout = document.querySelector('#logout_div');
logoutdiv.addEventListener('submit', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });

});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const text = loginForm['email_field'].value;
    const password = loginForm['password_field'].value;

    // login a user
    auth.signInWithEmailAndPassword(text, password).then(cred => {
        console.log(cred.user)
            // close the login container and reset the form
        const container = document.querySelector('#container-login');
        M.container.getInstance(container).close();
        loginform.reset();
    })

});