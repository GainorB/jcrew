import styled from 'styled-components';

export const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #6e6e6e;
  border-bottom: 1px solid #6e6e6e;
`;

export const NavItem = styled.li`
  display: block;
  margin: auto;
  color: #6e6e6e;
  font-size: 15px;
  align-self: center;
  padding: 10px 20px;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #6e6e6e;
  }

  a:link,
  a:active,
  a:visited {
    text-decoration: none;
    color: #6e6e6e;
  }
`;
