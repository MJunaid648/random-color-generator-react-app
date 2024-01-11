import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function createRandomHexColor() {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function createRandomRGBColor() {
    setColor(
      `rgb(${randomColorUtility(255)},${randomColorUtility(
        255
      )},${randomColorUtility(255)})`
    );
  }
  useEffect(() => {
    typeOfColor === "rgb" ? createRandomRGBColor() : createRandomHexColor();
  }, [typeOfColor]);
  return (
    <div
      className="main"
      style={{
        background: color,
      }}
    >
      <div className="btns">
        <button onClick={() => settypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => settypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={() =>
            typeOfColor === "hex"
              ? createRandomHexColor()
              : createRandomRGBColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <h3>{typeOfColor === "hex" ? "Hex " : "RGB "}color</h3>
      <div className="color">{color}</div>
    </div>
  );
}

export default App;
