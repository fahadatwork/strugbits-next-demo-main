import AddCustomers from "@/actions/addCustomer";



export default async function AddForm() {
 
  return (
    <>
      <form action={AddCustomers}>
        <div className="flex flex-col gap-2 rounded-md">
          <label className="text-md text-gray-500" htmlFor="fullname">Full Name</label>
          <input
            className="w-full h-[50px] bg-slate-50 border boreder-blue-200 rounded-md border-gray-500"
            type="text"
            name="fullname"
            placeholder={"Type Full Name"}
          />
          <label className="text-md text-gray-500" htmlFor="email">Email</label>
          <input
            className="w-full h-[50px] bg-slate-50 border boreder-blue-200 rounded-md border-gray-500"
            type="email"
            name="email"
            placeholder={"Type Email"}
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
