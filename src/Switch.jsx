// Props =>
// options -> This is a prop, with the multiples options that can choose the user
// value -> This is a prop, with the current value choosed by user
// onChange -> This is a prop, with the function that allow change the theme to the user

export const Switch = ({
  theme,
  handleCircleClick,
  backGround = "bg-M1-blue-bg-2",
}) => {
  return (
    <div
      className={` w-16 h-5 py-3 flex items-center rounded-full cursor-pointer ${backGround}`}
      onClick={handleCircleClick}
    >
      <div
        className={` left-0 w-5 h-5 rounded-full transition-transform duration-200 ${theme}`}
      ></div>
    </div>
  );
};
