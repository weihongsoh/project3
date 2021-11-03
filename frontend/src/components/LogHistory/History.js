import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import WeekGraph from "./WeekGraph";
import DailyInformationPage from "./DailyInformationPage";
import DailyLogCard from "./DailyLogCard";
import SideNavBar from "../SideNavBar";

const moment = require("moment");

const History = ({ userLogin }) => {
  const userName = userLogin.username;

  //get date data
  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <div className="grid grid-cols-3 pt-2 space-x-5">
          <div>
            <SideBar userName={userName} />
          </div>

          <div className="col-span-2 p-3">
            <Overview />
            <WeekGraph userName={userName} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
