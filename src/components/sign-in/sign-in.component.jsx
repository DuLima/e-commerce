// Import React Component
import React from 'react'

// Import SCSS
import './sign-in.styles.scss'

// Import Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onClick={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handlChange={this.handleChange} label='email' required></FormInput>

                    <FormInput name='password' type='password' value={this.state.password} handlChange={this.handleChange} label='password' required></FormInput>

                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;