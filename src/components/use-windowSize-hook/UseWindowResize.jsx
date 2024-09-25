import useWindowSize from ".";

function UseWindowResize() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </div>
  );
}

export default UseWindowResize;
