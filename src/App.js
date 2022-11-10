import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./components/api/Api";
import Form from "./components/form/Form";



function App() {
  return (
   <Router>
    <Switch>
      <Route path="/api"  component={Api} />
      <Route path="/form"  component={Form} />
    </Switch>
   </Router>
  );
}

export default App;
