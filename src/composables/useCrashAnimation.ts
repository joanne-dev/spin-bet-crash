import { Power0 } from 'gsap';
import gsap from 'gsap';
import { States } from '@/types/CrashStore.ts';
import { watch } from 'vue';

export default function useCrashAnimation(store: any) {

  let areaRocketFlyContainer: HTMLElement;
  let translatingElement: HTMLElement;
  let particles: HTMLElement;
  let xScrollTl: gsap.core.Timeline;
  let yScrollTl: gsap.core.Timeline;
  let translationTween: gsap.core.Tween;
  let timeScale = 0.15;

  function setupAnimation(): void {
    gsap.ticker.lagSmoothing(false);
    setupContainers();
    createYXAxisTimeLine();
    createRocketTranslationTween();
  }

  function setupContainers() {
    areaRocketFlyContainer = document.getElementById('translation-box')!;
    translatingElement = document.getElementById('translation-point')!;
    particles = document.getElementById('particles-background')!;
  }
  function createYXAxisTimeLine(){
    xScrollTl = gsap.timeline({ paused: true }).to('#x-axis-stubs', {
      duration: 1,
      xPercent: -50,
      ease: Power0.easeNone,
      repeat: -1,
      onRepeat: () => {
        timeScale += 0.05;
        if (timeScale > 0.75) timeScale = 0.75;
        xScrollTl.timeScale(timeScale);
      },
    });

    yScrollTl = gsap.timeline({ paused: true }).to('#y-axis-stubs', {
      duration: 1,
      yPercent: 50,
      ease: Power0.easeNone,
      repeat: -1,
      onRepeat: () => {
        yScrollTl.timeScale(timeScale);
      },
    });
  }
  function createRocketTranslationTween() {
    translationTween = gsap.to(translatingElement, {
      duration: 5,
      x: areaRocketFlyContainer.clientWidth,
      y: -areaRocketFlyContainer.clientHeight + 10,
      paused: true,
      onComplete: function () {
        gsap.to(translatingElement, {
          yoyo: true,
          repeat: -1,
          duration: 1.3,
          y: '+=10',
        });
      },
    });
  }

  function startAnimation(): void {
    timeScale = 0.15;
    xScrollTl.timeScale(timeScale);
    yScrollTl.timeScale(timeScale);
    xScrollTl.restart();
    yScrollTl.restart();
    translationTween.restart();
  }

  watch(() => store.states, validateActionFunction);
  function validateActionFunction(value: any) {
    switch (value) {
      case States.WAITING:
        fadeOutParticles();
        translatingElement.style.display = 'none';
        break;
      case States.GRAPHING:
        fadeIn();
        fadeInParticles();
        xScrollTl.restart();
        yScrollTl.restart();
        translatingElement.style.display = 'flex';
        translationTween.restart();
        break;
      case States.COMPLETED:
        translationTween.pause();
        fadeOutParticles();
        setTimeout(() => {
          translationTween.repeat();
          fadeOut();
        }, 1500);
        break;
    }
  }

  const fadeOut = () => {
    gsap.to(translatingElement, {
      alpha: 0,
      duration: 1,
      delay: 0,
      paused: false,
    });
  };
  const fadeIn = () => {
    gsap.to(translatingElement, {
      alpha: 1,
      duration: 1,
      paused: false,
    });
  };
  const fadeOutParticles = () => {
    gsap.to(particles, {
      alpha: 0,
      duration: 0.2,
      delay: 0,
      paused: false,
      onComplete: () => {
        xScrollTl.pause();
        yScrollTl.pause();
      },
    });
  };
  const fadeInParticles = () => {
    gsap.to(particles, {
      alpha: 1,
      duration: 0.5,
      paused: false,
    });
  };

  return {
    setupAnimation,
    startAnimation,
    validateActionFunction,
  };
}
