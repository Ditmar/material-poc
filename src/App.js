import Theme from './Theme/Theme';
import NavMenu from './ui/components/navMenu/NavMenu';
import { QueryClient, QueryClientProvider } from 'react-query';
import DataTable from './ui/components/table/indx';
function App() {
  const queryClient = new QueryClient();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        {/* <NavMenu /> */}
        <DataTable/>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
