import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  padding: 10px;
  &.hd {
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 768px) {
    &.hd {
      display: none;
    }
  }
`;
export const Nav = styled.nav`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secForeground};
   overflow-y:auto;
  a.main, .open {
    text-decoration: none;
    color: ${(props) => props.theme.secForeground};
    padding-left: 1em;
    color: white;
    height: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  a.open {
    cursor: unset;
  }
  a.main.active,
  a.main:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(102deg, rgba(2, 0, 36, 1) 0%, rgb(82 103 96) 0%, rgba(8, 34, 95, 0) 83%);
    box-shadow: rgb(0 0 0 / 16%) -1px 0px 4px;
  }
  a.main.active::after {
    content: "";
    width: 6px;
    color: white;
    height: 100%;
    background: rgb(82 103 96);
    margin-left: auto;
  }
  a.main svg ,.open svg{
    margin-right: 10px;
    width: 30px;
  }
`;
export const SubMenu = styled.nav`
  margin-left: 2em;
  padding-left: 0em;
  border-left: 1px solid lightgrey;
`;
