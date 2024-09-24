import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../light-dark-mode";
import Tictactoe from "../TicTacToe/Tictactoe";
import CustomTab from "../custom-tabs/test-tab";
import Accordian from "../Accordian/Accordian";
import TreeView from "../TreeView";

function FeatureFlags() {
  const { loading, enableFeatures } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "lightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "ticTacToe",
      component: <Tictactoe />,
    },
    {
      key: "treeView",
      component: <TreeView />,
    },
    {
      key: "customTabs",
      component: <CustomTab />,
    },
    {
      key: "accordian",
      component: <Accordian />,
    },
  ];

  if (loading) return <div>Loading data, please wait...</div>;

  return (
    <div>
      {componentsToRender.map((componentItem) =>
        enableFeatures[componentItem.key] ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
