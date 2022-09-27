import React from 'react'
import { User } from '../../../models/user.class'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { ROLES } from '../../../models/roles.enum'

export const RegisterFormik = () => {
    let user = new User()
    const submit = (values) => {
        alert('reg user')
    }
    const initialValues = {
        username: '',
        email: '',
        password: '',
        role: ROLES.USER,
        confirm: ''
    }
    const registerSchema = yup.object().shape(
        {
          username: yup.string().min(6,'User Name too Short').max(12,'User Name too Long').required('username is required'),
          email: yup.string().email('Invalid Email Format').required('Email is required'),
          password: yup.string().min(4,'Password too short').required('Password is required'),
          confirm: yup.string().when('password',{
            is: value => (value && value.length > 0 ? true : false),
            then: yup.string().oneOf(
              [yup.ref('password')],
              'Password must match'
            )
          }).required('You must confirm the password'),
          role: yup.string().oneOf([ROLES.USER,ROLES.ADMIN],'You must select a Role: User / Admin').required('Role is required')
        }
    )
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={
        async (values) => {
            await new Promise((r) => setTimeout(r,500))
            alert(JSON.stringify(values,null,2))
        }}
      >
        {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field id='username' name='username' placeholder='user name'></Field>
            {
                errors.username && touched.username && 
                (
                    <div>
                        <ErrorMessage name='username' />
                    </div>
                )
            }
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
            <label htmlFor="confirm">Confirm Password</label>
            <Field id='confirm' type='confirm' name='confirm' placeholder='confirm password'></Field>
            {
                errors.confirm && touched.confirm && 
                (
                    <div>
                          <ErrorMessage name='confirm' />
                    </div>
                )
            }
            <button type='submit'>Register</button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}
