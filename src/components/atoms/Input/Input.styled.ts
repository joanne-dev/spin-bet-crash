import styled from 'vue3-styled-components';

export const InputStyled = styled.input`
  height: 70%;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.light};
`;
