import { includeUser } from "./components/include-user";
import { logProps } from "./components/log-props";
import UserForm from "./components/user-form";
import { UserInfo } from "./components/user-info";

// const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      {/* <UserInfoWrapper
        test={"Some test prop here"}
        user={{ name: "Criss", age: 23, country: "Romania", books: [] }}
      /> */}

      {/* <UserInfoWithLoader /> */}

      <UserForm />
    </>
  );
}

export default App;
