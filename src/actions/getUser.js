'use server'

import { signIn } from 'next-auth/react'


export default async function getUser(formData){
       
       const response = await signIn('credentials',{
          email : formData.get('email'),
          password : formData.get('password'),
          redirect : false
       })

       console.log(response);

}