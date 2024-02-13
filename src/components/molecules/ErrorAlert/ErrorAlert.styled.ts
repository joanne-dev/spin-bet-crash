import styled from 'vue3-styled-components';

export const ErrorAlertStyled = styled.div`
  &.background {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.bgOpacity};
  }
  .error-alert {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.light};
    border-radius: 10px;
    padding: 20px;
    &__title {
      font-size: 24px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.bgMain};
      margin-bottom: 20px;
    }
    &__message {
      font-size: 16px;
      color: ${(props) => props.theme.colors.bgMain};
      margin-bottom: 20px;
    }
    &__button {
      padding: 10px 20px;
      width: 100px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
    }
  }
`;
