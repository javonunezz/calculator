import { useState } from "react";
import "./index.css";
import { ButtonNumber } from "./ButtonNumber";
import { Switch } from "./Switch";

function App() {
  const themesM1 = {
    id: 1,
    value: "bg-gray-200",
    bg_1: "bg-M1-blue-bg",
    bg_2: "bg-M1-blue-bg-2",
    bg_3: "bg-M1-blue-bg-3",
    text_color: "text-M1-white-text",
    text_color_2: "text-M1-black-text-2",
    text_color_3: "text-M1-white-text",
    text_color_4: "text-M1-white-text",
    button_1: "bg-M1-white-button",
    button_2: "bg-M1-blue-button-2",
    button_3: "bg-M1-red-button-3",
    shadow1: "border-M1-shadow-1",
    shadow2: "border-M1-shadow-2",
    shadow3: "border-M1-shadow-3",
  };
  const themesM2 = {
    id: 2,
    value: "bg-M2-purple-button-3 transform translate-x-5",
    bg_1: "bg-M2-purple-bg",
    bg_2: "bg-M2-purple-bg-2",
    bg_3: "bg-M2-purple-bg-3",
    text_color: "text-M2-yellow-text",
    text_color_2: "text-M2-yellow-text",
    text_color_3: "text-M1-white-text",
    text_color_4: "text-M1-black-text-2",
    button_1: "bg-M2-purple-button",
    button_2: "bg-M2-purple-button-2",
    button_3: "bg-M2-purple-button-3",
    shadow1: "border-M2-shadow-1",
    shadow2: "border-M2-shadow-2",
    shadow3: "border-M2-shadow-3",
  };

  const themesM3 = {
    id: 3,
    value: "bg-M3-white-button-3 transform translate-x-11",
    bg_1: "bg-M3-white-bg",
    bg_2: "bg-M3-white-bg-2",
    bg_3: "bg-M3-white-bg-3",
    text_color: "text-M3-gray-text",
    text_color_2: "text-M3-gray-text",
    text_color_3: "text-M1-white-text",
    text_color_4: "text-M1-white-text",
    button_1: "bg-M3-white-button",
    button_2: "bg-M3-white-button-2",
    button_3: "bg-M3-white-button-3",
    shadow1: "border-M3-shadow-1",
    shadow2: "border-M3-shadow-2",
    shadow3: "border-M3-shadow-3",
  };

  const [theme, setTheme] = useState(themesM1);

  function handleCircleClick() {
    if (theme.id == themesM1.id) {
      setTheme(themesM2);
    } else if (theme.id == themesM2.id) {
      setTheme(themesM3);
    } else {
      setTheme(themesM1);
    }
  }

  const [valueCalculator, setValueCalculator] = useState("0");

  return (
    <>
      <div
        className={`${theme.bg_1} w-screen h-screen flex flex-col items-center justify-center`}
      >
        <div
          className={`flex flex-row justify-between w-5/6 ${theme.text_color} item relative`}
        >
          <h1 className="text-3xl font-league-spartan">calc</h1>
          <div className="flex flex-row">
            <h2 className="absolute bottom-1 right-20 text-xs font-league-spartan">
              THEME
            </h2>
            <div>
              <div className="flex flex-row justify-around w-16 font-league-spartan">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <Switch
                theme={theme.value}
                handleCircleClick={handleCircleClick}
                backGround={theme.bg_2}
              />
            </div>
          </div>
        </div>
        <div
          className={`${theme.bg_2} w-5/6 h-24 mt-6 rounded-xl truncate font-league-spartan px-5 pt-5 pb-4 text-4xl flex items-center justify-end ${theme.text_color} font-semibold`}
        >
          {valueCalculator ? valueCalculator : "Syntax Error"}
        </div>
        <div
          className={`${theme.bg_3} w-5/6 mt-6 h-3/5 gap-3 rounded-xl inline-grid grid-cols-4 p-4`}
        >
          <ButtonNumber
            value="7"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="8"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="9"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="DEL"
            colorButton={theme.button_2}
            textValue={theme.text_color_3}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow2}
            sizeSM="text-xl"
            sizeMD="md:text-4xl"
          />
          <ButtonNumber
            value="4"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="5"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="6"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="+"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="1"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="2"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="3"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="-"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="."
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="0"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="/"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="x"
            colorButton={theme.button_1}
            textValue={theme.text_color_2}
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow1}
          />
          <ButtonNumber
            value="RESET"
            colorButton={theme.button_2}
            textValue={theme.text_color_3}
            widthButton="w-32"
            colSpand="col-span-2"
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow2}
            sizeSM="text-xl"
            sizeMD="md:text-4xl"
          />
          <ButtonNumber
            value="="
            colorButton={theme.button_3}
            textValue={theme.text_color_4}
            widthButton="w-32"
            colSpand="col-span-2"
            setValueCalculator={setValueCalculator}
            valueCalculator={valueCalculator}
            shadowColor={theme.shadow3}
          />
        </div>
      </div>
    </>
  );
}

export default App;
