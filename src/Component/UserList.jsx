import React, { useEffect, useState } from "react";

export default function UserList() {
  const [user, setUser] = useState([]);
  const [cerca, setCerca] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  const cercaUtenti = user.filter(
    (u) => u.name && u.name.toLowerCase().includes(cerca.toLowerCase())
  );

  return (
    <div>
      <input
        className="border "
        type="text"
        value={cerca}
        onChange={(e) => setCerca(e.target.value)}
      />
      <ul>
        {cercaUtenti.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
