import React, { useState } from "react";
import * as Components from "../SignIn/Comp_pat";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Patient() {
    const [signIn, toggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        age: '',
        guardianPresence:'',
        password: '',
        confirmPassword: ''
    });
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event, formType) => {
        const { name, value } = event.target;
        if (formType === 'registration') {
            setRegistrationData({ ...registrationData, [name]: value });
        } else if (formType === 'login') {
            setLoginData({ ...loginData, [name]: value });
        }
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        //console.log(JSON.stringify(registrationData))
        if (registrationData.password !== registrationData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(JSON.stringify(registrationData))
        try {
            const response = await fetch('/register/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (response.ok) {
                // handle successful response
                alert("Registration successful");
                window.location.href = '/user/dashboard';
            } else {
                // handle error response
                const result = await response.json();
                alert(result.message); // Show error message on failed registration
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("An error occurred");
        }
    };


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(loginData))
        try {
            const response = await fetch('/login/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                // handle successful response
                alert("Login successful");
                window.location.href = '/user/dashboard';
            } else {
                // handle error response
                alert("Login failed");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("An error occurred");
        }
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'}}>
            <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form style={{ width: '320px',color:'black' }} onSubmit={handleRegistrationSubmit}>
                    <Components.Title >Registration form Patient</Components.Title>
                    <Components.Input 
                        type='text'
                        name="name"
                        value={registrationData.name}
                        placeholder='Name' 
                        style={{ width: '100%', height: '40px' }}
                        onChange={(e) => handleInputChange(e,'registration')}

                    />
                    <Components.Input 
                        type='email'
                        name='email'
                        value={registrationData.email}
                        placeholder='Email' 
                        style={{ width: '100%', height: '40px' }} 
                        onChange={(e) => handleInputChange(e,'registration')}

                    />
                    <Components.Input 
                        type='tel'
                        name="phoneNumber"
                        value={registrationData.phoneNumber} 
                        placeholder='Phone Number' 
                        style={{ width: '100%', height: '40px' }} 
                        onChange={(e) => handleInputChange(e,'registration')}

                    />
                    <Components.Input 
                        type='text'
                        name="location"
                        value={registrationData.location} 
                        placeholder='Location'
                        style={{ width: '100%', height: '40px' }}
                        onChange={(e) => handleInputChange(e,'registration')}

                    />
                    <Components.Input 
                        type='text'
                        name="age"
                        value={registrationData.age}
                        placeholder='Age'
                        style={{ width: '100%', height: '40px' }}
                        onChange={(e) => handleInputChange(e,'registration')}

                    />
                    <Components.Input 
                        as="select"
                        name="guardianPresence"
                        value={registrationData.guardianPresence}
                        style={{ width: '100%', height: '45px' }}
                        onChange={(e)=>handleInputChange(e,'registration')}
                        // onChange={handleDropdownChange} 
                        // value={selectedOption}
                    >
                        <option value="">Staying</option>
                        <option value="With caretaker">With Caretaker</option>
                        <option value="Alone">Alone</option>
                    </Components.Input>

                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={registrationData.password}
                            placeholder='Password'
                            style={{ width: '100%', height: '40px' }}
                            onChange={(e)=>handleInputChange(e,'registration')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={registrationData.confirmPassword}
                            placeholder='Confirm Password'
                            style={{ width: '100%', height: '40px' }}
                            onChange={(e)=>handleInputChange(e,'registration')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Button style={{ width: '100%' }}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleLoginSubmit} style={{ color: 'black' }}>
                    <Components.Title>Log in</Components.Title>
                    <Components.Input 
                        type='email'
                        name='username'
                        value={loginData.username}
                        placeholder='Email' 
                        onChange={(e)=>handleInputChange(e,'login')}
                    />
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={loginData.password}
                            placeholder='Password'
                            style={{ width: '100%' }}
                            onChange={(e)=>handleInputChange(e,'login')}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Submit</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back to SISAC!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Patient!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
        </div>
    );
}

export default Patient;