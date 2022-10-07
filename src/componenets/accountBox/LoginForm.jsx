import {React, useContext} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { AccountContext } from './accountContext'
import {useNavigate} from 'react-router-dom'
import { BoldLink, BoxContainer, Fieldcontainer, FormContainer, Input, MutedLink , SubmitButton} from './common'
import { useDispatch } from 'react-redux';
import { faieldLogin, loginRequest, sucessLogin } from '../../Redux/login/loginActions'
const PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
const validationSchema = yup.object({
    email: yup.string().email('please enter a valid email').required("the email is required"),
    password: yup.string().matches(PASSWORD_REGEX, 'please enter a strong password').required('password is required'),
})
export function LoginForm(props) {
    const {switchToSignUp } = useContext(AccountContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        dispatch(loginRequest());
        await axios.post('https://omar-tech-store.herokuapp.com/api/users/login', {email: values.email, password: values.password})
        .then((response) => {
            console.log('response', response)
            dispatch(sucessLogin(response.data))
            navigate('Dashboard')
        })
        .catch((err) => {   
            console.log('err',err)
            dispatch(faieldLogin(err.message))
        })
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });
    return (
        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit}>
                <Fieldcontainer>
                <Input name="email" type='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email} />
                </Fieldcontainer>
                {formik.touched.email && formik?.errors?.email}
                <Fieldcontainer>
                <Input name="password" type='password' placeholder='password' onChange={formik.handleChange} value={formik.values.password} />
                </Fieldcontainer>
                {formik.touched.password && formik?.errors?.password}
                {/* <Marginer direction='vertical' margin={5}></Marginer> */}
                <MutedLink href='#'>Forget Your Password ?</MutedLink>
                {/* <Marginer direction='vertical' margin='1em'/> */}
                <SubmitButton type='submit'>signin</SubmitButton>
                <MutedLink href='#'>Don't have an Account ? </MutedLink><BoldLink onClick={switchToSignUp}>SignUp</BoldLink>
        
            </FormContainer>
        </BoxContainer>
    )
}