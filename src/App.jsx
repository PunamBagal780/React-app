import { useEffect, useState } from "react";

export default function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response); // Check the structure of the response
    setUsersData(response.users); // Directly set the array
  }

  useEffect(() => {
    console.log(usersData); // Log after state update
  }, [usersData]);

  return (
    <div>
      <h1>Fetch data from API</h1>
      {usersData.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
          <p>{user.lastName}</p>
          <p>{user.age}</p>
          <p>{user.gender}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}