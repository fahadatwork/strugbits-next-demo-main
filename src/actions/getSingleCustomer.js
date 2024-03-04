"use server"

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function EditSingleCustomer(formData){

    const prisma = new PrismaClient()
    const photo = formData.get('photo').name

   const data={

      name : formData.get('fullname'),
      email : formData.get('email'),
      photo : photo
   }

    /*const user = await prisma.user.update({
        where: { id: cust_id },
        data: data,
      }) */


   
   //revalidatePath('/');

    console.log(data);

 }