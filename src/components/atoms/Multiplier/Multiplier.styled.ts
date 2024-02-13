import styled from 'vue3-styled-components';

export const MultiplierStyled = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.light};
  &.explode {
    animation: explode 1.5s ease-in-out;
  }
  @keyframes explode {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
