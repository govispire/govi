import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

type ScrollAnimationConfig = {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
};

/**
 * A custom hook that provides animations triggered by scrolling
 * @param config Configuration options for the animation
 * @returns An object containing the animation controls and the ref to be attached to the element
 */
export function useScrollAnimation(config: ScrollAnimationConfig = {}): {
  controls: AnimationControls;
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
} {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    delay = 0
  } = config;

  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start('visible');
      }, delay);
    }
  }, [controls, inView, delay]);

  return { controls, ref, inView };
}

// Common animation variants that can be reused throughout the application
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};