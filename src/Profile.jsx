import Input from './Input';
import React from 'react';
import Button from './Button';

function Profile() {
    return (
      
      <div className='bg-white p-10'>
        <h1 className='font-bold text-xl'>Personal Profile</h1>
        <hr />
     <Input placeholder="First Name">First Name</Input>
     <Input  placeholder="Last Name">Last Name</Input> 
     <Input  placeholder="email address">email address</Input>
     <Input  placeholder="Institute Name">Institute Name</Input>
     <Input  placeholder="phone no">phone no.</Input>
     <Input  placeholder="Date of Birth">Date of Birth</Input>
     <Input  placeholder="Branch">Branch</Input>
     <Button>UPDATE</Button>
      </div>

  
    );
  }
  
  export default Profile;