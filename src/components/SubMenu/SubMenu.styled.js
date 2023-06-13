import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const SidebarLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;

  & :hover {
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.div`
  margin-left: 16px;
  text-decoration: none;
  color: white;
`;

export const SubnavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const SubnavImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  background: wheat;
  border-radius: 50%;
`;

export const SubnavText = styled.p`
  color: white;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  margin-top: 10px;
  width: 4.5rem;
  text-align: center;
`;

export const SlIcon = css`
  font-size: 17px;
`;

export const SlIconContainer = styled.div`
  background: rgb(5 153 196);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DownIcon = styled(SlArrowDown)`
  ${SlIcon}
`;

export const UpIcon = styled(SlArrowUp)`
  ${SlIcon}
`;
