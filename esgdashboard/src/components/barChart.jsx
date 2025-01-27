import React, { useState, useEffect } from "react";
import { BarChart } from '@mui/x-charts/BarChart';


export default function ESGBarChart() {
    const dataset = [
        {year: '2018', MWh: 25000},
        {year: '2019', MWh: 30000},
        {year: '2020', MWh: 35000},
        {year: '2021', MWh: 40000},
        {year: '2022', MWh: 45000},
        {year: '2023', MWh: 50000},
        {year: '2024', MWh: 55000},
    ];

    return (
        <div style={{ width: '100%', height: '100%', maxWidth: '700px', margin: '0 auto' }}>

        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'year', label: 'Year', tickLabelStyle: {fontFamily: 'sans-serif', fontSize: 14, fontWeight: 'bold'} }]}
            series={[{ dataKey: 'MWh', label: 'Renewable Energy Usage (MWh)', bar: true }]}
            colors={['#3A6940']}
            width={600}
            height={250}
        />
        </div>
    );
}