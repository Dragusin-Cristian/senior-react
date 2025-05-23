import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper
        test={"Some test prop here"}
        user={{ name: "Criss", age: 23, country: "Romania", books: [] }}
      />
    </>
  );
}

export default App;
