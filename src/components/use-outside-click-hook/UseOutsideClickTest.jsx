import { useRef, useState } from "react";
import useOutsideClick from ".";

function UseOutsideClickTest() {
  const [isContentShown, setIsContentShown] = useState(false);
  const myRef = useRef();
  useOutsideClick(myRef, () => setIsContentShown(false));

  return (
    <div>
      {isContentShown ? (
        <div ref={myRef}>
          <h1>Use outside Click hook</h1>
          <p>click the area outside the content to close it</p>
        </div>
      ) : (
        <button onClick={() => setIsContentShown(true)}>Click to expand</button>
      )}
    </div>
  );
}

export default UseOutsideClickTest;
