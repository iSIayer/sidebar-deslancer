import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  background-color: gray;
`;

const TabButton = styled.button`
  padding: 1.5rem 0.7rem;
  background: ${(props) => (props.isActive ? "#595959" : "#2d2d2d")};
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: white;
  border: none;
  border-right: 1px solid black;
  width: 100%;
`;

const Steps = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
`;

export const Sidebar = ({ dataApi }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <TabButton
          onClick={() => setActiveTab("tab1")}
          isActive={activeTab === "tab1"}
        >
          <Steps>Step 1</Steps>
          {dataApi.data[0].uidl[0].children[0].text}
        </TabButton>
        <TabButton
          onClick={() => setActiveTab("tab2")}
          isActive={activeTab === "tab2"}
        >
          <Steps>Step 2</Steps>
          {dataApi.data[0].uidl[0].children[1].text}
        </TabButton>
      </div>
      <hr />
      {activeTab === "tab1" && <Step1 dataApi={dataApi} />}
      {activeTab === "tab2" && <Step2 dataApi={dataApi} />}
    </Container>
  );
};