import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { DownBar } from "./components/DownBar/DownBar";

const apiUrl =
  "http://68.183.30.252:3030/api/v1/projects/getOne/Kxx32UHXyx6GfCkkTD8p1";

export const App = () => {
  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setDataApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!dataApi) {
    return <h1>Loading...</h1>;
  }
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar dataApi={dataApi} />
        <Toolbar />
        <DownBar />
      </div>
    </BrowserRouter>
  );
};
