import React, { useState, useEffect } from "react";

const GitHubUser = () => {
  const [login, setLogin] = useState("AlphaRosh");
  const [data, setData] = useState(null);
  //useEffect for refreshing on input change
  useEffect(() => {
    if (login.length > 1) {
      fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setData)
        .catch(console.error);
      console.log(data);
    } else {
      setData(null);
    }
  }, [login]);

  return (
    <>
      <h2>Please Enter the Github Handle </h2>
      <p>
        <input
          type='text'
          placeholder='GitHub Handle'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </p>
      {data != null && login.length > 1 ? (
        <div>
          <h2>{data.name}</h2>
          <h3>{data.login}</h3>
          <p>
            <img src={data.avatar_url} width='100px' />
          </p>
        </div>
      ) : null}
    </>
  );
};

export default GitHubUser;
