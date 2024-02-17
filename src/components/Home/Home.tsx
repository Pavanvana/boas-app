import React from "react";
import { observer } from "mobx-react-lite";
import Header from "../Header/Header";
import { useCustomT } from "../../hooks/useCustomT";

const Home = (): React.ReactElement => {
  const t = useCustomT("header");

  return (
    <div>
      <Header />
      <div>
        <h1>hi</h1>
        <h1>hi</h1>
      </div>
    </div>
  );
};
export default observer(Home);
