// const loginForm = document.querySelector('.login form');
// const emailInput = document.querySelector('.login input[type="email"]');
// const passwordInput = document.querySelector('.login input[type="password"]');


// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // prevent the default form submission behavior
    
//     // get the user's input values
//     const email = emailInput.value;
//     const password = passwordInput.value;
    
//     // validate the input values
//     if (!email || !password) {
//       alert('Please enter both email and password');
//       return;
//     }
    
//     // send the login request to the server using AJAX or fetch API
//     // handle the response accordingly (e.g., redirect the user to the dashboard)
    
//   });

  
//   fetch('/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password
//     })
//   })
//   .then(response => {
//     if (response.ok) {
//       // login successful, redirect the user to the dashboard
//       window.location.href = '/portfolio.html';
//     } else {
//       // login failed, display an error message to the user
//       alert('Login failed. Please try again.');
//     }
//   })
//   .catch(error => {
//     // handle network errors or server errors
//     console.error(error);
//     alert('An error occurred. Please try again later.');
//   });

  