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
    switch (value) {
      case "DEL":
        setValueCalculator(
          valueCalculator.slice(1, valueCalculator.length - 1)
        );
        break;
      case "RESET":
        setValueCalculator("0");
        break;
      case "x":
        setValueCalculator(`${valueCalculator} * `);
        break;
      case "=":
        setValueCalculator(
          parseFloat(Number(eval(valueCalculator)).toFixed(3))
        );
        break;
      default:
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
