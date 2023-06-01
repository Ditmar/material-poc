import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <NavMenu />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
