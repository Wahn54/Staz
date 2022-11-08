import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./components/api/Api";



function App() {
  return (
   <Router>
    <Switch>
      <Route path="/api"  component={Api} />
    </Switch>
   </Router>
  );
}

export default App;
