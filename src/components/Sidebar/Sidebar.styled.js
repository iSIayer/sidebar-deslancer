import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 100vh;
  overflow-y: auto;
`;
export const TabNavMenu = styled.div`
  display: ${(props) => (props.isActive ? "" : "none")};
  background-color: #595959;
  min-height: 100%;
  max-height: max-content;
  width: 100%;
  /* padding-right: 1rem; */
`;

export const TabContainer = styled.div`
  display: flex;
  background: #2d2d2d;
`;

export const Tab = styled.div`
  font-family: "Lato";
  padding: 2.2rem 0.7rem;
  background: ${(props) => (props.isActive ? "#595959" : "")};
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  color: white;
  border: none;
  border-right: 1px solid black;
  width: 100%;
`;

export const Steps = styled.p`
  margin-bottom: 6px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.18;
`;
