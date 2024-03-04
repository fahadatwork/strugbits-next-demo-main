'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Deleteitem(id){


    const prisma = new PrismaClient();


   await prisma.customer.delete({

     where : {
       id : Number(id)
     }
   })
   
   revalidatePath('/');
   redirect('/')



 }