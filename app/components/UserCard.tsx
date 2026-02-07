"use client"
import Image from 'next/image';

const UserCard = ({ type }:{ type: string }) => {
  return (
    <div className='rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE17C] p-4 flex-1 min-w-32.5'>
        <div className="flex justify-between items-center text-black">
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2024/25</span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1 className='text-2xl font-semibold my-4 text-black'>1234</h1>
        <h2 className='text-gray-500 capitalize text-sm'>{type}</h2>
    </div>
  )
}

export default UserCard;
