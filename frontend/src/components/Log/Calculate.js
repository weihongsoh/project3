import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Calculate = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const currentDate = new Date();
  const isoDate = currentDate.toISOString().split("T")[0];
  const [date, setDate] = useState(isoDate);
  const [servingSize, setServingSize] = useState(0);
  let temporaryString = "Snack";
  const [meal, setMeal] = useState(temporaryString);
  const history = useHistory();
  const [nutritionCalculated, setNutritionCalculated] = useState();

  // Getting USER
  const [userName, setUserName] = useState(null);

  const fetchUserData = () => {
    //need to make this params eventually instead of hard-code "Iman"
    fetch(`/nutrition/user/${props.userLogin}`)
      .then((res) => res.json())
      .then((userName) => setUserName(userName));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // console.log(userName);
  // console.log(userName.user.username);

  useEffect(() => {
    setNutritionCalculated([...props.nutritionDataToCalculate]);
  }, [props.nutritionDataToCalculate]);

  // =====================================================
  //                  FUNCTIONS
  // =====================================================
  const handleMealTypeChange = async (e) => {
    await setMeal((prevState) => {
      return e.target.value;
    });
    await setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      let addedMealType = [Object.assign(newArray[0], { mealType: meal })];
      return addedMealType;
    });
  };

  const handleDateChange = (event) => {
    setDate((prevState) => {
      console.log(date);
      return event.target.value;
    });
  };

  const submitDate = (event) => {
    // setDate((prevState) => {
    //   console.log(date);
    //   return event.target.value;
    // });
    setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      let addedDate = [Object.assign(newArray[0], { date: date })];
      console.log(date);
      console.log(newArray);
      return addedDate;
    });
  };

  const handleInputChange = (event) => {
    setServingSize(event.target.value);
  };

  const submitToDataBase = async (event) => {
    event.preventDefault();

    const name = nutritionCalculated[0].Name;
    const calories = nutritionCalculated[0].Calories;
    const carbohydrates = nutritionCalculated[0].Carbohydrates;
    const protein = nutritionCalculated[0].Protein;
    const fats = nutritionCalculated[0].Fat;
    const weight = nutritionCalculated[0].ServingSizeg;
    const date = nutritionCalculated[0].date;
    const mealtype = nutritionCalculated[0].mealType;
    const user = userName.username;

    const submitToDataBase = {
      name,
      calories,
      carbohydrates,
      protein,
      fats,
      protein,
      fats,
      weight,
      date,
      mealtype,
      user,
    };

    axios
      .post("http://localhost:5000/nutrition/", submitToDataBase)
      .then((res) => console.log(res.data));

    props.setNutritionDataToCalculate([]);
    history.push("/log");
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      const chosenItem = newArray[event.target.id];
      const newItem = {};
      for (const [key, value] of Object.entries(chosenItem)) {
        if (
          key == "Calories" ||
          key == "Carbohydrates" ||
          key == "Protein" ||
          key == "Fat" ||
          key == "ServingSizeg"
        ) {
          newItem[key] = Math.round(value * servingSize);
        } else {
          newItem[key] = value;
        }
      }
      newArray.splice(event.target.id, 1, newItem);
      console.log(event.target.id);
      console.log(newArray);
      return newArray;
    });
  };

  const removeFromList = (event) => {
    event.preventDefault();
    const listArray = nutritionCalculated.filter(
      (element, index) => index !== index
    );
    setNutritionCalculated(listArray);
  };

  let printMealTypeChange = nutritionCalculated?.map((element, index) => {
    return (
      <div
        key={index}
        className="py-3 m-4 mt-5 bg-white bg-white bg-opacity-40 shadow-lg rounded-lg"
      >
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-4 my-0 ">
            <div>
              <label>Meal Type</label>
              <select
                name="MealType"
                onChange={handleMealTypeChange}
                value={meal}
                id={index}
                type="text"
              >
                <option value="Snack">Snack</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            <div>
              <input
                onChange={handleDateChange}
                type="date"
                className="input"
              ></input>
            </div>
            <div>
              <button
                className=" bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"
                onClick={submitDate}
              >
                Set Date
              </button>
            </div>

            <div>
              <label className="text-xs"> No. Serving</label>
              <input
                onChange={handleInputChange}
                value={servingSize}
                type="text"
                id={index}
              ></input>
            </div>
            <div className>
              <button
                id={index}
                onClick={handleCalculate}
                className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"
              >
                {" "}
                Calculate{" "}
              </button>
            </div>
          </div>

          <div className="my-auto">
            <div className="text-3xl capitalize pt-1">
              <strong>{element.Name}</strong> <br />
              <strong>⚡</strong> {element.Calories}
            </div>

            <div className="text-md pt-1">
              <strong>C</strong> {element.Carbohydrates}
              <strong>P</strong> {element.Protein}
              <strong>F</strong> {element.Fat}
              <strong>(g)</strong> {element.ServingSizeg}
            </div>
            <button
              className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md"
              onClick={submitToDataBase}
            >
              {" "}
              Add to Log{" "}
            </button>
          </div>
        </div>
      </div>

      // <tr key={index}>
      //   <td className="px-3 py-3">
      //     <strong>{element.Name}</strong>
      //   </td>
      //   <td className="px-3 py-3">
      //     <strong>⚡</strong>
      //     {element.Calories}
      //   </td>
      //   <td className="px-3 py-3">
      //     <strong>C</strong>
      //     {element.Carbohydrates}
      //   </td>
      //   <td className="px-3 py-3">
      //     <strong>P</strong>
      //     {element.Protein}
      //   </td>
      //   <td className="px-3 py-3">
      //     <strong>F</strong>
      //     {element.Fat}
      //   </td>
      //   <td className="px-3 py-3">
      //     <strong>(g)</strong>
      //     {element.ServingSizeg}
      //   </td>
      //   <td>
      //     <label>Meal Type</label>
      //     <select
      //       name="MealType"
      //       onChange={handleMealTypeChange}
      //       value={meal}
      //       id={index}
      //       type="text"
      //     >
      //       <option value="Snack">Snack</option>
      //       <option value="Breakfast">Breakfast</option>
      //       <option value="Lunch">Lunch</option>
      //       <option value="Dinner">Dinner</option>
      //     </select>
      //   </td>

      //   <input
      //     onChange={handleDateChange}
      //     type="date"
      //     className="input"
      //   ></input>
      //   <div className="ServingSize">
      //     <label> No. Serving</label>
      //     <input
      //       onChange={handleInputChange}
      //       value={servingSize}
      //       type="text"
      //       id={index}
      //     ></input>
      //     <button id={index} onClick={handleCalculate}>
      //       Calculate
      //     </button>
      //   </div>

      //   <button className="outline-black" onClick={submitToDataBase}>
      //     Add to Log
      //   </button>
      // </tr>
    );
  });

  return <div>{printMealTypeChange}</div>;
};

export default Calculate;
