import styled from 'styled-components';

export const Button = styled.button`
  max-width: 292px;
  width: 100%;
  margin-left: 15px;
  height: 41px;
  border-radius: 8px;
  transition: .4s all ease;

  &.border-on{
    border: 2px solid #4057e3;
    color: #4057e3;
    background: transparent;


    &:hover{
      color: #fff;
      background: #4057e3;
    }
  }

  &.bg-on{
    border: 2px solid #4057e3;
    color: #fff;
    background: #4057e3;
    &:hover{
      border: 2px solid #9faaf1;
      background: #9faaf1;
    }
  }

  &:first-of-type{
    margin-left: 0;
  }
`;
