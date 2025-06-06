import SearchMeal from "./components/search-meals";
import Users from "./components/users";
import FetchTopQuotes from "./components/top-quotes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import UpdateQuotes from "./components/update-quote";
import PaginatedQuotes from "./components/paginated-quotes";
import InfiniteScrollQuotes from "./components/infinite-scroll-quotes";


const queryClient = new QueryClient()


function App() {

  return (
    <>
      {/* <Users /> */}
      {/* <SearchMeal /> */}
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <InfiniteScrollQuotes />
        {/* <PaginatedQuotes /> */}
        {/* <UpdateQuotes />
        <FetchTopQuotes /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
