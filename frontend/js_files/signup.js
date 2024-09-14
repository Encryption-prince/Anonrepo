const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", () => {
    // Get the forms
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Signup form submit event
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Prepare data to send
        const signupData = { username, email, password };

        try {
            const response = await fetch("http://localhost:5000/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupData)
            });

            const result = await response.json();
            
            if (response.ok) {
                alert("Signup successful! Please log in.");
                // Clear form or redirect to login page
                signupForm.reset();
            } else {
                alert("Signup failed: " + result.message);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred during signup.");
        }
    });

    // Login form submit event
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Prepare data to send
        const loginData = { email, password };

        try {
            const response = await fetch("http://localhost:5000/api/v1/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();
            
            if (response.ok) {
                //alert("Login successful! Welcome.");
                localStorage.setItem("authToken", result.data);
                window.location.href = "index.html";
                // Handle successful login, e.g., redirect to dashboard
            } else {
                alert("Login failed: " + result.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login.");
        }
    });
});
