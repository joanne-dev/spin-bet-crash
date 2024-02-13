import styled from 'vue3-styled-components';

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  font-weight: bolder;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
  &.disabled {
    background: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.disabledText};
    cursor: not-allowed;
  }
`;
