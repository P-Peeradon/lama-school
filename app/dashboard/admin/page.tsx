import UserCard from '@/app/components/UserCard';
import CountChart from '@/app/components/CountChart';
import AttendanceChart from '@/app/components/AttendanceChart';
import FinanceChart from '@/app/components/FinanceChart';

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-112.5">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-112.5">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-125">
                    <FinanceChart />
                </div>
            </div>
            <div className="w-full lg:w-1/3"></div>
        </div>
    )
};

export default AdminPage;
