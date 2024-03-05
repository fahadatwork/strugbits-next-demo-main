import { PrismaClient } from "@prisma/client";
import AddCustomers from "@/actions/addCustomer";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'
import { handleFileUpload } from "@/functions/fileHandlers";;

export default async function EditForm({ customer_id }) {
 

 const prisma = new PrismaClient();
 const customer = await prisma.customer.findFirst({
    where: {
      id: Number(customer_id)
    },
  }) 


async function EditSingleCustomer(formData){

  'use server'

    const prisma = new PrismaClient()
    const photo = await handleFileUpload(formData.get('photo'))

   const data={

      name : formData.get('fullname') || customer.name,
      email : formData.get('email') || customer.email,
      photo : photo || customer.photo
   }


  await prisma.customer.update({
        where: { id: Number(customer.id) },
        data: data,
      })


   
   revalidatePath('/');
   redirect('/');


 }




  return (
    <>
      <form action={EditSingleCustomer}>
        <div className="flex flex-col gap-2 rounded-md">
          <label className="text-md text-gray-500" htmlFor="fullname">Full Name</label>
          <input
            className="w-full h-[50px] bg-slate-50 border boreder-blue-200 rounded-md border-gray-500"
            type="text"
            name="fullname"
            placeholder={customer && customer.name}
          />
          <label className="text-md text-gray-500" htmlFor="email">Email</label>
          <input
            className="w-full h-[50px] bg-slate-50 border boreder-blue-200 rounded-md border-gray-500"
            type="email"
            name="email"
            placeholder={customer && customer.email}
          />
          <label className="text-md text-gray-500" htmlFor="photo">Select Photo</label>
          <input
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
            mb-3
          "
            type="file"
            name="photo"
            placeholder="photo"
          />
        </div>
        <div className="flex justify-center mb-[40px]">
        <button
          type="submit"
          className="text-white rounded-md w-[120px] h-[40px] bg-green-400 hover:bg-green-500"
        >
          Submit
        </button>
      </div>
      </form>
      
    </>
  );
}