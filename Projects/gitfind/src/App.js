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

  useEffect(_ => {
    (async _ => {
      const response = await github.get("/aayusharyan");
      setDetail(response.data);
    })();
  }, []);

  useEffect(_ => {
    (async _ => {
      const response = await github.get('/aayusharyan/repos');
      setRepoList(response.data);
    })();
  }, []);

  useEffect(_ => {
    (async _=> {
      const response = await github.get('/aayusharyan/followers');
      setFollowerList(response.data);
    })();
  }, []);

  return (
    <main>
      <Search />
      <Detail data={detail} />
      <RepoList />
      <Footer />
    </main>
  );
}

export default App;
