import { useState } from "react";
import { SubMenu } from "../SubMenu/SubMenu";
import {
  Container,
  Tab,
  Steps,
  TabContainer,
  TabNavMenu,
} from "./Sidebar.styled";

export const Sidebar = ({ dataApi }) => {
  const [activeTab, setActiveTab] = useState(1);
  const data = dataApi.data[0].uidl[0].children;

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <Container>
      <TabContainer>
        {data &&
          data.map((item, index) => (
            <Tab
              onClick={() => toggleTab(index + 1)}
              isActive={activeTab === index + 1}
              key={index}
            >
              <Steps>Step {index + 1}</Steps>
              <h3>{item.text}</h3>
            </Tab>
          ))}
      </TabContainer>
      <hr />
      {data &&
        data.map((elem, index) => (
          <TabNavMenu
            onClick={() => toggleTab(index + 1)}
            isActive={activeTab === index + 1}
            key={index}
          >
            {elem.children.map((item, index) => {
              return <SubMenu dataApi={dataApi} item={item} key={index} />;
            })}
          </TabNavMenu>
        ))}
    </Container>
  );
};
