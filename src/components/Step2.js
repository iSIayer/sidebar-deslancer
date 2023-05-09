import styled from "styled-components";
import { SubMenu } from "./SubMenu";

const Wrap2 = styled.div`
  background-color: #595959;
  height: 100vh;
`;

export const Step2 = ({ dataApi }) => {
  const miData = dataApi.data[0].uidl[0].children[1].children;

  return (
    <Wrap2>
      {miData.map((item, index) => {
        return <SubMenu dataApi={dataApi} item={item} key={index} />;
      })}
    </Wrap2>
  );
};
