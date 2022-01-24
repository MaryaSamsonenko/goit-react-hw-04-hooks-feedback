import styled from "styled-components";
export const Button = styled.button`
  padding: 12px;
  border: none;
  cursor: pointer;
  min-width: 92px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  background-color: grey;
  color: rgb(63, 63, 65);
  box-shadow: -3px -3px 5px;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:hover {
    background-color: rgb(82, 81, 81);
    color: rgb(245, 235, 142);
  }
`;
