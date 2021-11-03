import React, { useState, useEffect } from "react";

const Result = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [nutritionData, setNutritionData] = useState("");
  const apiKey = "OhZQcF/GhCt0FEzwKxx2Mw==h0nAYlhAxfMLbwHA";
  const search = props.searchTerm;
  const results = [];
  const [toggle, setToggle] = useState(false);

  // =====================================================
  //                        FUNCTION
  // =====================================================

  const fetchNutritionAPI = async (search) => {
    const nutritionAPI = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;
    try {
      console.log("Pulling API now");
      const res = await fetch(nutritionAPI, {
        headers: { "X-Api-Key": `${apiKey}` },
      });
      const data = await res.json();
      await setNutritionData(data.items);
    } catch (err) {
      console.log("Error in getting API");
    }
  };

  // =====================================================
  //                        GET NUTRITION DATA
  // =====================================================

  for (const key in nutritionData[0]) {
    results.push(`${nutritionData[0][key]}`);
  }

  let displayedResults = [
    {
      Name: results[4],
      Calories: results[8],
      Carbohydrates: results[11],
      Protein: results[10],
      Fat: results[7],
      ServingSizeg: results[2],
    },
  ];

  let displayedResults2 = displayedResults?.map((element, index) => {
    return (
      <div className="grid grid-cols-4 flex py-3 m-4 bg-white bg-opacity-40 shadow-lg rounded-lg ">
        <div className="my-auto capitalize text-lg font-bold">
          {element.Name}
          <br />
        </div>

        <div className="text-xs text-left my-auto leading-3 ">
          Carbs: <span className="text-bold">{element.Carbohydrates}</span>{" "}
          <br />
          Protein: <span className="text-bold">{element.Protein}</span> <br />
          Fats: <span className="text-bold">{element.Fat}</span>
        </div>

        <div className="text-xs text-left leading-3 my-auto align-top">
          <br />
          Serving Size:{" "}
          <span className="text-bold">{element.ServingSizeg}</span>
          <br />
          Calories: <span className="text-bold">{element.Calories}</span>
        </div>

        <div className="my-auto">
          <button
            onClick={() => props.handleClick(element)}
            className="rounded-full bg-indigo-600 text-white px-5 py-1 text-sm shadow-md hover:bg-indigo-700"
          >
            {" "}
            select{" "}
          </button>
        </div>
      </div>
      // <tr>
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
      //     <button onClick={() => props.handleClick(element)}>
      //       Food Choice?
      //     </button>
      //   </td>
      // </tr>
    );
  });

  // =====================================================
  //                        FUNCTION
  // =====================================================

  // useEffect(() => {
  //   props.setNutritionDataToCalculate(displayedResults);
  //   setToggle(false);
  // }, [toggle]);

  const handleSubmit = async () => {
    await fetchNutritionAPI(search);
    setToggle(true);
  };

  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  // =====================================================
  //                       RETURN
  // =====================================================

  return (
    <div className="">
      <div className="flex items-center justify-center space-x-2 pt-20">
        <input
          className="inline-flex px-4 py-1 h-10 w-72 text-gray-700 text-md bg-transparent border-2 border-indigo-600 rounded-full focus:outline-none shadow-md shadow-inner"
          type="text"
          placeholder="Enter Your food Name"
          onChange={handleChange}
        />

        <button
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 shadow-lg transform hover:bg-indigo-700 hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <br></br>
      {/* {[] ? <span></span> : (displayedResults2)} */}
      {displayedResults2 === [] && <div> </div>}
      {displayedResults2 !== [] && displayedResults2}
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="px-3 py-3">Calories</th>
            <th className="px-3 py-3">Carbohydrate</th>
            <th className="px-3 py-3">Protein</th>
            <th className="px-3 py-3">Fat</th>
            <th className="px-3 py-3">Serving Size</th>
          </tr>
        </thead>
        <tbody>{displayedResults2}</tbody>
      </table> */}
    </div>
  );
};

export default Result;
