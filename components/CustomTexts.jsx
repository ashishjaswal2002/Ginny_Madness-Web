'use client';
import {motion } from 'framer-motion';
import styles from '../styles';
import {slideIn,staggerContainer,textContainer,textVariant} from '../utils/motion';

export const TypingText = ({title,textStyles}) => (
  <motion.p
   variants={textContainer}  
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    
  ></motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
