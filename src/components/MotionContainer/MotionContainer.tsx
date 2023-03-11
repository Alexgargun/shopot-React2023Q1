import { motion } from 'framer-motion';
import React from 'react';

interface IMotionContainerProps {
  identKey: string;
  children: React.ReactNode;
}

const motionContainerConfig = {
  variants: {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  },
  transition: {
    type: 'tween',
    ease: 'linear',
    duration: 1,
  },
};

export class MotionContainer extends React.Component<IMotionContainerProps> {
  render(): React.ReactNode {
    return (
      <motion.div
        key={this.props.identKey}
        initial="initial"
        animate="in"
        variants={motionContainerConfig.variants}
        transition={motionContainerConfig.transition}
      >
        {this.props.children}
      </motion.div>
    );
  }
}
