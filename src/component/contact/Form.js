import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

let {register, handleSubmit,formState:{errors},reset}=useForm()

let handleContact=(data)=>{
  console.log(data);
  axios.post("https://portfolio-bf877-default-rtdb.firebaseio.com//contact.json",data)
  reset()
}

  return (
    <>
      <form action="" onSubmit={handleSubmit(handleContact)}>
        <label htmlFor=""  className='form-label'>Enter Name</label>
        <input type="text" name='Name' {...register('Name',{required:"please enter name!"})} className='form-control' />
        <p className='text-warning'>{errors?.Name && errors.Name.message}</p>
        <label htmlFor="" className='form-label'>Enter Email</label>
        <input type="email" name='Email' {...register('Email',{required:"please enter email!"})} className='form-control'/>
        <p className='text-warning'>{errors?.Email && errors.Email.message}</p>
        <label htmlFor="" className='form-label'>Enter Phone</label>
        <input type="number" name='Phone'{...register('Phone',{required:"please enter phone", minLength:{value:10,message:"min 10 digit required!"}, maxLength:{value:10, message:"max 10 digit required!"}})} className='form-control' />
        <p className='text-warning'>{errors?.Phone && errors.Phone.message}</p>
        <input className="btn btn-primary" type="Submit" />
      </form>
    </>
  )
}

export default Form