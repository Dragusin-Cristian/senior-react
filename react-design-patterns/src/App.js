import CurrentUserLoader from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";
import UserLoader from "./components/user-loader";
import ResourceLoader from "./components/resource-loader";
import { BookInfo } from "./components/book-info";
import DataSource from "./components/data-source";
import axios from "axios";
import DataSourceWithRender from "./components/data-source-with-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      {/* ********** Specific User Loader ********** */}
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}

      {/* ********** Generic Resource Loader ********** */}
      {/* <ResourceLoader resourceUrl="/users/2" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/books/2" resourceName="book">
        <BookInfo />
      </ResourceLoader> */}

      {/* ********** Generic Data Source ********** */}
      {/* <DataSource
        getData={getDataFromServer.bind(this, "/users/3")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource> */}

      {/* ********** Generic Data Source with Render ********** */}
      <DataSourceWithRender
        getData={getDataFromServer.bind(this, "/users/3")}
        resourceName="user"
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>

      <DataSource
        getData={getDataFromLocalStorage.bind(this, "test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
