import { useEffect, useState } from "react";

const FetchingData = () => {
  const [users, setUser] = useState([]);
  const [pending, setPending] = useState(false);

  async function FetchUserData() {
    try {
      setPending(true);
      const result = await fetch("https://dummyjson.com/users");
      const data = await result.json();

      if (data?.users) {
        setUser(data?.users);
        setPending(false);
      } else {
        setUser([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleFetchdata() {
    FetchUserData();
  }

  // useEffect(() => {
  //   FetchUserData();
  // }, []);

  if (pending) return <h1>Loading The data.. plz wait</h1>;

  return (
    <div>
      <h1>All User List</h1>
      <button onClick={handleFetchdata}>Show Users data</button>
      {users && users.length > 0 ? (
        users.map((user) => (
          <li key={user.id}>
            <p>
              {" "}
              {user.firstName} {user?.lastName}
            </p>
            <p>{user?.phone}</p>
            <p>{user?.email}</p>
          </li>
        ))
      ) : (
        <h1>Data Not Found</h1>
      )}{" "}
    </div>
  );
};

export default FetchingData;
