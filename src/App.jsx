import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import UserPane from "./components/UserPane";
import Expand from "./components/Expand";
import BackBtn from "./components/BackBtn";
import load from "./load.svg";

function App() {
  // Declaraions

  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(5);
  const [curUser, setCurUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [err, setErr] = useState("");

  // Functions
  const switcher = (e) => {
    setActive(!active);
    setCurUser(e.target.id);
  };

  const loadMore = () => {
    if (list < 100) {
      setList(list + 5);
    }
  };

  // Data Fetching
  const getApiData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setUserData(res.data);
    } catch (error) {
      setErr(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <NavBar current={curUser} data={userData} />
      {err !== "" && (
        <div className="flex justify-center p-5 items-center">
          <h1 className="text-3xl">{err}</h1>
        </div>
      )}
      {loading ? <img src={load} className="loader" alt="loading" /> : ""}
      {active ? (
        <>
          <BackBtn func={switcher} />
          <Expand current={curUser} data={userData} />
        </>
      ) : (
        <UserPane
          limit={list}
          more={loadMore}
          data={userData}
          func={switcher}
        />
      )}
    </>
  );
}

export default App;
