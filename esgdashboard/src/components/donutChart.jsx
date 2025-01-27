import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
//pie chart
import { PieChart } from '@mui/x-charts/PieChart';



export default function ESGPieChart() {
    return (
        <PieChart
        series={[
            {
                data: [
                    { label: 'Enviromental', value: 40 , color:'#779150' }, 
                    { label: 'Social', value: 30, color: '#5F99BF'}, 
                    { label: 'Governance', value: 30, color: '#D6D055' }
                ]
                
            }

        ]}
        width={400}
        height={200}
        />
    );
}


