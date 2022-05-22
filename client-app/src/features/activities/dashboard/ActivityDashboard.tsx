import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/loadingComponent";
import { useStore } from "../../../app/store/store";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, loadingInitial } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) {
      loadActivities();
    }
  }, [activityRegistry.size, loadActivities]);

  if (loadingInitial)
    return <LoadingComponent content="Loading app" inverted={true} />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
});
