import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, fadeIn, scaleUp, staggerChildren } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleUp' | 'stagger';
  threshold?: number;
  triggerOnce?: boolean;
  id?: string;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeIn',
  threshold = 0.1,
  triggerOnce = true,
  id
}: AnimatedSectionProps) {
  const { controls, ref } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay
  });

  const getVariant = () => {
    switch (variant) {
      case 'fadeInUp':
        return fadeInUp;
      case 'fadeInDown':
        return fadeInDown;
      case 'fadeInLeft':
        return fadeInLeft;
      case 'fadeInRight':
        return fadeInRight;
      case 'scaleUp':
        return scaleUp;
      case 'stagger':
        return staggerChildren;
      case 'fadeIn':
      default:
        return fadeIn;
    }
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleUp';
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedElement({
  children,
  className = '',
  delay = 0,
  variant = 'fadeIn',
  as: Component = 'div'
}: AnimatedElementProps) {
  const getVariant = () => {
    switch (variant) {
      case 'fadeInUp':
        return fadeInUp;
      case 'fadeInDown':
        return fadeInDown;
      case 'fadeInLeft':
        return fadeInLeft;
      case 'fadeInRight':
        return fadeInRight;
      case 'scaleUp':
        return scaleUp;
      case 'fadeIn':
      default:
        return fadeIn;
    }
  };

  const variantWithDelay = {
    ...getVariant(),
    visible: {
      ...getVariant().visible,
      transition: {
        ...getVariant().visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      variants={variantWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  splitBy?: 'letter' | 'word' | 'none';
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'p',
  splitBy = 'none',
  staggerDelay = 0.03
}: AnimatedTextProps) {
  if (splitBy === 'none') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay
          }
        }}
        className={className}
      >
        <Tag>{text}</Tag>
      </motion.div>
    );
  }

  const items = splitBy === 'letter' 
    ? text.split('') 
    : text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            style={{ display: 'inline-block' }}
          >
            {item}
            {splitBy === 'word' && index !== items.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  delay = 0.5,
  className = ''
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const { controls, ref, inView } = useScrollAnimation({
    triggerOnce: true,
    threshold: 0.3,
    delay
  });

  // Using a simpler implementation without custom motion values
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className={className}
    >
      <motion.span
        style={{ opacity: inView ? 1 : 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {prefix}
        {inView ? value : 0}
        {suffix}
      </motion.span>
    </motion.div>
  );
}

export function AnimatedImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  delay = 0,
  threshold = 0.1,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  threshold?: number;
}) {
  const { controls, ref } = useScrollAnimation({
    threshold,
    triggerOnce: true,
    delay
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      <motion.div
        initial={{ filter: 'blur(10px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      >
        <img src={src} alt={alt} className={imgClassName} />
      </motion.div>
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0,
    triggerOnce: false
  });

  const getDirectionStyle = () => {
    switch (direction) {
      case 'down':
        return { y: inView ? `-${speed * 100}px` : '0px' };
      case 'left':
        return { x: inView ? `${speed * 100}px` : '0px' };
      case 'right':
        return { x: inView ? `-${speed * 100}px` : '0px' };
      case 'up':
      default:
        return { y: inView ? `${speed * 100}px` : '0px' };
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={getDirectionStyle()}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}