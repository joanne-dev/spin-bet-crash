import styled from 'vue3-styled-components';

export const WinAlertStyled = styled.div`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 146px;
  height: 82px;
  background: ${(props) => props.theme.colors.dark};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.light};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 10px 3px ${(props) => props.theme.colors.success};
  z-index: 100;
  animation: fadeIn 1s ease-out 0s 1 normal forwards;
  .message, multiplier {
    color: ${(props) => props.theme.colors.success};
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
