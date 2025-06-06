import SearchMeal from "./components/search-meals";
import Users from "./components/users";
import FetchTopQuotes from "./components/top-quotes";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient()


function App() {

  return (
    <>
      {/* <Users /> */}
      {/* <SearchMeal /> */}
      <QueryClientProvider client={queryClient}>
        <FetchTopQuotes />
      </QueryClientProvider>
    </>
  );
}

export default App;
