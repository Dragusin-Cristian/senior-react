import SearchMeal from "./components/search-meals";
import Users from "./components/users";
import FetchTopQuotes from "./components/top-quotes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import UpdateQuotes from "./components/update-quote";


const queryClient = new QueryClient()


function App() {

  return (
    <>
      {/* <Users /> */}
      {/* <SearchMeal /> */}
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UpdateQuotes />
        <FetchTopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
