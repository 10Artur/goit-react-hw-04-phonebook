import styled from 'styled-components';

export const ContactsListItems = styled.ul `
  display: grid;
  margin-top: 30px;
  gap: 15px;
`;

export const ContactsListItem = styled.li `
  display: flex;
  justify-content: space-between;
`;

export const ContactsListBtn = styled.button `
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  text-decoration: none;
  color: red;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid red;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 red;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 red;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ContactsListResetBtn = styled.button `
  margin: 20px auto 0;
  width: 100px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: #1e9bff;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  position: relative;
  transition: all 0.5s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #1e9bff;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: white;
  }

  &:active:before {
    background: #1e9bff;
  }
`;