import React, { useState } from "react";
import Calculate from "./Calculate";
// import Search from "./Search";
import Result from "./Result";
import LogDisplay from "./LogDisplay";
import SideNavBar from "../SideNavBar";

const Log = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [searchTerm, setSearchTerm] = useState("");
  const [nutritionDataToCalculate, setNutritionDataToCalculate] = useState("");

  const addToCalculate = (item) => {
    setNutritionDataToCalculate([...nutritionDataToCalculate, item]);
  };

  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <div className="grid grid-cols-2 pt-2 space-x-5">
          <div>
            {/* <div className='relative items-center justify-center space-x-2 pt-20'>
                  <div className="inline"> <Search setSearchTerm={setSearchTerm} /></div> */}
            <Result
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              nutritionDataToCalculate={nutritionDataToCalculate}
              setNutritionDataToCalculate={setNutritionDataToCalculate}
              handleClick={addToCalculate}
            />

            <Calculate
              nutritionDataToCalculate={nutritionDataToCalculate}
              setNutritionDataToCalculate={setNutritionDataToCalculate}
            />
          </div>
          <div>
            <LogDisplay nutritionDataToCalculate={nutritionDataToCalculate} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Log;
