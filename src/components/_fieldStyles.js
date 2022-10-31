import styled from "styled-components";

export const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .label {
    font-weight: bold;
  }
  .error {
    color: #ff0000;
  }

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 5px 5px 4px 0;
  padding: 5px;
  box-sizing: border-box;
  border: 0px;
  border-bottom: 1px solid #ddd;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;




export const Label = styled.label`
  margin-left: 2px;
`;
