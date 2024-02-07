import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import { QueryClient, QueryClientProvider } from "react-query";
import PaginationMenu from "./ui/components/paginationNav/paginationMenu";
function App() {
  const queryClient = new QueryClient();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        {/*<NavMenu />*/}
        <PaginationMenu/>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;