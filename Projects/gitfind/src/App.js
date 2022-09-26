import Detail from "./components/Details";
import Footer from "./components/Footer";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
import { github } from './utils';
import { useEffect, useState } from 'react';

function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [username, setUsername] = useState("");
  const [isSuccessful, setSuccessful] = useState(true);

  useEffect(_ => {
    setDetail({});
    setSuccessful(true);
    (async _ => {
      try {
        const response = await github.get(`/${username}`);
        setDetail(response.data);
      } catch(e) {
        setSuccessful(false);
      }
    })();
  }, [username]);

  useEffect(_ => {
    setRepoList([]);
    (async _ => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setFollowerList([]);
    (async _=> {
      const response = await github.get(`/${username}/followers`);
      setFollowerList(response.data);
    })();
  }, [username]);

  const searchedUsername = keyword => {
    setUsername(keyword);
  }

  return (
    <main>
      <Search searchedUsername={searchedUsername} isSuccessful={isSuccessful} />
      {detail.id === undefined ? (
        false
      ) : (
        <>
          <Detail data={detail} />
          <RepoList data={repoList} />
        </>
      )}
      
      <Footer />
    </main>
  );
}

export default App;
