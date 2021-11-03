import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom'

const WeightTracker = ({ weight, date, targetWeight }) => {

  const moment = require("moment");
   let wt = weight.slice(-6)
  let day = date.slice(-6)
  
  moment(day[0]).format('ddd')

    const data = {
        labels: [moment(day[0]).format('ddd'), moment(day[1]).format('ddd'), moment(day[2]).format('ddd'), moment(day[3]).format('ddd'), moment(day[4]).format('ddd'), moment(day[5]).format('ddd')],
        datasets: [
          {
            label: 'Weight',
            data: [wt[0], wt[1], wt[2], wt[3], wt[4], wt[5]],
            fill: false,
            backgroundColor: 'rgb(153, 102, 255)',
            borderColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };


    return (
        <div>
            <h1 className="text-left m-3 font-bold text-gray-600 align-middle ">Weight Watch <button className="text-xs border-2 border-indigo-600 rounded-md px-3 ml-2 border-opacity-70 hover:bg-indigo-600 hover:text-white"><Link to="/settings">update</Link></button></h1>
            <Line data={data} options={options} />
            
            <div className="grid grid-cols-2 pt-2">
                <div className="text-left py-3 px-4 text-gray-700 rounded-lg m-3 border-2 border-indigo-600 border-opacity-60">
                <div className="text-xs"> Current Weight: </div>
            <div className="text-2xl font-semibold">{wt[5]}kg</div>
                </div>

                <div className="text-left py-3 px-4 text-gray-700 rounded-lg m-3 border-2 border-indigo-600 border-opacity-60">
                <div className="text-xs"> Target Weight: </div>
                    <div className="text-2xl font-semibold">{targetWeight}kg</div>
                </div>

                </div>
        </div>
    )
}

export default WeightTracker
