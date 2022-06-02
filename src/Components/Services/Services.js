import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png'
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

  const transition = {duration:2,type:'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='services' id="Services">

        {/* left side */}
        <div className='awesome'>
            <span style={darkMode ? {color:'white'} : {color:''}}>My Awesome</span>
            <span>Services</span>
            <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br/>the industry's standard dummy text ever since 
            </span>
            <a href={Resume} download>
              <button className='button s-button'>Download CV</button> 
            </a>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className='cards'>
            <motion.div
            initial={{left:"25rem"}}
            whileInView={{left:"14rem"}}
            transition={transition}
             style={{left:'14rem'}}
             >
                <Card
                emoji={HeartEmoji} 
                heading={'Design'}
                details={"Figma , Sketch , Photoshop , Adobe , Adobe  X d"}
                />
            </motion.div>
            <motion.div 
            initial={{left:'-8rem'}}
            whileInView={{left:'-4rem'}}
            transition={transition}
            style={{top:'12rem',left:'-4rem'}}>
                <Card
                emoji={Glasses} 
                heading={'Developer'}
                details={"Html , Css , JavaScript ,Jquery, React, Material UI"}
                />
            </motion.div>
            <motion.div 
            initial={{left:'20rem'}}
            whileInView={{left:'12rem'}}
            transition={transition}
            style={{top:'19rem',left:'12rem'}}>
                <Card
                emoji={Humble} 
                heading={'UI/UX'}
                details={" Lorem Ipsum is simply dummy text of the printing"}
                />
            </motion.div>
            <div className='blur s-blur' style={{background:"var(--purple)"}}></div>
        </div>

    </div>
  )
}

export default Services