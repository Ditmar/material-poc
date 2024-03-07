import Theme from './Theme/Theme';
import DataTable from './ui/components/Table';
import NavMenu from "./ui/components/navMenu/NavMenu";
import { QueryClient, QueryClientProvider } from 'react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        {/* <NavMenu /> */}
        <DataTable />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
