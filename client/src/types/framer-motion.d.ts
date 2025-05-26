declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
  }

  export interface MotionProps extends AnimationProps {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export type MotionComponent<P = {}> = React.ComponentType<P & MotionProps>;

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<JSX.IntrinsicElements[K]>;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    initial?: boolean;
    mode?: 'sync' | 'wait' | 'popLayout';
    onExitComplete?: () => void;
  }>;
} 