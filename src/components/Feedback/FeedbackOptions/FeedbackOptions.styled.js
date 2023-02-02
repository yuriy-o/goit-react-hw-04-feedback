import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.1);
  }
`;
