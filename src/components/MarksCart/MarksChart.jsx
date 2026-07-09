import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marks }) => {
    const marksRes = use(marks);
    const marksData = marksRes.data;
    console.log(marksData)

    // data processing for marks:
    const marksChartData = marksData.map(mark => {
        const studentData = {
            id: mark.id,
            name: mark.name,
            math: mark.marks.math,
            physics: mark.marks.physics,
            science: mark.marks.science
        }

        const avg = (studentData.physics + studentData.math + studentData.science) / 3;
        studentData.avg = avg;

        return studentData;
    })

    console.log(marksChartData)

    return (
        <div>
            <BarChart className='mx-auto' height={400} width={600} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Bar dataKey="avg" fill='cyan'></Bar>
                <Bar dataKey="science" fill="blue"></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;
// {
//         "id": 5,
//         "name": "Ayesha",
//         "marks": {
//             "math": 95,
//             "english": 91,
//             "science": 94,
//             "physics": 97,
//             "ict": 96
//         }
//     }