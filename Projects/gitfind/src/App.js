import Detail from "./components/Details";
import Footer from "./components/Footer";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
import { github } from './utils';
import { useEffect, useState } from 'react';
import FollowersList from "./components/FollowersList";
import FollowingList from "./components/FollowingList";

function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");
  const [isSuccessful, setSuccessful] = useState(true);
  const [visibleComponent, setVisibleComponent] = useState(2);
  // 1 -> Follower List | 2 -> Repo List | 3 -> Following List

  useEffect(_ => {
    setDetail({});
    setSuccessful(true);
    if(username === "") {
      return;
    }
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
    if(username === "") {
      return;
    }
    (async _ => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setFollowerList([]);
    if(username === "") {
      return;
    }
    (async _=> {
      const response = await github.get(`/${username}/followers`);
      setFollowerList(response.data);
    })();
  }, [username]);

  useEffect(_ => {
    setFollowingList([]);
    if(username === "") {
      return;
    }
    (async _ => {
      const response = await github.get(`/${username}/following`);
      console.log(response.data);
      setFollowingList(response.data);
    })();
  }, [username])

  const searchedUsername = keyword => {
    setUsername(keyword);
  }

  const showLoadMore = _ => {
    if(visibleComponent === 1) {
      if(followerList.length === detail.followers) {
        return false;
      } else {
        return true;
      }
    } else if(visibleComponent === 2) {
      if(repoList.length === detail.public_repos) {
        return false;
      } else {
        return true;
      }
    } else {
      if(followingList.length === detail.following) {
        return false;
      } else {
        return true;
      }
    }
  }

  const loadMoreData = async _ => {
    if(visibleComponent === 1) {
      const currentPages = Math.ceil(followerList.length / 30);
      const nextPage = currentPages + 1;
      const response = await github.get(`/${username}/followers?page=${nextPage}`);
      const list = response.data;

      setFollowerList(currentList => {
        const newList = [...currentList, ...list];
        return newList;
      });
      //Fetch more from follower list
    } else if(visibleComponent === 2) {
      const currentPages = Math.ceil(repoList.length / 30);
      const nextPage = currentPages + 1;

      const response = await github.get(`/${username}/repos?page=${nextPage}`);
      const list = response.data;

      setRepoList(currentList => {
        const newList = [...currentList, ...list];
        return newList;
      });
      //Fetch more from repo list
    } else {
      const currentPages = Math.ceil(followingList.length / 30);
      const nextPage = currentPages + 1;

      const response = await github.get(`/${username}/following?page=${nextPage}`);
      const list = response.data;

      setFollowingList(currentList => {
        const newList = [...currentList, ...list];
        return newList;
      });
      //Fetch more from followng list
    }
  }

  return (
    <main>
      <Search searchedUsername={searchedUsername} isSuccessful={isSuccessful} />
      {detail.id === undefined ? (
        false
      ) : (
        <>
          <Detail data={detail} changeVisibleComponent={setVisibleComponent} visibleComponent={visibleComponent} />
          {visibleComponent === 1 ? (
            <FollowersList data={followerList} />
          ) : (
            visibleComponent === 2 ? (
              <RepoList data={repoList} />
            ) : (
              <FollowingList data={followingList} />
            )
          )}
          {showLoadMore() === true ? (
            <div className="card load-more">
              <button onClick={loadMoreData}>Load More</button>
            </div>
          ) : (false)}
          
        </>
      )}
      
      <Footer />
    </main>
  );
}

export default App;
