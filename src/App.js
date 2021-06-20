import React from "react";
// import "./styles.css";
// import { Button } from "./components/Button";
// import data from "./buttons_data.js";
// import "./app.css";
import Main from "./main.js";

export default function App() {
  // buttonClick('ABC')

  // var line = "";
  // var ans_tag = "";
  // const buttonClick = async (event) => {
  //   const btn = event.target.value;
  //   // console.log(btn);

  //   if (btn === "1") {
  //     line = line + "1";
  //   } else if (btn === "2") {
  //     line += "2";
  //   } else if (btn === "3") {
  //     line += "3";
  //   } else if (btn === "4") {
  //     line += "4";
  //   } else if (btn === "5") {
  //     line += "5";
  //   } else if (btn === "6") {
  //     line += "6";
  //   } else if (btn === "7") {
  //     line += "7";
  //   } else if (btn === "8") {
  //     line += "8";
  //   } else if (btn === "9") {
  //     line += "9";
  //   } else if (btn === "0") {
  //     line += "0";
  //   } else if (btn === "+") {
  //     line += "+";
  //   } else if (btn === "-") {
  //     line += "-";
  //   } else if (btn === "*") {
  //     line += "*";
  //   } else if (btn === "/") {
  //     line += "/";
  //   } else if (btn === ".") {
  //     line += ".";
  //   } else if (btn === "(") {
  //     line += "(";
  //   } else if (btn === ")") {
  //     line += ")";
  //   } else if (btn === "=") {
  //     if (line === "") {
  //       // document.getElementById("ans").innerHTML = ans_tag;
  //     } else {
  //       try {
  //         var ans = eval(line);
  //         console.log("Ans:", ans);
  //         // document.getElementById("ans").innerHTML = line + '=' + ans;
  //         ans_tag = line + "=" + ans;
  //         line = "";
  //       } catch (err) {
  //         console.log("Upps!!!:" + err);
  //         // document.getElementById("ans").innerHTML = 'Please enter valid data...';
  //         ans_tag = "Please enter valid data...";
  //       }
  //     }
  //   } else if (btn === "AC") {
  //     line = "";
  //     // document.getElementById("ans").innerHTML = "Answer";
  //   } else if (btn === "B") {
  //     line = line.slice(0, -1);
  //   }
  //   console.log(line);
  // };

  return (
    // <div className="App">
    //   <div className="calculator">
    //     <div className="display">
    //       <input
    //         type="text"
    //         name="values"
    //         id="values"
    //         placeholder="Example: 3+4"
    //       />
    //       <p className="ans" id="ans">
    //         {line}
    //       </p>
    //     </div>
    //     <div className="cal-button">
    //       {data.buttons.map((button) => (
    //         <Button
    //           buttonStyle={button.class}
    //           onClick={buttonClick}
    //           key={button._id}
    //           id={button._id}
    //           value={button.value}
    //         >
    //           {button.value}
    //         </Button>
    //       ))}
    //       {/* <Button>1</Button> */}
    //     </div>
    //   </div>
    // </div>
    <>
      <Main />
    </>
  );
}
