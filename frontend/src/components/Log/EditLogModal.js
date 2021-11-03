import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditLogModal = ({ match, nutritionDataToCalculate }) => {
  const currentDate = new Date();
  const [data, setData] = useState({});
  const [meal, setMeal] = useState({});
  const isoDate = currentDate.toISOString().split("T")[0];
  const [date, setDate] = useState(isoDate);
  const [servingSize, setServingSize] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetch(`/nutrition/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [match]);

  const [nutritionCalculated, setNutritionCalculated] = useState([data]);

  const handleMealTypeChange = async (e) => {
    await setMeal((prevstate) => {
      return e.target.value;
    });
    await setNutritionCalculated((prevState) => {
      const newArray = [data];
      let addedMealType = [
        Object.assign(newArray[0], { mealtype: e.target.value.toString() }),
      ];
      console.log(addedMealType);
      return addedMealType;
    });
  };

  //error in date change - needs to click twice before it logs
  const handleDateChange = (event) => {
    setDate(event.target.value);
    setNutritionCalculated((prevState) => {
      const newArray = [data];
      let addedDate = [Object.assign(newArray[0], { date: date })];
      return addedDate;
    });
  };

  const handleInputChange = (event) => {
    setServingSize(event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setNutritionCalculated((prevState) => {
      const newArray = [data];
      const newArray2 = data;
      const newItem = {};
      for (const [key, value] of Object.entries(newArray2)) {
        // console.log(newArray2);
        // console.log(`This is the key:${key}, this is the value:${value}`);
        if (
          key == "calories" ||
          key == "carbohydrates" ||
          key == "protein" ||
          key == "fats" ||
          key == "weight"
        ) {
          newItem[key] = Math.round(
            (value / (newArray2.weight * 0.01)) * servingSize
          );
        } else {
          newItem[key] = value;
        }
      }
      // console.log("This is old newArray (before Splice):", newArray);
      // console.log(newItem);
      newArray.splice(0, 1, newItem);
      console.log("This is newArray after Splice:", newArray);
      return newArray;
    });
  };

  //update to database
  const submitToDataBase = async (event) => {
    event.preventDefault();
    console.log(nutritionCalculated.name);
    const name = nutritionCalculated.name;
    const calories = nutritionCalculated.calories;
    const carbohydrates = nutritionCalculated.carbohydrates;
    const protein = nutritionCalculated.protein;
    const fats = nutritionCalculated.fats;
    const weight = nutritionCalculated.weightg;
    const date = nutritionCalculated.date;
    const mealtype = nutritionCalculated.mealType;

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
    };

    axios
      .put(`http://localhost:5000/nutrition/${data._id}`, submitToDataBase)
      .then((res) => console.log(res.data));

    history.push("/log");
  };
  console.log(data);

  return (
    <div>
      <form>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-4 my-0 ">
            <div>
              <label>Meal Type</label>
              <select
                name="MealType"
                onChange={handleMealTypeChange}
                //    id={index}
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
              <label className="text-xs"> No. Serving</label>
              <input
                name="weight"
                onChange={handleInputChange}
                value={servingSize}
                placeholder={data.weight}
                type="text"
                //    id={index}
              ></input>
            </div>
            <div className>
              {/* <button id={index} onClick={handleCalculate} className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"> Calculate </button> */}
              <button
                onClick={handleCalculate}
                className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"
              >
                {" "}
                Calculate{" "}
              </button>
            </div>
          </div>

          <div className="my-auto">
            <h2>OLD DATA</h2>
            <div className="text-3xl capitalize pt-1">
              <strong>{data.name}</strong> <br />
              <strong>⚡</strong> {data.calories}
            </div>

            <div className="text-md pt-1">
              <strong>C</strong> {data.carbohydrates}
              <strong>P</strong> {data.protein}
              <strong>F</strong> {data.fats}
              <strong>(g)</strong> {data.weight}
            </div>

            <h2>NEW DATA</h2>
            {nutritionCalculated?.map((element) => (
              <div>
                <div className="text-3xl capitalize pt-1">
                  <strong>{element.name}</strong> <br />
                  <strong>⚡</strong> {element.calories}
                </div>
                <div className="text-md pt-1">
                  <strong>C</strong> {element.carbohydrates}
                  <strong>P</strong> {element.protein}
                  <strong>F</strong> {element.fats}
                  <strong>(g)</strong> {element.weight}
                </div>
              </div>
            ))}
            {/* <div className="text-3xl capitalize pt-1">
              <strong>{nutritionCalculated[0].name}</strong> <br />
              <strong>⚡</strong> {nutritionCalculated[0].calories}
            </div>

            <div className="text-md pt-1">
              <strong>C</strong> {nutritionCalculated[0].carbohydrates}
              <strong>P</strong> {nutritionCalculated[0].protein}
              <strong>F</strong> {nutritionCalculated[0].fats}
              <strong>(g)</strong> {nutritionCalculated[0].weight}
            </div> */}

            <button
              className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md"
              onSubmit={submitToDataBase}
            >
              {" "}
              Add to Log{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditLogModal;
