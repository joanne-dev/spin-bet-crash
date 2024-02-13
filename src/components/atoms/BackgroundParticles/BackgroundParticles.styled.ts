import styled from 'vue3-styled-components';

const BackgroundParticlesStyled = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;

  #particles-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1s ease-in-out;
    transform: rotate(45deg) scale(1.5);
  }
`;

export default BackgroundParticlesStyled;
