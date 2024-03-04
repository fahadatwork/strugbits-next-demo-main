
import Image from "next/image"
import Link from "next/link"


const Customer = ({ photo, name, email, id }) => {


  return (



       <div className="w-[900px] h-[90px] bg-slate-100 mt-[10px] rounded-md flex flex-row gap-9 justify-center">
        <Image
          className=" w-[50px] h-[50px] m-[20px] rounded-full"
          src={`/${photo}`}
          width={240}
          height={240}
        ></Image>
        <div className="mt-[30px]">
          <span className="text-gray-500">{id}</span>
        </div>
        <div className="mt-[30px]">
          <span className="text-gray-500">{name}</span>
        </div>
        <div className="mt-[30px]">
          <span className="text-gray-500">{email}</span>
        </div>
        <div className="mt-[30px] space-x-1 flex flex-row">
          <Link href={`/?editCust=true&customer_id=${id}`}>
            <p className="w-[60px] h-[20px] rounded-md text-white text-sm bg-green-300 hover:bg-green-400 text-center">Edit</p>
          </Link>
          <Link href={`/?del=true&customer_id=${id}`} className="w-[60px] h-[20px] rounded-md text-white text-sm bg-red-300 hover:bg-red-400">
          <p className="w-[60px] h-[20px] rounded-md text-white text-sm bg-red-300 hover:bg-red-400 text-center">Delete</p>
          </Link> 
        </div>
  </div>
  )
}

export default Customer