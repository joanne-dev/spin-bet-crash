import styled from 'vue3-styled-components';

const CrashAnimationStyled = styled.div`
  position: relative;
  display: flex;
  width: 95%;
  border-bottom: 2.5px solid ${(props) => props.theme.colors.secondaryHover};
  border-left: 2.5px solid ${(props) => props.theme.colors.secondaryHover};
  overflow-x: clip;
  box-sizing: border-box;
  overflow-y: clip;
  height: 45%;
  background: ${(props) => props.theme.colors.bgMain};
  left: 15px;
  & .hide {
    visibility: hidden;
  }

  & .fade-out {
    opacity: 0;
  }

  .opacity-transition {
    transition: opacity 0.5s ease-in-out;
  }
  #rocket {
    position: absolute;
    top: 350px;
    right: 50px;
  }

  #crash {
    position: absolute;
    top: 310px;
    right: 10px;
  }

  #translation-box {
    position: absolute;
    width: 90%;

    left: 25px;
    bottom: 20px;
    top: 45px;
  }

  #hover-box {
    position: relative;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 60px;
  }

  .multiplier {
    position: absolute;
    top: 30%;
    left: 35%;
  }
  .loading {
    position: absolute;
    top: 30%;
    left: 34%;
    transform: translate(-50%, -50%);
  }
`;

export default CrashAnimationStyled;
