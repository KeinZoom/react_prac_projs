import Accordian from "./components/Accordian/Accordian";
import Color from "./components/Color/Color";
import StarRating from "./components/Star_rating";
import ImgSlider from "./components/Img_slider";
import LoadMoreData from "./components/Load_More_Data";
import DemoComponent from "./components/Load_More_Data/demoComponent";
import TreeView from "./components/TreeView";
import menus from "./components/TreeView/data";
import GenerateQR from "./components/QR-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import CustomTab from "./components/custom-tabs/test-tab";
import CustomModal from "./components/custom-modal/test-modal";
import GithubFinder from "./components/Github-profile-finder/GithubFinder";
import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";
import Tictactoe from "./components/TicTacToe/Tictactoe";
import FeatureFlags from "./components/FeatureFlags";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <Color /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImgSlider url="https://picsum.photos/v2/list" page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <DemoComponent /> */}
      {/* <TreeView MenuData={menus} /> */}
      {/* <GenerateQR /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products"} /> */}
      {/* <CustomTab /> */}
      {/* <CustomModal /> */}
      {/* <GithubFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <Tictactoe /> */}
      <FeatureFlags />
    </div>
  );
}

export default App;
