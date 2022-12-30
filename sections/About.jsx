'use client';
import {motion } from 'framer-motion';
import { stagger } from 'motion';
import { TypingText } from '../components';
import styles from '../styles';
import {fadeIn, slideIn,staggerContainer,textVariant} from '../utils/motion';
 
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient--2 z-0'>
      <motion.div
      variants={staggerContainer}
      initial ='hidden'
      whileInView="show"
      viewport={{once:false,amount:0.25}}

      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >

   <TypingText title="| About Metaversus" textStyles="text-center"></TypingText>

      </motion.div>
    </div>
  </section>
);

export default About;
