import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



    const handleSignUp = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const username = form.username.value;
        const password = form.password.value;
        const signupValues = {
            firstname,
            lastname,
            username,
            password,
        };

        try {
            const response = await axios.post('http://localhost:9000/createUser', signupValues);
            localStorage.setItem('loggedInUser', response.data._id);
            console.log('Signup successful:', response.data);
            alert('Signup Successful');

            // Assuming the response from createUser includes the user ID
            const userID = response.data._id;


        } catch (err) {
            console.error('Error in Signing Up or creating profile:', err);
            setErrorMessage(err.response?.data?.message || 'Error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
       
        <div className="signup-container">

            <form onSubmit={handleSignUp} className="signup-form">
                <h1>Sign Up</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" required />
                <input type="username" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />


                <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Signup'}</button>
                <p className="login-link">
                    Already have an account? <a href="#" onClick={(e) => {
                        e.preventDefault();
                        navigate('/login');
                    }}>Log in</a>
                </p>
            </form>
        </div>
        </>
    );
}

export default Signup;
