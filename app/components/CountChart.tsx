"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts"
import Image from "next/image"

const data = [
    {
        name: "Girls",
        count: 53,
        fill: "#8884d8"
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
                <Image src="/moreDark.png" alt='' />
            </div>
            <div className="">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff'}}
                            background
                            dataKey="name"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-[#C3EBFA] rounded-full">
                        <h1 className="font-bold">1234</h1>
                        <h2 className="text-xs text-gray-500">Boys (55%)</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountChart;
