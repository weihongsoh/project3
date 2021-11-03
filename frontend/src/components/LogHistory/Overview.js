import React, { useState, useEffect } from "react";

const moment = require("moment");
const Overview = () => {
  const today = moment().format("dddd MMMM Do YYYY");
  const fetchAllData = () => {
    fetch("/nutrition").then((res) => res.json());

    fetch("/nutrition/user/Iman").then((res) => res.json());

    fetch("/nutrition/weight/all").then((res) => res.json());
  };

  const [userName, setUser] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const lastSevenDays = moment().subtract(7, "days");

  return (
    <div>
      <div
        className="h-52 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 py-2 px-2 m-3 text-gray-700 rounded-lg bg-opacity-20 text-left pl-8 pt-12 
                        bg-cover bg-center filter brightness-105"
        style={{
          backgroundImage: `url('https://i.ibb.co/Fn5LVQB/dashboard-banner.jpg')`,
        }}
      >
        {" "}
        <h1 className="text-4xl font-bold">Hello, {userName}</h1>
        <h1 className="text-lg pb-4">{today}</h1>
      </div>
    </div>
  );
};

export default Overview;
