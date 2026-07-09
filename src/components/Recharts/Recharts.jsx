import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const studentsMarks = [
    {
        id: 1,
        name: "Sahil",
        math: 88,
        english: 82,
        science: 91,
        physics: 85,
        ict: 94,
    },
    {
        id: 2,
        name: "Rahim",
        math: 76,
        english: 80,
        science: 79,
        physics: 84,
        ict: 88,
    },
    {
        id: 3,
        name: "Karim",
        math: 92,
        english: 87,
        science: 95,
        physics: 90,
        ict: 93,
    },
    {
        id: 4,
        name: "Nadia",
        math: 81,
        english: 89,
        science: 85,
        physics: 83,
        ict: 90,
    },
    {
        id: 5,
        name: "Ayesha",
        math: 95,
        english: 91,
        science: 94,
        physics: 97,
        ict: 96,
    },
];

const Recharts = () => {
    return (
        <div className='my-10'>
            <LineChart className='max-w-7xl mx-auto' height={400} width={800} data={studentsMarks}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"science"} stroke='blue'></Line>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Recharts;