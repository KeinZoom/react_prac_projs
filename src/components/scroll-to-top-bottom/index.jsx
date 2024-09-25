import { useRef } from "react";
import useFetch from "../use-fetch-hook";

function ScrollToTopBottom() {
  const [data, pending, error] = useFetch(
    "https://dummyjson.com/products/?limit=100",
    {}
  );
  const bottomRef = useRef(null);

  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleToBottom() {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  if (error) {
    return <div>{error}, error occurred.</div>;
  }

  if (pending) {
    return <div>Loading, please wait ...</div>;
  }

  return (
    <div>
      <h1>Scroll to top and bottom</h1>
      <button onClick={handleToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <li key={productItem.id}>{productItem.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ScrollToTopBottom;
