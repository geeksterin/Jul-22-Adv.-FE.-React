const Detail = ({data}) => {
  return (
    <div>
      <img src={data.avatar_url} alt="Profile" />
      <h3>{data.name}</h3>
      <h3>{data.login}</h3>
      <p>Created At</p>
      <button>Repo List</button>
      <button>Followers</button>
      <button>Following List</button>
    </div>
  )
}

export default Detail;