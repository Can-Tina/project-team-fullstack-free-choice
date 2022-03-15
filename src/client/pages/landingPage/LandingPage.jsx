import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landingPage.css';


const LandingPage = () => {
    return (
        <div className='main-container'>
            <div className='main'>
                <div className='content'>
                    <h1>Want to find your next <span>Book.</span> to read?</h1>
                    <div className='buttons'>
                        <div className='loginContainer'>
                            <h4>Already have an account?</h4>
                            <h3><Link to="/signIn">Login</Link></h3>
                        </div>
                        <div className='registerContainer'>
                            <h4>Want to create a new account?</h4> 
                            <h3><Link to="/signUp">Sign Up</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;