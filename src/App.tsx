import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.scss";
import AppRoutes from "./routes";
import UserContextProvider from "./providers/user";

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserContextProvider>
  );
}

export default App;
