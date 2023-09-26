import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios";

interface Company{
  name:string
  catchphrase:string;
  bs:string;
}


interface User {
  id: number;
  name: string;
  email: string;
  company:Company;
}

function List() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

    useEffect(() => {
      axios
        .get<User[]>("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch(err => {
         setError(err.message);
    });
    }, []);
  
    return (
      <>
          {error && <p className="text-danger">{error}</p>}
          <div>
            {users.map((user) => (
              <Card>
                <Card.Body>
                <Card.Title key={user.id}>{user.name}</Card.Title>
                <Card.Subtitle key={user.id}>{user.email}</Card.Subtitle>
                <Card.Text key={user.id}>{user.company.name}</Card.Text>
                </Card.Body>
              </Card>
          ))}
        </div>
      </>
    );
  }
  
  export default List;