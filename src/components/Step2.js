// import { useState } from "react";
import styled from "styled-components";
import { SidebarData1 } from "./SidebarData";
import { SubMenu } from "./SubMenu";

const Wrap2 = styled.div`
  background-color: #595959;
  height: 100vh;
`;

export const Step2 = ({ dataApi }) => {
  return (
    <Wrap2>
      {SidebarData1.map((item, index) => {
        return <SubMenu dataApi={dataApi} item={item} key={index} />;
      })}
    </Wrap2>
  );
};
