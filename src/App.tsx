import { Route, Router } from "@solidjs/router";
import { DemoPage } from "./DemoPage";
import { WipPage } from "./WipPage";

function App() {
  return (
    <Router>
      <Route path="/wip" component={WipPage} />
      <Route path="*" component={DemoPage} />
    </Router>
  );
}

export default App;
