import styled from "styled-components";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-bottom: auto;
  &.auto {
    width: auto;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 15px 8px 10px;
  background-color: #ddedeb;
  white-space: nowrap;
  color: #444;
  font-weight: bolder;
  border-radius: 0px;
  :first-child {
    border-top-left-radius: 12px;
  }
  :last-child {
    border-top-right-radius: 12px;
  }
  &.actions {
    display: flex;
    justify-content: right;
    padding-right: 20px;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #ddedeb;
    border-radius: 12px;
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 8px;
  height: 30px;
  &.actions {
    display: flex;
    justify-content: right;
    overflow-wrap: normal;
  }
  &.right {
    text-align: right;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 6px 12px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 10px;
  white-space: nowrap;
  &.add {
    background-color: #4caf50;
  }
  &.edit {
    background-color: gray;
  }
  &.delete {
    background-color: red;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
  svg {
    fill: white;
    margin-left: 5px;
    height: 0.9em;
  }
  @media (max-width: 768px) {
    span {
      display: none;
    }
    svg {
      margin-left: 0px;
    }
  }
`;
export const Count = styled.div`
  padding: 0.5em;
  text-align: right;
  padding: 0.5em;
  text-align: right;
  height: 25px;
  justify-content: flex-end;
  display: flex;
  button:nth-child(2) {
    margin-left: 1em;
  }
`;
export const ArrowButton = styled.button`
  background: transparent;
  padding: 0em;
  margin-right: 0.5em;
  outline: none;
  border: 0px solid #ddd;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    color: ${(props) => props.theme.bgPrimary};
  }
`;
export const ButtonPanel = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
  svg {
    background-color: transparent;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  }
`;
export const AddButton = styled.button`
  background: white;
  padding: 4px 5px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  padding: 0.5em 1em;
  margin-right: 0em;
  outline: none;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.bgPrimary};
  }
  & > svg {
    margin-right: 10px;
  }
`;
export const FilterBox = styled.div`
  flex-direction: row;
  display: flex;
`;
export const Filter = styled.button`
  background: transparent;
  padding: 0 0.5em;
  font-size: 1em;
  margin-right: 0.5em;
  outline: none;
  border: 0px solid #ddd;
  border: 0px solid #ddd;
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-right: 10px;
  padding: 12px;
  background: ${(props) => props.theme.background};
  border-radius: 50%;
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.bgPrimary};
  }
`;
export const Filters = styled.div`
  margin-right: auto;
  display: flex;
  max-width: 80%;
  @media (max-width: 768px) {
    flex-flow: wrap;
    max-width: 100%;
    margin-bottom: 10px;
  }
`;
export const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  margin-right: 10px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  span {
    box-shadow: 0 0 1px #2196f3;
  }
`;
export const NoData = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddedeb;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100px;
`;
export const ScrollLayout = styled.div`
  overflow: auto;
`;
export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e7f2f9;
  transition: 0.4s;
  box-shadow: 0 0 1px #2196f3;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    background-color: red;
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(18px);
    background-color: green;
  }
`;
