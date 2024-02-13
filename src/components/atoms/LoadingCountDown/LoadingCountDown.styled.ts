import styled from 'vue3-styled-components';

export const LoadingCountDownStyled = styled('div', {})`
  position: absolute;
  font-size: 60px;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.light};
  animation: bounce 1s infinite;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      -webkit-text-stroke: 3px ${(props) => props.theme.colors.background};
      transform: translateY(-10px);
    }
    65% {
      -webkit-text-stroke: 3px ${(props) => props.theme.colors.primary};
      transform: translateY(0);
    }
    75% {
      -webkit-text-stroke: 3px ${(props) => props.theme.colors.backgroundLight};
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
