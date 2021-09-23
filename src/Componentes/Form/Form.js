import React from 'react'
import { useForm } from 'react-hook-form';
import {Error, FormContainer, Input, Input2, InpWrap, Mensaje, SubmitB, Wrap} from './Elements'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    
      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
              name,
              email,
              subject,
              message
            };
      
            await emailjs.send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              templateParams,
              process.env.REACT_APP_USER_ID
            );
      
            reset();
            toastifySuccess();
          } catch (e) {
            console.log(e);
          }
        console.log('env: ', process.env.REACT_APP_TEMPLATE_ID);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);
      };

    return (
        <>
            <FormContainer id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <Wrap>
                    <InpWrap>
                    <Input2 type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Por favor ingresa tu nombre' },
                        maxLength: {
                          value: 30,
                          message: 'Ingresaste el maximo de 30 caracteres'
                        }
                      })}
                      
                      placeholder='Nombre'/>
                      {errors.name &&<Error>{errors.name.message}</Error>}
                    </InpWrap>
                    <InpWrap>
                    <Input2 type='email'
                      name='email'
                      {...register('email', {
                        required: { value: true, message: 'Por favor ingresa tu email' },
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      
                      placeholder='Email'/>
                      {errors.email &&<Error>{errors.email.message}</Error>}
                    </InpWrap>  
                </Wrap>
                <InpWrap>
                    <Input type='text'
                        name='subject'
                        {...register('subject', {
                            required: { value: true, message: 'Por favor ingresa tu Tema' },
                            maxLength: {
                            value: 75,
                            message: 'Ups ingresa menos de 75 caracteres!'
                            }
                        })}
                        
                        placeholder='Tema'/>
                        {errors.subject &&<Error>{errors.subject.message}</Error>}
                </InpWrap>      
                <InpWrap>
                <Mensaje rows={3}
                      name='message'
                      {...register('message', {
                        required: { value: true, message: 'Por favor escribi un mensaje' }
                      })}
                      
                      placeholder='Mensaje'/>
                {errors.message &&<Error>{errors.message.message}</Error>} 
                </InpWrap>          
                <SubmitB type='submit'>Enviar</SubmitB>      
            </FormContainer>
            <ToastContainer />
        </>
    )
}

export default Form
