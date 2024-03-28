// DoughnutChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Destroy existing chart instance
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create new Doughnut chart instance with legend positioned below
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom', // Adjust the padding value as needed
                    },
                },
            },
        });

        // Clean up when component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default DoughnutChart;
