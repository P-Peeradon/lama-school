import Pagination from '@/app/components/Pagination';
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch';
import { classesData, role } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

const columns = [
    {
        header: 'Info',
        accessor: 'info',
        className: ''
    },
    {
        header: 'Class Name',
        accessor: 'name',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Capacity',
        accessor: 'capacity',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Grade',
        accessor: 'grade',
        className: 'hidden md:table-cell'
    },
    {
        header: 'Supervisor',
        accessor: 'supervisor',
        className: 'hidden lg:table-cell'
    },
    {
        header: 'Action',
        accessor: 'action'
    },
];

const ClassListPage = () => {
    const renderRow = (item: Class) => { 
        return (
            <tr key={item.id}>
                <td className='flex items-center gap-4 p-4'>{item.name}</td>
                <td className='hidden md:block'>{item.capacity}</td>
                <td className='hidden md:block'>{item.grade}</td>
                <td className='hidden md:block'>{item.supervisor}</td>
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
                <Table columns={columns} renderRow={renderRow} data={classesData} />
            </div>
            {/* PAGINATION */}
            <div className="">
                <Pagination />
            </div>
        </div>
    );
};

export default ClassListPage;
