import styled from "vue3-styled-components";

export const HeaderStyled = styled.div`
  &.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;

    .title-game {
      font-weight: 700;
      font-size: 1.5em;
      color: ${(props) => props.theme.colors.secondaryHover};
      text-align: center;
      animation: title-game-anim 10s infinite;
    }

    @keyframes title-game-anim {
      0% {
        color: ${(props) => props.theme.colors.primary};
      }
      100% {
        color: ${(props) => props.theme.colors.secondaryHover};
      }
    }

    .balance-container {
      margin: 10px 0 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.light};
      height: 44px;
      width: 140px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.dark};

      .title {
        font-size: 1em;
        font-weight: 400;
      }

      .balance {
        font-size: 1.1em;
        color: ${(props) => props.theme.colors.success};
        font-weight: 900;
      }
    }
  }

`;
