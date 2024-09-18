import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./index.css";

function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index === rating ? 0 : index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handelMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handelMouseLeave(index)}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}

export default StarRating;
