const RepoList = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <ol>
        {data.map((singleRepo, idx) => {
          return (
            <li key={idx}>
              <a href={singleRepo.html_url} target="_blank">
                {singleRepo.name}
              </a>
            </li>
          );
        })}
      </ol>
      <button>Load More</button>
    </div>
  )
}

export default RepoList;