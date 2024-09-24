const featureFlags = {
  lightAndDarkMode: true,
  ticTacToe: true,
  treeView: true,
  customTabs: true,
  accordian: true,
};

function FeatureFlagsCall() {
  return new Promise((resolve, reject) => {
    if (featureFlags) {
      setTimeout(resolve(featureFlags), 500);
    } else {
      reject("Some errors occurred");
    }
  });
}

export default FeatureFlagsCall;
