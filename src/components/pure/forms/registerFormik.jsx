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
          }).required('You must confirm the password')


        }
    )
  return (
    <div>

    </div>
  )
}
