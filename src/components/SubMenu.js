import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as SlIcons from "react-icons/sl";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 15px;
  & :hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.p`
  margin-left: 16px;
  text-decoration: none;
  color: white;
`;
const DropdownLink = styled.p`
  display: flex;
  justify-content: center;
  background: white;
  height: 5rem;
  width: 5rem;
  margin: 0;
  margin-left: 25px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;

  & :hover {
    cursor: pointer;
  }
`;

const SubnavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-gap: 30px;
`;

export const SubMenu = ({ item, dataApi }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={dataApi && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {dataApi && subnav ? (
            <SlIcons.SlArrowDown
              style={{
                background: "#2bc8f6",
                fontSize: "20px",
                padding: "0.3rem",
              }}
            />
          ) : dataApi ? (
            <SlIcons.SlArrowUp
              style={{
                background: "#2bc8f6",
                fontSize: "20px",
                padding: "0.3rem",
              }}
            />
          ) : null}
        </div>
      </SidebarLink>
      <hr />
      <SubnavWrapper>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
      </SubnavWrapper>
    </>
  );
};
