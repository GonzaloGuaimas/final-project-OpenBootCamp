import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    const loginSchema = yup.object().shape(
        {
            email: yup.string().email('Invalid Email Format').required('Email is Required'),
            password: yup.string().required('Password is required')
        }
    )

  return (
    <div>
        <h3>Login Form</h3>
        <Formik
            initialValues={initialCredentials}
            validationSchema={loginSchema}
            onSubmit={
                async (values) => {
                    await new Promise((r) => setTimeout(r,500))
                    alert(JSON.stringify(values,null,2))
                    localStorage.setItem('credential', values)
                }
            }
            >
            
            {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
                 <Form>
                    <label htmlFor="email">Email</label>
                    <Field id='email' name='email' placeholder='example@company.com'></Field>
                    {
                        errors.email && touched.email && 
                        (
                            <div>
                                <ErrorMessage name='email' />
                            </div>
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field id='password' type='password' name='password' placeholder='password'></Field>
                    {
                        errors.password && touched.password && 
                        (
                            <div>
                                 <ErrorMessage name='password' />
                            </div>
                        )
                    }
                    <button type='submit'>Login</button>
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )}  
        </Formik>
    </div>
  )
}

export default LoginFormik
