import {React, useContext} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useDispatch } from 'react-redux' 
import { AccountContext } from './accountContext'
import { signupRequest, successSignup, faieldSignup } from '../../Redux/signup/signupActions'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink , SubmitButton, Fieldcontainer, FieldError} from './common'

// const onSubmit = (values) => {
//     alert(JSON.stringify(values))
// }
const PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';

const validationSchema = yup.object({
    fullName: yup.string().min(3, "please enter your real name").required("Full Name is required"),
    email: yup.string().email('please enter a valid email').required("the email is required"),
    password: yup.string().matches(PASSWORD_REGEX, 'please enter a strong password'),
    confirmPassword: yup.string().when("password", {
        is : val => (val && val.length > 0 ? true : false), // some criteria to be valid
        then: yup.string().oneOf([yup.ref("password")], " Password does not match ")
    })
})
export function SignupForm(props) {
    const {switchToSignIn} = useContext(AccountContext);
    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        // const {email, password} = values;
        await axios.post('https://omar-tech-store.herokuapp.com/api/users/signup', {email: values.email, password: values.password, passwordConfirmation: values.confirmPassword})
        dispatch(signupRequest)
        .then((response) => {
            console.log(response)
            dispatch(successSignup)
        })
        .catch((err) => {
            console.log(err.message)
            dispatch(faieldSignup)
        })
    }
    const formik = useFormik(
        {initialValues: {fullName: '', email: '', password: '', confirmPassword: ''},
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });
    console.log("Errors ", formik.errors)
    
    // the nama attribute of the input field is very important to be recognized by the formik (the name equals the values in the object of the initial values)
    return (
        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit}> 
                <Fieldcontainer>
                    <Input name='fullName' type='text' placeholder='FullName' value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>  
                </Fieldcontainer>
                <FieldError>{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}</FieldError>
                <Fieldcontainer>
                    <Input name='email' type='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} />
                </Fieldcontainer>
                <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>
                <Fieldcontainer>
                    <Input name='password' type='password' placeholder='password' value={formik.values.password} onChange={formik.handleChange} />
                </Fieldcontainer>
                <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>
                <Fieldcontainer>
                    <Input name='confirmPassword' type='confirmPassword' placeholder='ConfirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} />
                </Fieldcontainer>
                <FieldError>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</FieldError>
                <SubmitButton type='submit'>signin</SubmitButton>
            </FormContainer>
            <MutedLink href='#' >Allready have an Account ? </MutedLink><BoldLink onClick={switchToSignIn}>SignUp</BoldLink>
        </BoxContainer>
    )
}