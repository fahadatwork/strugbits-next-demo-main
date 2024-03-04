'use server'

import { handleFileUpload } from "@/functions/fileHandlers";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'



export default async function AddCustomers(formData){
      
    const prisma = new PrismaClient()
    const photo = await handleFileUpload(formData.get('photo'))

   const data={

      name : formData.get('fullname'),
      email : formData.get('email'),
      photo : photo
   }
   
    

    await prisma.customer.create({ 

        data : data
    });



  revalidatePath('/');
  redirect('/');


}