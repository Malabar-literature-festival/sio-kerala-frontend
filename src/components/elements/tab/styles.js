import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

export const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0;
  align-items: flex-end;
  height: 60px;
`;

export const Tab = styled.div`
  padding: 0px;
  background-color: white;
  display: none;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  ${(props) =>
    props.active &&
    `
    display: flex;
  `}
`;

export const TabLink = styled.div`
  cursor: pointer;
  padding: 10px;
  flex: 1 1 50%;
  background-color: #ddedeb;
  color: #77998e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30px;
  &:first-child {
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
  }
  &.active {
    background-color: #ffffff;
    color: #77998e;
    height: 40px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;