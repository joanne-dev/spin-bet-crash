import styled from 'vue3-styled-components';

export const LastResultsStyled = styled.div`
  margin-top: 20px;

  .last-results-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
    height: 50px;
    padding: 10px;
    overflow: hidden;
  }
  .title {
    width: 100%;
    font-size: 20px;
    color: white;
    justify-content: center;
    display: flex;
  }

  .latest {
    background-color: ${(props) => props.theme.colors.bgMain};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  .latest,
  .last-results-box {
    color: ${(props) => props.theme.colors.light};
    height: 100%;
    width: auto;
    padding: 0 8px 0 8px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .last-results-box {
    background-color: ${(props) => props.theme.colors.bgMain};
    border: 1px solid ${(props) => props.theme.colors.primary};
    .result-box {
      font-size: 18px;
      color: ${(props) => props.theme.colors.light};
      gap: 5px;
    }
  }
`;
