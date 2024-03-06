import { redirect } from "next/navigation";
import React from 'react'

import { auth } from 'auth'

export default async function page() {

    const session = await auth();
 
   if(!session){

     return redirect('/api/auth/signin');
   }

   return redirect('/home');

}
