import React from "react";
import Sidebar from "../layout/sidebar";
import OverviewState from "../components/home/overviewState";
import ContentSecond from "../components/home/contentSecond";


const Home = () => {
  return (
    <Sidebar breadcrumbs={"Main Dashboard"}>
      <OverviewState />
      <ContentSecond />
    </Sidebar>
  );
};

export default Home;
