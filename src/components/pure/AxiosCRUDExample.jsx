import React from 'react'
import { getAllPageUsers, getAllUsers, getUserByID, login, createUser, updateUser, deleteUserByID } from '../../services/axiosCRUDService'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

export const AxiosCRUDExample = () => {
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
    const authUser = (values) => {
        login(values.email, values.password)
            .then((res) => {
                if (res.data.token){
                    alert(JSON.stringify(res.data.token))
                    sessionStorage.setItem('token',res.data.token)
                }else{
                    sessionStorage.removeItem('token')
                    throw new Error('Login Failure')
                }
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                sessionStorage.removeItem('token')
            })
            .finally(() => {
                console.log('Login done')
            })
    }

    const obtainAllusers = () => {
        getAllUsers()
            .then(res => {
                alert(JSON.stringify(res.data.data))
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const obtainAllPagedUsers = (page) => {
        getAllPageUsers(page)
        .then(res => {
            if(res.data && res.status === 200){
                alert(JSON.stringify(res.data.data))
            }else{
                throw new Error('No users Found in page')
            }
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then(res => {
                if(res.data && res.status === 200){
                    alert(JSON.stringify(res.data.data))
                }else{
                    throw new Error('User not Found')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then(res => {
                console.log(res.status)
                if(res.data && res.status ===201){
                    alert(JSON.stringify(res.data))
                }else{
                    throw new Error('User not created')
                }
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
            .then(res => {
                if(res.data && res.status === 200){
                    alert(JSON.stringify(res.data))
                }else{
                    throw new Error('User not Update')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then(res => {
                if(res.data && res.status === 204){
                    alert(JSON.stringify(res.data.data))
                }else{
                    throw new Error('User not deleted')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div>
         <h3>Login Form</h3>
        <Formik
            initialValues={initialCredentials}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                authUser(values)
            }}>
             
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
        <div>
            <button onClick={obtainAllusers}>Get users</button>
            <button onClick={() => obtainAllPagedUsers(2)}>Get all page users</button>
            <button onClick={() => obtainUserByID(2)}>Get User 2</button>
            <button onClick={() => createNewUser('morpheus', 'leader')}>Create User</button>
            <button onClick={() => updateUserByID(1,'morpheus', 'Developer')}>Update User</button>
            <button onClick={() => deleteUser(1)}>Delete User 1</button>
        </div>
    </div>
  )
}
