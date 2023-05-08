// import { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";

const Wrap1 = styled.div`
  background-color: #595959;
  height: 100vh;
`;

export const Step1 = ({ dataApi }) => {
  return (
    <Wrap1>
      {SidebarData.map((item, index) => {
        return <SubMenu dataApi={dataApi} item={item} key={index} />;
      })}
    </Wrap1>
  );
};
