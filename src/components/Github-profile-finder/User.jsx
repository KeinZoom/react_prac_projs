import "./styles.css";

function User({ user }) {
  const {
    avatar_url,
    html_url,
    created_at,
    login,
    name,
    followers,
    following,
    public_repos,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user__container">
      <div className="user__avatar">
        <img src={avatar_url} alt="User Profile" />
      </div>
      <div className="user__profile">
        <div className="user__name">
          <a href={html_url}>{name || login}</a>
        </div>
        <div className="user__date">
          <p>{`Created at: ${createdDate.getDate()} ${createdDate.toLocaleString(
            "en-US",
            { month: "short" }
          )} ${createdDate.getFullYear()}`}</p>
        </div>
      </div>
      <div className="user__networking">
        <div className="user__repos">
          <p>repos: {public_repos}</p>
        </div>
        <div className="user__follower">
          <p>followers: {followers}</p>
        </div>
        <div className="user__following">
          <p>following: {following}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
