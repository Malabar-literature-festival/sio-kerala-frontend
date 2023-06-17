import styled from "styled-components";

export const CloseButton = styled.button`
  background: transparent;
  padding: 0 0.5em;
  font-size: initial;
  margin-right: 0.5em;
  outline: none;
  border: 0px solid #ddd;
  border: 0px solid #ddd;
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-right: 0px;
  padding: 12px;
  background: ${(props) => props.theme.background};
  border-radius: 50%;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.bgPrimary};
  }
`;
export const Td = styled.div`
  text-align: left;
  padding: 10px 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid #D9D9D9;
  &.no,
  &.name {
    border: 1px solid gray;
  }
  &.has {
    border: 2px solid black;
    cursor: pointer;
  }
  &.no,
  &.has {
    text-align: center;
  }
  &.no svg {
    fill: grey;
  }
  &.name {
    text-overflow: "no-wrap";
  }
  &.actions {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
    margin-left: auto;
    margin-right: 5px;
    padding: 0;
  }
  &.right {
    text-align: right;
  }
`;

export const TrBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Title = styled.span`
  margin-right: 5px;
  margin-bottom: 5px;
  color:grey;
`;
export const Head = styled.span`
  font-weight: bold;
  width: "100%";
  display: flex;
  align-items: "center";

  svg {
    margin-right: 10px;
  }
`;
export const DataItem = styled.span`
font-weight:bold;
  padding: 5px 10px;
  border-radius: 10px;
`;
