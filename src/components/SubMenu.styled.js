import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const SidebarLink = styled(Link)`
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

export const SidebarLabel = styled.div`
  margin-left: 16px;
  text-decoration: none;
  color: white;
`;

export const SubnavLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;

  & :hover {
    cursor: pointer;
  }
`;

export const SubnavList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  /* display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-gap: 30px; */
`;

export const SubnavImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  background: wheat;
  border-radius: 50%;
`;

export const SubnavText = styled.p`
  color: white;
  font-size: 15px;
  margin-top: 10px;
  width: 4.5rem;
  text-align: center;
`;

export const SlIcon = css`
  background: #2bc8f6;
  padding: 0.3rem;
  font-size: 20px;
`;

export const DownIcon = styled(SlArrowDown)`
  ${SlIcon}
`;

export const UpIcon = styled(SlArrowUp)`
  ${SlIcon}
`;
