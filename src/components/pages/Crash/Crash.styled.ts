import styled from 'vue3-styled-components';

const CrashStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
`;

export default CrashStyled;
