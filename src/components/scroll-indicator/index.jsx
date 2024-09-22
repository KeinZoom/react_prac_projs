import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?limit=100`);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleWindowScroll() {
    const howMuchScrolled =
      document.documentElement.scrollTop - document.body.scrollTop;
    const scorllHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollProgress((howMuchScrolled / scorllHeight) * 100);
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    console.log(products.length);
    window.addEventListener("scroll", handleWindowScroll);
  }, [products]);

  if (loading) {
    return <div>Loading Data! Please wait!</div>;
  }

  return (
    <div className="scrollbar__container">
      <div className="header__container">
        <h1>scroll bar indicator</h1>
        <div className="scrollbar__indicator">
          <div
            className="scrollbar__progress"
            style={{
              backgroundColor: "yellow",
              width: `${scrollProgress}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="products__container">
        {products && products.length
          ? products.map((productItem) => {
              return (
                <div className="product__item" key={productItem.id}>
                  {productItem.title}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
