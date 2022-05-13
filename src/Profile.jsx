import Input from './Input';
import React from 'react';
import Button from './Button';
import { Formik, Form } from "formik";
import {object,string,number} from 'yup';

function Profile() {

  const onSubmit=()=>{
    console.log('done')
  }

const initialValues={
  firstName:"",
  lastName:"",
  email:"",
  instituteName:"",
  phoneNo:"",
};

const validationSchema=object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email:string().required(),
  instituteName:string().required(),
  year:number().max(4).min(4).required('passout year not filled'),
  phoneNo:number().max(10).min(10).required(),
  branch:string().required('branch name not filled'),

})


    return (
      
      <div className='bg-white p-10'>

        <div className='p-2 '>
        <h1 className='font-bold text-xl'>Personal Profile</h1>
        <hr />
        </div>
        <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
        
          <Input
            id="firstName"
            Children="first name"
            required
            placeholder="First Name"
            name="firstName"
            autoComplete="firstName"
          > 
          </Input>
          
          <Input
            id="lastName"
            Children="last name"
            placeholder="Last Name"
            name="lastName"
            required
            autoComplete="lastName"
          >
          </Input>
           
          <Input
            id="email"
            placeholder="email adress"
            Children="email"
            name="email"
            required
            autoComplete="email"
          >
          </Input>

          <Input
            id="instituteName "
            Children="college name"
            placeholder="institute name"
            name="instituteName"
            required
            autoComplete="institute name"
          >
          </Input>
          <Input
            id="year "
            Children="year of passout"
            placeholder="year of passout"
            name="year"
            required
            autoComplete=""
          >
          </Input>
          <Input
            id="phoneNo "
            Children="phone no."
            placeholder="phone number"
            name="phoneNo"
            required
            autoComplete=""
          >
          </Input>

          <Input
            id="branch "
            Children="branch name"
            placeholder="branch name"
            name="branch"
            required
            autoComplete=""
          >
          </Input>
          </Form>
          </Formik>
          <Button onClick={console.log('ff')} >Update</Button>
      </div>

  
    );
  }
  
  export default Profile;