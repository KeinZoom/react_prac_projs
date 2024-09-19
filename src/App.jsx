import Accordian from "./components/Accordian/Accordian";
import Color from "./components/Color/Color";
import StarRating from "./components/Star_rating";
import ImgSlider from "./components/Img_slider";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <Color /> */}
      {/* <StarRating noOfStars={5} /> */}
      <ImgSlider url="https://picsum.photos/v2/list" page={1} limit={10} />
    </div>
  );
}

export default App;
