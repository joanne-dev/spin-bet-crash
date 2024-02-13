import styled from 'vue3-styled-components';

export const BetSectionStyled = styled.div`
  margin: 10px;
  color: ${(props) => props.theme.colors.light};

  .actions {
    display: flex;
    flex-direction: column;

    .amount-info {
      padding: 0 8px 0 8px;
      border-radius: 10px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.bgMain};
      height: 40px;
      background: ${(props) => props.theme.colors.secondaryHover};
      margin: 10px 0 10px 0;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .bet,
  .cash-out,
  .disabled {
    height: 80px;
  }

  .cash-out {
    background: ${(props) => props.theme.colors.success};

    &:hover {
      background-color: ${(props) => props.theme.colors.successHover};
    }
  }
`;
