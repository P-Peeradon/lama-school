"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts"
import Image from "next/image"

const data = [
    {
        name: "Total",
        count: 106,
        fill: "white"
    },
    {
        name: "Girls",
        count: 53,
        fill: "#FAE27C"
    },
    {
        name: "Boys",
        count: 53,
        fill: "#83a6ed"
    }
]

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className="">
                <h1>Students</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={15} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image 
                    src="/maleFemale.png" 
                    alt="" 
                    width={50} 
                    height={50} 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-[#C3EBFA] rounded-full">
                        <h1 className="font-bold">1234</h1>
                        <h2 className="text-xs text-gray-500">Boys (55%)</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-[#FAE17C] rounded-full">
                        <h1 className="font-bold">1234</h1>
                        <h2 className="text-xs text-gray-500">Girls (55%)</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountChart;
