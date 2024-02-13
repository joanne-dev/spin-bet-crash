import styled from 'vue3-styled-components';

const GraphicSimulatorStyled = styled.div`
  #axis-frame {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #x-axis-stubs {
    position: absolute;
    display: flex;
    width: 200%;
    align-items: stretch;
    bottom: 0;
  }
  #y-axis-stubs {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 200%;
    align-items: stretch;
    bottom: 0;
  }
  .horizontal-stub {
    width: 100%;
    height: 5px;
    border-right: 2.5px solid ${(props) => props.theme.colors.secondaryHover};
  }
  .vertical-stub {
    height: 100%;
    width: 5px;
    border-top: 2.5px solid ${(props) => props.theme.colors.secondaryHover};
  }
`;

export default GraphicSimulatorStyled;
