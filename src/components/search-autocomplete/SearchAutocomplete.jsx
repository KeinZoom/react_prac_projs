import { useEffect, useState } from "react";

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  async function fecthAllUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((dataItem) => dataItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function handleChange(event) {
    const query = event.target.value;
    setSearchParams(query);
    if (query.length > 1) {
      const matchUsers =
        users && users.length > 0
          ? users.filter(
              (item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1
            )
          : [];
      setFilterUsers(matchUsers);
      setShowSuggestion(true);
    } else {
      setFilterUsers([]);
      setShowSuggestion(false);
    }
  }

  function handleItemClick(event) {
    if (event.target.innerText && event.target.innerText.length > 0) {
      setSearchParams(event.target.innerText);
      setFilterUsers([]);
      setShowSuggestion(false);
    }
  }

  useEffect(() => {
    fecthAllUsers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="autocomplete__container">
      {loading ? (
        <div>Loading data, please wait...</div>
      ) : (
        <input
          type="text"
          name="searchParams"
          onChange={handleChange}
          value={searchParams}
        />
      )}

      <ul className="autocompelete__suggestionList">
        {showSuggestion && filterUsers && filterUsers.length
          ? filterUsers.map((item, index) => {
              return (
                <li
                  key={index}
                  className="suggestion__item"
                  onClick={handleItemClick}
                >
                  {item}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default SearchAutocomplete;
