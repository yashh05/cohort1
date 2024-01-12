import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const asyncFetchData = async () => {
      const response=await fetch("https://fakerapi.it/api/v1/persons")
      const result = await response.json();
      setData(result.data)
    };

    asyncFetchData();

   const fetchInterval= setInterval(asyncFetchData, 10000);
   return ()=>clearInterval(fetchInterval);
  }, []);

  return (
    <>
      {data.map((person) => {
        return (
          <Card
            key={person.id}
            firstName={person.firstname}
            lastName={person.lastname}
            email={person.email}
          />
        );
      })}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ firstName, lastName, email }) {
  return (
    <div>
      <h1>
        Name-{firstName} {lastName}
      </h1>
      <h4>email- {email}</h4>
    </div>
  );
}

export default App;
