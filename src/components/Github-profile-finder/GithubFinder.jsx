import { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";

function GithubFinder() {
  const [inputBuffer, setInputBuffer] = useState("");
  const [userProfileKey, setUserProfileKey] = useState("Keinzoom");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubProfile(profileKey) {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${profileKey}`);
    const user = await response.json();
    if (user) {
      setUserInfo(user);
      setLoading(false);
    }
  }

  function handleBtnClick() {
    setUserProfileKey(inputBuffer);
    setInputBuffer("");
  }

  useEffect(() => {
    fetchGithubProfile(userProfileKey);
  }, [userProfileKey]);

  if (loading) {
    return (
      <div className="loading">
        <p>Data is loading, please wait...</p>
      </div>
    );
  }

  return (
    <div className="github__container">
      <div className="input__wrapper">
        <input
          type="text"
          name="profileUser"
          placeholder="enter the name..."
          onChange={(e) => setInputBuffer(e.target.value)}
          value={inputBuffer}
        />
        <button onClick={handleBtnClick}>Search</button>
      </div>
      {userInfo && <User user={userInfo} />}
    </div>
  );
}

export default GithubFinder;
