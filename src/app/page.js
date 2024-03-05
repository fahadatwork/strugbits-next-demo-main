import Table from "@/components/table";
import { LuUsers } from "react-icons/lu";
import AddForm from "@/components/addfrom";
import { Modal } from "@/components/Modal";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import ConfirmDelete from "@/components/confirm-delte";
import Delete from "@/components/delete";
import EditForm from "@/components/editform";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/dist/server/api-utils";

export default async function Home({ searchParams }) {
  const prisma = new PrismaClient();

  const customerModal = searchParams.addCust;
  const customerModalEdit = searchParams.editCust;
  const del = searchParams.del;
  const customer_id = searchParams.customer_id

  const customers = await prisma.customer.findMany();

return (
    <>
      {customerModal && (
        <Modal>
          <div className="p-6">
            <AddForm />
          </div>
        </Modal>
      )}

      {customerModalEdit && (
        <Modal edit={true}>
          <div className="p-6">
            <EditForm customer_id={customer_id} />
          </div>
        </Modal>
      )}

      {del && customer_id &&(
        <ConfirmDelete>
          <Delete  customer_id={customer_id}/>
        </ConfirmDelete>
      )}

      <div className="flex flex-row">
        <div className="bg-slate-300 w-[300px] h-screen flex flex-col">
          <h1 className="m-[30px] text-4xl font-extrabold text-gray-600">
            Logo Here
          </h1>

          <div className="mt-[30px] flex flex-col">
            <div className="w-full h-[70px] shadow-md bg-slate-400">
              <div className="m-[20px] flex flex-row gap-2">
                <LuUsers className="w-[25px] h-[25px] text-white" />
                <p className="text-xl text-white">Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mx-[20px] mt-[30px] text-4xl text-gray-600 font-extrabold">
            Customers
          </h1>

          <Link
            href="/?addCust=true"
            className="mx-[20px] mt-[85px] w-[120px] h-[50px] bg-slate-400 hover:bg-slate-600 rounded-md"
          >
            <p className="text-center mt-[10px] text-white">Add Customer</p>
          </Link>

          <div className="mx-[20px] mt-[20px]">
            <Table customers={customers} />
          </div>
        </div>
      </div>
    </>
  );

}


