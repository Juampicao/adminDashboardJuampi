import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        {/* First Download bottom */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$18,323.43</p>
            </div>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            ></Button>
            <BsCurrencyDollar />
          </div>
        </div>
        {/* First Download bottom */}

        {/* Data earning */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>

                <span
                  className={`text-sm text-${item.pcColor} text-black ml-2`}
                >
                  {item.percentage}
                </span>
              </p>

              <p className=" text-gray-400 mt-1 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Data earning */}

      {/* Revenue Section */}
      <div classname="flex gap-10 flex-wrap justify-center">
        <div classname="bg-white dark:text-gray-200 dark:bg-seconday-dark-bg m-2 rounded-2xl md-w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl dark:text-gray-200 ">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold dark:text-gray-200">
                    $93,438
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold dark:text-gray-200">
                  $48,487
                </p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              {/* Sparklinek */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
              {/* Sparklinek */}
            </div>
            {/* Stacked */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
            {/* Stacked */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
