import React, { useEffect, useState, useRef } from "react";

function DemoComponent() {
  const [count, setCount] = useState(0);

  const myRef = useRef(null);

  console.log(
    "Component myRef: myRef is" + (myRef !== null ? myRef.current : "no ele")
  );
  // useEffect Hook
  useEffect(() => {
    console.log("useEffect: Component rendered or count changed");
    console.log("2Component myRef: myRef is" + (myRef ? myRef : "no ele"));
    // Microtask: Promise
    Promise.resolve().then(() => {
      console.log("Promise.then: Executed after useEffect");
    });

    // Cleanup function for useEffect
    return () => {
      console.log("Cleanup: Effect cleanup");
    };
  }, [count]);

  console.log("Component render: Count is", count);

  return (
    <div>
      <p>Count: {count}</p>
      <button ref={myRef} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default DemoComponent;
