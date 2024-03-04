"use client"

import Image from "next/image";
import Customer from "./customer";

const Table = ({ customers }) => {
  const updown = "/updown.svg";

  return (
    <>
      <div className="w-[900px] h-[50px] bg-slate-100 rounded-lg flex flex-row gap-2 justify-center">
        <div className="flex flex-row gap-8">
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Image
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer ID# <Image height={15} width={15} src={updown}></Image>
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer Name <Image height={15} width={15} src={updown}></Image>
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer Email <Image height={15} width={15} src={updown}></Image>
          </button>
        </div>
      </div>

      {customers ? (
        customers.map((customer) => (
          <Customer
            key={customer.id}
            id={customer.id}
            name={customer.name}
            photo={customer.photo}
            email={customer.email}
          />
        ))
      ) : (
        <h2>No Customers to Show</h2>
      )}
    </>
  );
};

export default Table;
