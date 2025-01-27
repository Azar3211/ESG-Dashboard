import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartsText } from '@mui/x-charts/ChartsText';



export default function ESGLineChart() {
    const dataset = [
        { month: 1, kWh: 15000 },
        { month: 2, kWh: 14200 },
        { month: 3, kWh: 13800 },
        { month: 4, kWh: 13000 },
        { month: 5, kWh: 12500 },
        { month: 6, kWh: 12000 },
        { month: 7, kWh: 11800 },
        { month: 8, kWh: 11500 },
        { month: 9, kWh: 11000 },
        { month: 10, kWh: 10800 },
        { month: 11, kWh: 10000 },
        { month: 12, kWh: 10500 },
    ];

    return (
        <LineChart
            xAxis={[{ tickLabelStyle: {fontFamily: 'sans-serif', fontSize: 14, fontWeight: 'bold'}, dataKey: 'month', label: 'Months', valueFormatter: (value) => value.toString() }]}
            series={[{ dataKey: 'kWh', label: 'Energy Consumption (kWh)', area: true }]}
            dataset={dataset}
            colors={['#77B5D9']}
            width={550}
            height={250}
        />
    );
}