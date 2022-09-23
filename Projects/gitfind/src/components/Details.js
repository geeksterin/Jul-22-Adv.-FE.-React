const Detail = ({data}) => {
  return (
    <div className="card detail">
      <img src={data.avatar_url} alt="Profile" />
      <h3>{data.name}</h3>
      <h3>{data.login}</h3>
      <p>{data.created_at}</p>
      <button>{data.public_repos}</button>
      <button>{data.followers}</button>
      <button>{data.following}</button>
    </div>
  )
}

export default Detail;