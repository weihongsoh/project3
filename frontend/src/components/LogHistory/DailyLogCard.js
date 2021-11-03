import React from "react";

const DailyLogCard = (props) => {
  return (
    <React.Fragment>
      <div className="bg-white py-2 px-2 text-xs text-gray-700 flex grid grid-cols-5 rounded-md hover:bg-opacity-50 m-3 divide-x divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse">
        <div className="my-auto">
          <strong>C</strong> <br></br>
          {props.nutritionData.carbohydrates}
        </div>
        <div className="my-auto">
          <strong>P</strong> <br></br>
          {props.nutritionData.protein}
        </div>
        <div className="my-auto">
          <strong>F</strong> <br></br>
          {props.nutritionData.fats}
        </div>
        <div className="my-auto 	justify-content: end">
          <p className="font-extralight text-lg">
            {props.nutritionData.calories}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyLogCard;
