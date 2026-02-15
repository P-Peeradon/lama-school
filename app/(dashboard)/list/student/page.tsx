import Pagination from '@/app/components/Pagination';
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch';
import { role } from '@/app/lib/data';
import { studentsData } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string,
    phone: string,
    grade: number,
    class: string,
    address: string,
}

const columns = [
    {
        header: 'Info',
        accessor: 'info',
        className: ''
    },
    {
        header: 'Student ID',
        accessor: 'studentId',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Subjects',
        accessor: 'subjects',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Class',
        accessor: 'class',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Phone',
        accessor: 'phone',
        className: 'hidden lg:table-cell'
    },
    {
        header: 'Address',
        accessor: 'address',
        className: 'hidden lg:table-cell'
    },
    {
        header: 'Action',
        accessor: 'action'
    },
];

const StudentListPage = () => {
    const renderRow = (item: Student) => { 
        return (
            <tr key={item.id}>
                <td className='flex items-center gap-4 p-4'>
                    <Image 
                        src={item.photo} 
                        alt="" 
                        width={40} 
                        height={40} 
                        className='md:hidden xl:block w-10 h-10 rounded-full object-cover' 
                    />
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.studentId}</td>
                <td className='hidden md:table-cell'>{item.grade}</td>
                <td className='hidden md:table-cell'>{item.class}</td>
                <td className='hidden lg:table-cell'>{item.phone}</td>
                <td className='hidden lg:table-cell'>{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`list/teacher/${item.id}`}>
                            <button type='button' className='w-7 h-7 flex items-center justify-center rounded-full bg-[#C3EBFA]'>
                                <Image 
                                    src="/view.png" 
                                    alt="" 
                                    width={16} 
                                    height={16} 
                                />
                                {''}
                            </button>
                        </Link>
                        {role === "admin" && (
                            <button type='button' className='w-7 h-7 flex items-center justify-center rounded-full bg-[#CFCEFF]'>
                                <Image 
                                    src="/delete.png" 
                                    alt="" 
                                    width={16} 
                                    height={16} 
                                />
                                {''}
                            </button>
                        )}
                    </div>
                </td>
            </tr>
        )
    };

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center justify-center gap-4 self-end">
                        <button type='button' className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]'>
                            <Image src="/filter.png" alt='' width={14} height={14} />
                            {''}
                        </button>
                        <button type='button' className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]'>
                            <Image src="/sort.png" alt='' width={14} height={14} />
                            {''}
                        </button>
                        {role === "admin" && (
                            <button type='button' className='w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]'>
                                <Image src="/plus.png" alt='' width={14} height={14} />
                                {''}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div className="">
                <Table columns={columns} renderRow={renderRow} data={studentsData} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    );
};

export default StudentListPage;
