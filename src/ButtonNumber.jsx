function DEL(value) {
  if (value.length === 1) return "0";
  const currentValue = value.slice(0, value.length - 1);
  return currentValue;
}

function operator(currentValue, newValue, SYMBOLS) {
  if (SYMBOLS.includes(currentValue[currentValue.length - 1]))
    return currentValue;
  if (newValue === "x") return currentValue + "*";
  return currentValue + newValue;
}

function operatorSame(currentValue, SYMBOLS) {
  try {
    let result = "0";
    if (SYMBOLS.includes(currentValue[currentValue.length - 1])) {
      result = parseFloat(
        Number(eval(currentValue.slice(0, currentValue.length - 1))).toFixed(3)
      );
      return result;
    }
    result = parseFloat(Number(eval(currentValue)).toFixed(3));
    return result.toString();
  } catch (error) {
    return "0";
  }
}

export const ButtonNumber = ({
  value = "0",
  colorButton = "bg-white-200",
  textValue = "text-blue-400",
  colSpand = "col-span-1",
  shadowColor = "border-M1-shadow-1",
  setValueCalculator,
  valueCalculator,
  sizeSM = "text-3xl",
  sizeMD = "md:text-4xl",
}) => {
  const handleClick = () => {
    const SYMBOLS = ["x", "+", "-", "/", "*"];
    if (value === "DEL") {
      setValueCalculator(DEL(valueCalculator));
    } else if (value === "RESET") {
      setValueCalculator("0");
    } else if (SYMBOLS.includes(value)) {
      setValueCalculator(operator(valueCalculator, value, SYMBOLS));
    } else if (value === "=") {
      setValueCalculator(operatorSame(valueCalculator, SYMBOLS));
    } else {
      if (valueCalculator.length === 1 && valueCalculator === "0") {
        setValueCalculator(value);
      } else {
        setValueCalculator(valueCalculator + value);
      }
    }
  };

  return (
    <button
      className={`${colorButton} w-full ${textValue} h-full ${colSpand} hover:brightness-125 border-b-4 ${shadowColor} flex justify-center pt-1 items-center rounded-md shadow-md shadow-outline`}
      onClick={handleClick}
    >
      <h1 className={`font-league-spartan ${sizeSM} ${sizeMD}`}>{value}</h1>
    </button>
  );
};
