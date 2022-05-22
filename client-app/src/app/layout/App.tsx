import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/activities/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={`/(.+)`}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "5em" }}>
              <Route path="/activities" exact component={ActivityDashboard} />
              <Route path="/activities/:id" exact component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                exact
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
