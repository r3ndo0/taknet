"use client";

import React, { useEffect, useMemo, useState } from "react";
import Toggle from "../Inputs/Toggle";
import jsonData from "@/constants/PlansData.json";
import SliderInput from "../Inputs/SliderInput";
import { GreenTick } from "../Icons/GreenTick";
import { RedX } from "../Icons/RedX";
import Link from "next/link";

function Plans() {
  const [monthly, setMonthly] = useState(true);

  const [selectedPageViews, setSelectedPageViews] = useState(
    jsonData[1].page_views
  );
  const selectedPlan = useMemo(() => {
    return jsonData.find((d) => d.page_views === selectedPageViews);
  }, [selectedPageViews]);
  return (
    <div className="m-auto  border-2 border-gray-300 text-gray-400 font-semibold text-sm">
      <div className="flex border-b border-gray-200 flex-col items-center justify-center md:p-6 p-3">
        <p className="mb-7">
          {selectedPlan && (selectedPlan?.page_views / 1000).toString() + "k"}{" "}
          PAGEVIEWS
        </p>

        <SliderInput
          //   value={selectedPageViews}
          valueSetter={setSelectedPageViews}
          defaultValue={jsonData[1].page_views}
          step={50000}
          min={jsonData[0].page_views}
          max={jsonData.at(-1)?.page_views ?? 0}
        />
        {monthly ? (
          <>
            <p className="text-gray-700 my-5 flex  items-center  text-[24px]">
              ${selectedPlan?.monthly_price}
              <span className="text-sm text-gray-400">/month</span>
            </p>{" "}
          </>
        ) : (
          <>
            <p className="text-gray-700 my-5 flex items-center  text-[24px]">
              ${selectedPlan?.yearly_price}
              <span className="text-sm text-gray-400">/year</span>
            </p>{" "}
          </>
        )}
        <div className="flex flex-col md:flex-row gap-4 my-5 items-center">
          <Toggle
            name="monthly"
            value={monthly}
            valueSetter={setMonthly}
            label="Monthly Billing"
            className="flex gap-2"
          />
          <p className="flex items-center gap-1.5">
            Yearly Billing{" "}
            <span className="py-0.5 px-2 text-[12px] rounded-full bg-orange-200 text-orange-500">
              -25%
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col  p-6 items-center justify-center">
        <p className="flex  items-center gap-3 mb-2">
          {selectedPlan?.unlimited_websites ? <GreenTick /> : <RedX />}
          Unlimited Websites
        </p>
        <p className="flex items-center gap-3 mb-2">
          {selectedPlan?.ownership ? <GreenTick /> : <RedX />}100% Data
          Ownership
        </p>
        <p className="flex items-center gap-3 mb-2">
          {selectedPlan?.email_reports ? <GreenTick /> : <RedX />}Email Reports
        </p>
        <Link
          href="/"
          className="rounded-full w-2/3 text-center py-3 mt-6 bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-900 ease-in-out duration-300"
        >
          Start My Trial
        </Link>
      </div>
    </div>
  );
}

export default Plans;
