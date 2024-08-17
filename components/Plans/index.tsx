"use client";

import React, { useState } from "react";
// import RangeInput from "../Inputs/RangeInput";
import Toggle from "../Inputs/Toggle";
import data from "@/constants/PlansData.json";

function Plans() {
  const [monthly, setMonthly] = useState(true);
  const [selectedPageViews, setSelectedPageViews] = useState(0);
  console.log(data);
  return (
    <div className="m-auto">
      <Toggle
        className="mb-5"
        name="monthly"
        value={monthly}
        valueSetter={setMonthly}
      />

      {selectedPageViews}
    </div>
  );
}

export default Plans;
