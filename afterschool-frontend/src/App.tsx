
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import MainPage from "./pages/MainPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
   <MainPage/>
     <GlobalStyle/>
    </QueryClientProvider>
  );
}

export default App;
