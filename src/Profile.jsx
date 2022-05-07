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
            required
            placeholder="First Name"
            name="firstName"
            autoComplete="firstName"
          > 
          </Input>
          
          <Input
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            required
            autoComplete="lastName"
          >
          </Input>
           
          <Input
            id="email"
            placeholder="email adress"
            name="email"
            required
            autoComplete="email"
          >
          </Input>

          <Input
            id="instituteName "
            placeholder="institute name"
            name="instituteName"
            required
            autoComplete="institute name"
          >
          </Input>
          <Input
            id="year "
            placeholder="year of passout"
            name="year"
            required
            autoComplete=""
          >
          </Input>
          <Input
            id="phoneNo "
            placeholder="phone number"
            name="phoneNo"
            required
            autoComplete=""
          >
          </Input>

          <Input
            id="branch "
            placeholder="branch name"
            name="branch"
            required
            autoComplete=""
          >
          </Input>
          </Form>
          </Formik>
          <Button>Update</Button>
      </div>

  
    );
  }
  
  export default Profile;