import Button from "./Button";
import { buttonList } from "../utils/constant";

const ButtonList = () => {
  return (
    <div className="flex fixed  py-4 items-center bg-white w-full gap-x-2 ">
      <div className="flex  overflow-hidden ">
        {buttonList.map((values, index) => (
          <Button value={values} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
