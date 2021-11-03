import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import DailyLogCard from "./DailyLogCard";
import DailyInformationPage from "./DailyInformationPage";

const dayjs = require("dayjs");
const moment = require("moment");

const SideBar = ({ userName }) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [data, setData] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);

  const fixTheFetchProblem = () => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fixTheFetchProblem();
  }, []);

  console.log(userName);

  //filter Data based on username
  const filterByUserName = data?.filter((element) => element.user === userName);

  //Display Date
  const todayDisplay = moment().format("dddd MMMM Do YYYY");
  const l1DayDisplay = moment().subtract(1, "day").format("dddd MMMM Do YYYY");
  const l2DayDisplay = moment().subtract(2, "day").format("dddd MMMM Do YYYY");
  const l3DayDisplay = moment().subtract(3, "day").format("dddd MMMM Do YYYY");
  const l4DayDisplay = moment().subtract(4, "day").format("dddd MMMM Do YYYY");
  const l5DayDisplay = moment().subtract(5, "day").format("dddd MMMM Do YYYY");
  const l6DayDisplay = moment().subtract(6, "day").format("dddd MMMM Do YYYY");

  //Dates for Params/Database access
  const NoTime = "T00:00:00.000Z";

  // All Days
  const paramsTodayDisplay = moment()
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl1DayDisplay = moment()
    .subtract(1, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl2DayDisplay = moment()
    .subtract(2, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl3DayDisplay = moment()
    .subtract(3, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl4DayDisplay = moment()
    .subtract(4, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl5DayDisplay = moment()
    .subtract(5, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

  const paramsl6DayDisplay = moment()
    .subtract(6, "day")
    .toISOString()
    .substring(0, 10)
    .concat(NoTime);

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

  //NOTE, I have changed const todayNutritionData = data?.filter... to filterByUserName?.
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

  const todayNutritionCollated = {
    calories: todayCalories,
    carbohydrates: todayCarbs,
    protein: todayProtein,
    fats: todayFats,
  };

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

  const l1NutritionCollated = {
    calories: l1Calories,
    carbohydrates: l1Carbs,
    protein: l1Protein,
    fats: l1Fats,
  };

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

  const l2NutritionCollated = {
    calories: l2Calories,
    carbohydrates: l2Carbs,
    protein: l2Protein,
    fats: l2Fats,
  };

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

  const l3NutritionCollated = {
    calories: l3Calories,
    carbohydrates: l3Carbs,
    protein: l3Protein,
    fats: l3Fats,
  };

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

  const l4NutritionCollated = {
    calories: l4Calories,
    carbohydrates: l4Carbs,
    protein: l4Protein,
    fats: l4Fats,
  };

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

  const l5NutritionCollated = {
    calories: l5Calories,
    carbohydrates: l5Carbs,
    protein: l5Protein,
    fats: l5Fats,
  };

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

  const l6NutritionCollated = {
    calories: l6Calories,
    carbohydrates: l6Carbs,
    protein: l6Protein,
    fats: l6Fats,
  };

  const dateArray = [
    {
      displayDate: todayDisplay,
      paramsDate: paramsTodayDisplay,
      nutritionData: todayNutritionCollated,
    },
    {
      displayDate: l1DayDisplay,
      paramsDate: paramsl1DayDisplay,
      nutritionData: l1NutritionCollated,
    },
    {
      displayDate: l2DayDisplay,
      paramsDate: paramsl2DayDisplay,
      nutritionData: l2NutritionCollated,
    },
    {
      displayDate: l3DayDisplay,
      paramsDate: paramsl3DayDisplay,
      nutritionData: l3NutritionCollated,
    },
    {
      displayDate: l4DayDisplay,
      paramsDate: paramsl4DayDisplay,
      nutritionData: l4NutritionCollated,
    },
    {
      displayDate: l5DayDisplay,
      paramsDate: paramsl5DayDisplay,
      nutritionData: l5NutritionCollated,
    },
    {
      displayDate: l6DayDisplay,
      paramsDate: paramsl6DayDisplay,
      nutritionData: l6NutritionCollated,
    },
  ];

  console.log(dateArray);

  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
      <div>
        {dateArray.map((element) => (
          <div className="py-2 px-2 text-s text-gray-700 flex grid rounded-md hover: bg-opacity-50 m-3 divide-x divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse">
            <Link to={`/loghistory/DailyInformationPage/${element.paramsDate}`}>
              <h3>{element.displayDate}</h3>
              <DailyLogCard nutritionData={element.nutritionData} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

// "bg-white py-2 px-2 text-xs text-gray-700 flex grid grid-cols-5 rounded-md hover:bg-opacity-50 m-3 divide-x divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse"
