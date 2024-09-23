import Tabs from "./tabs";

function RandomComponent() {
  return <div>this is random content</div>;
}

function CustomTab() {
  function indexChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  const tabsContents = [
    {
      id: "0",
      label: "tab0",
      content: "this is tab 0",
    },
    {
      id: "1",
      label: "tab1",
      content: "this is tab 1",
    },
    {
      id: "2",
      label: "tab2",
      content: <RandomComponent />,
    },
  ];

  return <Tabs tabsContents={tabsContents} onChange={indexChange} />;
}

export default CustomTab;
