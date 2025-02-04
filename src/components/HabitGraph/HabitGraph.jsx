import "./HabitGraph.scss";
import Chart from 'react-apexcharts';
import dayjs from "dayjs";
import { useEffect, useState } from "react";

function HabitGraph({dates, habitData}) {
    const [completion, setCompletion] = useState([]);
    const [formatedDates, setFormatedDates] = useState([]);
    

    useEffect(()=>{
        const completionRatio = [];
        const numHabits = habitData.length;
        for (const day of dates) {
            let numCompleted = 0;
            for (const habit of habitData) {
                if (habit.completion_dates.includes(day)) {
                    numCompleted ++;
                }
            }
            completionRatio.push((numCompleted/numHabits)*100);
            setCompletion(completionRatio);
        }
    }, [dates, habitData]);

    useEffect(()=>{
        const newDate = dates.map(date => dayjs(date).date())
        setFormatedDates(newDate);
    },[dates])

    const options = {
        chart: {
          type: 'area',
          toolbar: { show: false },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800, // Animation speed in milliseconds
          },
          zoom: {
            enabled: false
          },
        },
        xaxis: {
          categories: formatedDates, // Days of the week or your data points
        },
        stroke: { curve: 'smooth' , width: 3},
        grid: {
            clipMarkers: false, // Prevent markers or graph shading from being clipped
          },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        
        yaxis: {
            labels: {
                show: true,
                formatter: (val) => val.toFixed(0), // Restrict to 2 decimal places
              },
            tickAmount: 4,
            min: 0,      // Set the minimum value for Y-axis
            max: 100,     // Set the maximum value for Y-axis
          },
        dataLabels: {
            enabled: false, // Disable value labels
          },
        colors: ['#82ca9d'], // Customize the color
      };
      const series =[
        {
          name: 'Habits Completed',
          data: completion // Your habit completion data
        },
      ];
    
      return <Chart options={options} series={series} type="area" height={200} />;
    };


export default HabitGraph