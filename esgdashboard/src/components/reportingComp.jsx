import React from 'react';
import { CSVLink } from 'react-csv';

const data = [
    //add some environmental metrics
    { id: 1, metric: 'Energy Consumption', value: '1000 kWh' },
    { id: 2, metric: 'Water Usage', value: '5000 gallons' },
    { id: 3, metric: 'Carbon Emissions', value: '1000 tons' },
    //add some social metrics
    { id: 4, metric: 'Employee Satisfaction', value: '90%' },
    { id: 5, metric: 'Diversity Ratio', value: '40%' },
    { id: 6, metric: 'Community Engagement', value: '30%' },
    //add some governance metrics
    { id: 7, metric: 'Board Diversity', value: '50%' },
    { id: 8, metric: 'Executive Compensation', value: '$500,000' },
    { id: 9, metric: 'Shareholder Engagement', value: '70%' },
];

const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Metric', key: 'metric' },
    { label: 'Value', key: 'value' },
];

const ReportingComp = () => {
    return (
        <div
            style={{
                height: '90%',
                width: '30vw',
                maxHeight: '20vh',
                maxWidth: '600px',
                margin: '20px auto',
                padding: '12px',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#F5F5F5', // Neutral background for the container
                border: '1px solid #E0E0E0',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                overflowY: "auto", // Enable vertical scrolling
            }}
        >
            {/* Styled Table */}
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '12px',
                    backgroundColor: '#FFFFFF', // White for table background
                    borderRadius: '6px',
                    overflow: 'hidden',
                    fontSize: '13px',
                    color: '#333333', // Dark grey for text
                }}
            >
                <thead>
                    <tr>
                        <th
                            style={{
                                backgroundColor: '#3A6940', // Green for ESG theme
                                color: '#FFFFFF', // White text for contrast
                                padding: '8px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                            }}
                        >
                            ID
                        </th>
                        <th
                            style={{
                                backgroundColor: '#4CAF50',
                                color: '#FFFFFF',
                                padding: '8px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                            }}
                        >
                            Metric
                        </th>
                        <th
                            style={{
                                backgroundColor: '#3A6940',
                                color: '#FFFFFF',
                                padding: '8px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                            }}
                        >
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td
                                style={{
                                    padding: '8px',
                                    backgroundColor: '#EAF7E9', // White for table background
                                    borderBottom: '1px solid #E0E0E0', // Light grey separators
                                    textAlign: 'center',
                                }}
                            >
                                {item.id}
                            </td>
                            <td
                                style={{
                                    padding: '8px',
                                    
                                    borderBottom: '1px solid #E0E0E0',
                                }}
                            >
                                {item.metric}
                            </td>
                            <td
                                style={{
                                    padding: '8px',
                                    backgroundColor: '#EAF7E9',
                                    borderBottom: '1px solid #E0E0E0',
                                }}
                            >
                                {item.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Centered Download Button */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                    marginTop: '12px',
                }}
            >
                <CSVLink data={data} headers={headers} filename="esg_report.csv">
                    <button
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#3A6940', // Blue for governance and trust
                            color: '#FFFFFF', // White text for contrast
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            transition: 'background-color 0.2s ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = '#2F5234') // Darker blue on hover
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = '#3A6940')
                        }
                    >
                        Download Report
                    </button>
                </CSVLink>
            </div>
        </div>
    );
};

export default ReportingComp;
