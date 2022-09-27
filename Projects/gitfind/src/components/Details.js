import moment from 'moment';

const Detail = ({data, changeVisibleComponent, visibleComponent}) => {

  return (
    <div className="card detail">
      <img src={data.avatar_url} alt="Profile" className="section-left" />
      
      <div className="section-right">
        <h2>{data.name}</h2>
        <h3><a href={data.html_url} target="_blank" rel="noreferrer">
          @{data.login}
        </a></h3>
        <p>Member since {moment(data.created_at).fromNow()}.</p>
      </div>
      
      <div className="buttons">
        <button onClick={_ => changeVisibleComponent(1)} className={visibleComponent === 1 ? "active" : ""}>
          {data.followers}
          <span>Followers</span>  
        </button>
        <button onClick={_ => changeVisibleComponent(2)} className={visibleComponent === 2 ? "active" : ""}>
          {data.public_repos}
          <span>Repos</span>  
        </button>
        <button onClick={_ => changeVisibleComponent(3)} className={visibleComponent === 3 ? "active" : ""}>
          {data.following}
          <span>Following</span>
        </button>
      </div>
    </div>
  )
}

export default Detail;