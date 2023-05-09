import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  background-color: gray;
`;

export const TabButton = styled.button`
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

export const Steps = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
`;
