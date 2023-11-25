document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('emailField')
    const passwordField = document.getElementById('passwordField')
    
    if(emailField.value === 'sharif@gmail.com' && passwordField.value === '1234'){
        location.href='bank.html'
    }
    else{
        alert('incorrect username or password')
    }
})
