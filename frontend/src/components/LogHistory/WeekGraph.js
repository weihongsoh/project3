import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const moment = require("moment");

const WeekGraph = ({ userName }) => {
  const [nutritionData, setNutritionData] = useState([]);

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //filter Data based on username
  const filterByUserName = data?.filter((element) => element.user === userName);

  //Check Date
  const todayCheck = moment().format("dddd MMMM Do YYYY");
  const l1DayCheck = moment().subtract(1, "day").format("dddd MMMM Do YYYY");
  const l2DayCheck = moment().subtract(2, "day").format("dddd MMMM Do YYYY");
  const l3DayCheck = moment().subtract(3, "day").format("dddd MMMM Do YYYY");
  const l4DayCheck = moment().subtract(4, "day").format("dddd MMMM Do YYYY");
  const l5DayCheck = moment().subtract(5, "day").format("dddd MMMM Do YYYY");
  const l6DayCheck = moment().subtract(6, "day").format("dddd MMMM Do YYYY");

  //Filter data by date
  //today's Nutrition Data
  const todayNutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === todayCheck
  );
  const todayCalories = todayNutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const todayCarbs = todayNutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const todayProtein = todayNutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const todayFats = todayNutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L1 Day Nutrition Data
  const l1NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l1DayCheck
  );
  const l1Calories = l1NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Carbs = l1NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Protein = l1NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Fats = l1NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L2 Day Nutrition Data
  const l2NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l2DayCheck
  );
  const l2Calories = l2NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Carbs = l2NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Protein = l2NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Fats = l2NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L3 Day Nutrition Data
  const l3NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l3DayCheck
  );
  const l3Calories = l3NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Carbs = l3NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Protein = l3NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Fats = l3NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L4 Day Nutrition Data
  const l4NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l4DayCheck
  );
  const l4Calories = l4NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Carbs = l4NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Protein = l4NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Fats = l4NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L5 Day Nutrition Data
  const l5NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l5DayCheck
  );
  const l5Calories = l5NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Carbs = l5NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Protein = l5NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Fats = l5NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L6 Day Nutrition Data
  const l6NutritionData = filterByUserName?.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l6DayCheck
  );
  const l6Calories = l6NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Carbs = l6NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Protein = l6NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Fats = l6NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //Display Day
  const today = moment().format("dddd");
  const l1Day = moment().subtract(1, "day").format("dddd");
  const l2Day = moment().subtract(2, "day").format("dddd");
  const l3Day = moment().subtract(3, "day").format("dddd");
  const l4Day = moment().subtract(4, "day").format("dddd");
  const l5Day = moment().subtract(5, "day").format("dddd");
  const l6Day = moment().subtract(6, "day").format("dddd");

  const graphData = {
    labels: [l6Day, l5Day, l4Day, l3Day, l2Day, l1Day, today],
    datasets: [
      {
        label: "Calories",
        data: [
          l6Calories,
          l5Calories,
          l4Calories,
          l3Calories,
          l2Calories,
          l1Calories,
          todayCalories,
        ],
        backgroundColor: "rgba(153, 102, 255, 0.8)",
      },
      {
        label: "Carbs(g)",
        data: [
          l6Carbs,
          l5Carbs,
          l4Carbs,
          l3Carbs,
          l2Carbs,
          l1Carbs,
          todayCarbs,
        ],

        backgroundColor: "rgba(255, 159, 64, 0.25)",
      },
      {
        label: "Protein(g)",
        data: [
          l6Protein,
          l5Protein,
          l4Protein,
          l3Protein,
          l2Protein,
          l1Protein,
          todayProtein,
        ],

        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
      {
        label: "Fats(g)",
        data: [l6Fats, l5Fats, l4Fats, l3Fats, l2Fats, l1Fats, todayFats],
        backgroundColor: "rgba(255, 159, 64, 0.75)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          display: true,
          position: "left",
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const StackedBar = () => (
    <>
      <div className="header">
        <h1 className="title">Stacked Bar Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/StackedBar.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={graphData} options={options} />
    </>
  );

  return (
    <div>
      <h1>Macronutrients Graph</h1>
      <Bar data={graphData} options={options} />
    </div>
  );
};

export default WeekGraph;

//Colour Scheme
// 'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',

/* Seed nutrition data



*/
