import React, { useState, useEffect } from "react";

const fetchURL = "https://jsonplaceholder.typicode.com/users";
const FetchApi = () => {
  const [data, setData] = useState([]);
  //   const getData = () => {

  //     console.log(res); //Just in case the response is not JSON
  //   };

  useEffect(() => {
    fetch(`${fetchURL}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  const renderTable = () => {
    return data.map((emp) => {
      return (
        <tr key={emp.id}>
          <td>{emp.name}</td>
          <td>{emp.username}</td>
          <td>{emp.email}</td>
          <td>{emp.phone}</td>
          <td>{emp.company.name}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <h1 id='title'>API Table</h1>
      <table id='users'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Compnay Name</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </>
  );
};

export default FetchApi;
