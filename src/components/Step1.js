import styled from "styled-components";
import { SubMenu } from "./SubMenu";

const Wrap1 = styled.div`
  background-color: #595959;
  height: 100vh;
`;

export const Step1 = ({ dataApi }) => {
  const miData = dataApi.data[0].uidl[0].children[0].children;

  return (
    <Wrap1>
      {miData.map((item, index) => {
        return <SubMenu dataApi={dataApi} item={item} key={index} />;
      })}
    </Wrap1>
  );
};
