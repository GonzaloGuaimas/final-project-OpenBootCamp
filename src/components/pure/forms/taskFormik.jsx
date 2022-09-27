import React from 'react'
import { Task } from '../../../models/task.class'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { LEVELS } from '../../../models/levels.enum'

export const RegisterFormik = () => {
    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
    }
    const registerSchema = yup.object().shape(
        {
          name: yup.string().required('Task name is required'),
          description: yup.string().required('Task description is required'),
          level: yup.string().oneOf([LEVELS.NORMAL,LEVELS.URGENTE,LEVELS.BLOCKING],'You must select a Level').required('Level is required')
        }
    )
    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
      }
    const urgentStyle = {
        color: 'orange',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }
    
  return (
    <div>
      <h4>Task Formik</h4>
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
            <label htmlFor="name">Task Name</label>
            <Field id='name' name='name' placeholder='task Name'></Field>
            {
                errors.name && touched.name && 
                (
                    <div>
                        <ErrorMessage name='name' />
                    </div>
                )
            }

            <label htmlFor="description">Task Description</label>
            <Field id='description' name='description' placeholder='task description'></Field>
            {
                errors.description && touched.description && 
                (
                    <div>
                        <ErrorMessage name='description' />
                    </div>
                )
            }

            <label htmlFor="level">Task Level</label>
            <Field as="select" name="level">
                <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                <option style={urgentStyle} value={LEVELS.URGENTE}>Urgent</option>
                <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
            </Field>

            <button type='submit'>Add Task</button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}
