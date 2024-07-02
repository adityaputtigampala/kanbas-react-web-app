import React from "react";
import HelloRedux from "./HelloRedux";
import HelloReducer from "./HelloRedux/helloReducer";
import CounterRedux from "./CounterRedux";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>


    </div>
  );
};
