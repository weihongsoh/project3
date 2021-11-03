import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import FoodCard from "../Log/FoodCard";
import SideNavBar from "../SideNavBar";

const moment = require("moment");

const DailyInformationPage = ({ meal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/nutrition/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  //this works - this gets the params
  let dateParams = useParams();
  console.log(dateParams);

  const gettingDate = moment(dateParams.date).format("dddd MMMM Do YYYY");
  console.log(gettingDate);

  console.log(data);

  //getting breakfast data
  const breakfast = data.filter(
    (ele) => ele.mealtype === "Breakfast" && ele.date === dateParams.date
  );

  //getting lunch data
  const lunch = data.filter(
    (ele) => ele.mealtype === "Lunch" && ele.date === dateParams.date
  );

  //getting lunch data
  const dinner = data.filter(
    (ele) => ele.mealtype === "Dinner" && ele.date === dateParams.date
  );

  //getting snack data
  const snack = data.filter(
    (ele) => ele.mealtype === "Snack" && ele.date === dateParams.date
  );

  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
          <Tab.Group>
            <h1>{gettingDate}</h1>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              <Tab
                className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              >
                {" "}
                Breakfast
              </Tab>

              <Tab
                className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              >
                Lunch
              </Tab>

              <Tab
                className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              >
                Dinner
              </Tab>

              <Tab
                className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              >
                Snack
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                {breakfast.map((itemNutrition) => (
                  <Link to={`/log/delete/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />{" "}
                  </Link>
                ))}
              </Tab.Panel>
              <Tab.Panel>
                {lunch.map((itemNutrition) => (
                  <Link to={`/log/delete/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />{" "}
                  </Link>
                ))}
              </Tab.Panel>
              <Tab.Panel>
                {dinner.map((itemNutrition) => (
                  <Link to={`/log/delete/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />{" "}
                  </Link>
                ))}
              </Tab.Panel>
              <Tab.Panel>
                {snack.map((itemNutrition) => (
                  <Link to={`/log/delete/${itemNutrition._id}`}>
                    <FoodCard {...itemNutrition} />{" "}
                  </Link>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </div>
  );
};

export default DailyInformationPage;

// //getting 27 September
// const september27 = data.filter(
//   (element) => element.date === "2021-09-27T00:00:00.000Z"
// );
// // console.log(september27);

// //getting 26 September
// const september26 = data.filter(
//   (element) => element.date === "2021-09-26T00:00:00.000Z"
// );
// // console.log(september26);

// //getting 25 September
// const september25 = data.filter(
//   (element) => element.date === "2021-09-25T00:00:00.000Z"
// );
// // console.log(september25);

// //getting 24 September
// const september24 = data.filter(
//   (element) => element.date === "2021-09-24T00:00:00.000Z"
// );
// // console.log(september24);

// //getting 23 September
// const september23 = data.filter(
//   (element) => element.date === "2021-09-23T00:00:00.000Z"
// );
// // console.log(september23);

// //getting 22 September
// const september22 = data.filter(
//   (element) => element.date === "2021-09-22T00:00:00.000Z"
// );
// // console.log(september22);

// //getting 21 September
// const september21 = data.filter(
//   (element) => element.date === "2021-09-21T00:00:00.000Z"
// );
// // console.log(september21);
