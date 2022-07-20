import { useState } from "react"
import {createUserDocumentFromAuth, signInWithGooglePopup, SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utilis";
import {FormInput, Button} from '../index'
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email:'',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await SignInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()

        } catch(error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('You do not have an account! Please Sign Up')
                    break;
                default:
                    alert('Incorrect email/password')
            }
            if(error.code === 'auth/user-not-found') {
                
                return;
            }

        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
        
            <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
            <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
            <div className="buttons-container"> 
            <Button>Sign In</Button>
            <Button buttonType='google' onClick={signInWithGoogle}>Google SIgn IN</Button></div>
           
            </form>


        </div>
    )
}

export default SignInForm