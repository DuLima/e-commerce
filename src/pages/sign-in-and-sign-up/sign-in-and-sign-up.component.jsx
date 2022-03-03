// Import React Components
import React from 'react'

// Import SCSS
import './sign-in-and-sign-up.styles.scss'

// Import Components
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default SignInAndSignUpPage;