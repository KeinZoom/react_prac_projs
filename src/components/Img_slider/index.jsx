import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./styles.css";

function ImgSlider({ url, page = 1, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [curSlider, setCurSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages([...data]);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function prevHandler() {
    setCurSlider(curSlider === 0 ? images.length - 1 : curSlider - 1);
  }

  function nextHandler() {
    setCurSlider(curSlider === images.length - 1 ? 0 : curSlider + 1);
  }
  console.log(images);

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  // useEffect 闭包机制
  // 不填加依赖项，即[]时 保存当前的UI和环境状态
  // Effect仅生效一次，在组件挂载时，后续不再生效；卸载前再进行清理
  // 添加依赖项时, 即[curSlider]
  // 挂载时生效；依赖项每次更新时才生效，同时会先清理上次的Effect影响；
  useEffect(() => {
    const interval = setInterval(() => {
      nextHandler();
    }, 3000);

    return () => clearInterval(interval);
  }, [curSlider]);

  if (loading) {
    return <div>resource loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred. {errorMsg}</div>;
  }

  return (
    <div className="slider__container">
      <BsArrowLeftCircleFill
        className="arrow arrow__left"
        onClick={() => prevHandler()}
      />
      {images.map((imageItem, index) => {
        return (
          <div
            className={
              curSlider === index
                ? "img_container visible"
                : "img_container invisible"
            }
            key={index}
          >
            <img src={imageItem.download_url} alt={imageItem.url} />
          </div>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow__right"
        onClick={() => nextHandler()}
      />
      <span className="indicator__container">
        {images.map((_, index) => {
          return (
            <div
              className={
                curSlider === index
                  ? "img_indicator"
                  : "img_indicator inactive_indicator"
              }
              key={index}
              onClick={() => setCurSlider(index)}
            />
          );
        })}
      </span>
    </div>
  );
}

export default ImgSlider;
