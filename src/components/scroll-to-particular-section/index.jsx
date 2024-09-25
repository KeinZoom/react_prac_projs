import { useRef } from "react";

function ScrollToParticularSection() {
  const myRef = useRef();

  const elementsInfo = [
    {
      label: "first-card",
      style: {
        backgroundColor: "red",
        width: "100%",
        height: "400px",
      },
    },
    {
      label: "second-card",
      style: {
        backgroundColor: "blue",
        width: "100%",
        height: "400px",
      },
    },
    {
      label: "third-card",
      style: {
        backgroundColor: "green",
        width: "100%",
        height: "400px",
      },
    },
    {
      label: "fourth-card",
      style: {
        backgroundColor: "yellow",
        width: "100%",
        height: "400px",
      },
    },
    {
      label: "fifth-card",
      style: {
        backgroundColor: "orange",
        width: "100%",
        height: "400px",
      },
    },
  ];

  function handleClick() {
    console.log(myRef.current.getBoundingClientRect());
    const pos = myRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: `${pos}`,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>scroll to particular section</h1>
      <button onClick={handleClick}>Scroll to particular section</button>
      <div>
        {elementsInfo.map((element, index) => {
          return (
            <div style={element.style} ref={index === 3 ? myRef : null}>
              {element.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollToParticularSection;
