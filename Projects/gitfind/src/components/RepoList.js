const RepoList = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <ul>
        {data.map((singleRepo, idx) => {
          return (
            <li key={idx}>
              <a href={singleRepo.html_url} target="_blank">
                {singleRepo.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default RepoList;