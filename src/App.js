import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";
import { AppProvider } from "./contexts/provider";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <AppRouter />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
