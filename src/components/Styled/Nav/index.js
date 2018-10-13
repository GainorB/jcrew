import styled from 'styled-components';

export const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;

export const NavItem = styled.li`
  display: block;
  margin: auto;
  color: #aeaeae;
  font-size: 15px;
  align-self: center;
  padding: 10px 20px;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #090909;
  }
`;
