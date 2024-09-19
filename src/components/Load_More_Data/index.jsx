import { useRef, useState, useEffect } from "react";
import "./styles.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errMessage, setErrMessage] = useState(null);
  const [scrTop, setScrTop] = useState(0);

  const myRef = useRef(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setErrMessage(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  // 产品更新后，增加滚动监听事件，记录滚动位置
  useEffect(() => {
    if (myRef.current) {
      const handleScroll = () => {
        setScrTop(myRef.current.scrollTop);
      };
      myRef.current.addEventListener("scroll", handleScroll);

      myRef.current.scrollTop = scrTop;
      return () => myRef.current.removeEventListener("scroll", handleScroll);
    }
  }, [products]);

  //   不需要 滚动位置的改变并不需要设置ref中的值
  // 产品更新后才需要上一次的滚动值
  // 滚动位置状态更新后，再恢复DOM中的滚动位置
  //   useEffect(() => {
  //     if (myRef.current) {
  //       myRef.current.scrollTop = scrTop;
  //       console.log("scrTop", scrTop);
  //     }
  //   }, [products]);

  if (loading) {
    return <div>Loading... Please Wait</div>;
  }

  if (errMessage) {
    return <div>Errors occurred, {errMessage}</div>;
  }

  return (
    <div className="load__container">
      <div className="imgs__box" ref={myRef}>
        {products.map((product) => {
          return (
            <div key={product.id} className="img__container">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>

      <button
        disabled={products.length >= 100}
        className="loadData_btn"
        onClick={() => setCount(count + 1)}
      >
        Load more data
      </button>
      <div>
        {products.length >= 100 ? <p>100 products have been loaded.</p> : null}
      </div>
    </div>
  );
}

export default LoadMoreData;
