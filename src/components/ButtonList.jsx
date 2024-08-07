import Button from "./Button";

const buttonList = [
  "All",
  "Live",
  "Songs",
  "Recent",
  "Cricket",
  "News",
  "Cooking",
  "Computer",
  "Gaza",
  "JavaScript",
  "Mixes",
  "History",
  "Thrillers",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((values, index) => (
        <Button value={values} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
