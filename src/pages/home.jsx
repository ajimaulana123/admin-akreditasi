import React from "react";
import Sidebar from "../layout/sidebar";
import OverviewState from "../components/home/overviewState";

const Home = () => {
  return (
    <Sidebar breadcrumbs={"Main Dashboard"}>
      <OverviewState />
    </Sidebar>
  );
};

export default Home;
