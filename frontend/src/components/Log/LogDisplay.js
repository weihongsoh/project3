import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Tab } from "@headlessui/react";
import { Dialog } from '@headlessui/react'


const LogDisplay = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const moment = require("moment");
  const today = moment().format("dddd MMMM Do YYYY");
  let [isOpen, setIsOpen] = useState(true)
  
  useEffect(() => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
    
  }, []);

  const [todayMeals, setTodayMeals] = useState([])
  
  
  
    useEffect(() => {
      if (data) {
          
        const interval = setInterval(() => {
        setTodayMeals(data.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today))
        }, 1000)
          
        return () => clearInterval(interval)
        }
    }, [data])
    


  // getting all meals data
  const mealtype = todayMeals.map((meal) => meal.mealtype);

  //getting breakfast data
  const breakfast = todayMeals.filter((ele) => ele.mealtype === "Breakfast");

  //getting lunch data
  const lunch = todayMeals.filter((ele) => ele.mealtype === "Lunch");

  //getting dinner data
  const dinner = todayMeals.filter((ele) => ele.mealtype === "Dinner");

  //getting snack data
  const snack = todayMeals.filter((ele) => ele.mealtype === "Snack");

  
  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-xl border-2 border-indigo-600 mt-5">
    
    
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-indigo-700 bg-opacity-10 rounded-full">
          <Tab
            className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-full
                  focus:bg-indigo-600 outline-none focus:text-white
                  "
          >
            {" "}
            Breakfast
          </Tab>

          <Tab
            className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-full
                  focus:bg-indigo-600 outline-none focus:text-white
                  "
          >
            {" "}
            Lunch
          </Tab>

          <Tab
            className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-full
                  focus:bg-indigo-600 outline-none focus:text-white
                  "
          >
            {" "}
            Dinner
          </Tab>

          <Tab
            className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-full
                  focus:bg-indigo-600 outline-none focus:text-white
                  "
          >
            {" "}
            Snack
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="pb-3">
              {mealtype !== breakfast &&
                breakfast.map((itemNutrition) => (
                  <Link to={`/log/delete/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />{" "}
                  </Link>
                ))}
            </div>
            <div className="grid grid-cols-2 border-t-2 border-indigo-500 pt-5 text-gray-800">
              <div className=" text-left leading-3 pl-5 tracking-wide">
                <span className="text-left text-xs font-medium uppercase">
                  total Carbs:{" "}
                  <span className="text-indigo-600 font-bold">
                    {breakfast
                      .map((item) => item.carbohydrates)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total Protein:{" "}
                  <span className="text-indigo-600 font-bold">
                    {breakfast
                      .map((item) => item.protein)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total fats:{" "}
                  <span className="text-indigo-600 font-bold">
                    {breakfast
                      .map((item) => item.fats)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
              </div>
              <div>
                <h1 className="text-right pr-5 text-3xl font-base">
                  {breakfast
                    .map((item) => item.calories)
                    .reduce((prev, curr) => prev + curr, 0)}
                  kcal
                </h1>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="pb-3">
              {mealtype !== lunch &&
                lunch.map((itemNutrition) => (
                  <Link to={`/log/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />
                  </Link>
                ))}
            </div>
            <div className="grid grid-cols-2 border-t-2 border-indigo-500 pt-5 text-gray-800">
              <div className=" text-left leading-3 pl-5 tracking-wide">
                <span className="text-left text-xs font-medium uppercase">
                  total Carbs:{" "}
                  <span className="text-indigo-600 font-bold">
                    {lunch
                      .map((item) => item.carbohydrates)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total Protein:{" "}
                  <span className="text-indigo-600 font-bold">
                    {lunch
                      .map((item) => item.protein)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total fats:{" "}
                  <span className="text-indigo-600 font-bold">
                    {lunch
                      .map((item) => item.fats)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
              </div>
              <div>
                <h1 className="text-right pr-5 text-3xl font-base">
                  {lunch
                    .map((item) => item.calories)
                    .reduce((prev, curr) => prev + curr, 0)}
                  kcal
                </h1>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="pb-3">
              {mealtype !== dinner &&
                dinner.map((itemNutrition) => (
                  <Link to={`/log/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />
                  </Link>
                ))}
            </div>
            <div className="grid grid-cols-2 border-t-2 border-indigo-500 pt-5 text-gray-800">
              <div className=" text-left leading-3 pl-5 tracking-wide">
                <span className="text-left text-xs font-medium uppercase">
                  total Carbs:{" "}
                  <span className="text-indigo-600 font-bold">
                    {dinner
                      .map((item) => item.carbohydrates)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total Protein:{" "}
                  <span className="text-indigo-600 font-bold">
                    {dinner
                      .map((item) => item.protein)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total fats:{" "}
                  <span className="text-indigo-600 font-bold">
                    {dinner
                      .map((item) => item.fats)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
              </div>
              <div>
                <h1 className="text-right pr-5 text-3xl font-base">
                  {dinner
                    .map((item) => item.calories)
                    .reduce((prev, curr) => prev + curr, 0)}
                  kcal
                </h1>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="pb-3">
              {mealtype !== snack &&
                snack.map((itemNutrition) => (
                  <Link to={`/log/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />
                  </Link>
                ))}
            </div>
            <div className="grid grid-cols-2 border-t-2 border-indigo-500 pt-5 text-gray-800">
              <div className=" text-left leading-3 pl-5 tracking-wide">
                <span className="text-left text-xs font-medium uppercase">
                  total Carbs:{" "}
                  <span className="text-indigo-600 font-bold">
                    {snack
                      .map((item) => item.carbohydrates)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total Protein:{" "}
                  <span className="text-indigo-600 font-bold">
                    {snack
                      .map((item) => item.protein)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
                <br />
                <span className="text-left text-xs font-medium uppercase">
                  total fats:{" "}
                  <span className="text-indigo-600 font-bold">
                    {snack
                      .map((item) => item.fats)
                      .reduce((prev, curr) => prev + curr, 0)}
                    g
                  </span>
                </span>
              </div>
              <div>
                <h1 className="text-right pr-5 text-3xl font-base">
                  {snack
                    .map((item) => item.calories)
                    .reduce((prev, curr) => prev + curr, 0)}
                  kcal
                </h1>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* <h1 className='text-left font-bold pl-3 text-white'>{day}</h1> */}
      <div className="">
      
        {/* {data !== [] &&
                    data.map((itemNutrition) =>
                      <Link to={`/nutrition/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )} */}
      </div>

      
    </div>
  );
};

export default LogDisplay;
