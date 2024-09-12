import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { buttonList } from "../utils/constant";

const ButtonList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttons = containerRef.current.querySelectorAll("button");
        let totalWidth = 0;
        let count = 0;

        buttons.forEach((button) => {
          totalWidth += button.offsetWidth;
          if (totalWidth <= containerWidth) {
            count++;
          }
        });
        setVisibleCount(count);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const endIndex = startIndex + visibleCount;
  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };
  const handleNext = () => {
    if (endIndex < buttonList.length) setStartIndex(startIndex + 1);
  };

  return (
    <div
      className="flex fixed  py-4 items-center bg-white w-full gap-x-2"
      // ref={containerRef}
    >
      {/* {startIndex > 0 && (
        <button onClick={handlePrev} className="bg-gray-100 p-1 rounded-full">
          <FiChevronLeft className="w-6 h-6  " />
        </button>
      )} */}
      <div className="flex  overflow-hidden ">
        {/* {buttonList.slice(startIndex, endIndex).map((values, index) => ( */}
        {buttonList.map((values, index) => (
          <Button value={values} key={index} />
        ))}
      </div>
      {/* {endIndex < buttonList.length && (
        <button onClick={handleNext} className="bg-gray-100 p-1 rounded-full">
          <FiChevronRight className="w-6 h-6" />
        </button>
      )}  */}
    </div>
  );
};

export default ButtonList;
