# NOTES FOR EACH SECTION

## Container Components Pattern (Smart components & Dumb components)

- mainly used for separation of concerns: 
    - the smart component fetches data and executes logic
    - the dumb component only displays the data

[Most known example]
```jsx
// Container Component
function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }, []);

  return <UserList users={users} />;
}

// Presentational Component
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

More sophisticated examples in the codebase.