import React from "react";
import Navbar from "./Components/Navbar";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={100}
        color="199, 11, 111"
        outerAlpha={0.1}
        innerScale={0.1}
        outerScale={1}
        outerStyle={{
          border: '3px solid white'

        }}
        innerStyle={{
          // backgroundColor: 'pink'
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "li"
        ]}
      />
      <Navbar />
    </>
  );
}

export default App;
