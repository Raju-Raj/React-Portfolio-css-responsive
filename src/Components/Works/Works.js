import React from 'react';
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='works'>
        <div className='awesome'>
            <span style={darkMode ? {color:'white'} : {color:''}}>Works for all these</span>
            <span>Brands & Clients</span>
            <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br/>
            the industry's standard dummy text ever since 
            <br/>
            Ipsum is simply dummy text of the printing and typesetting
            <br/>
            Lorem Ipsum is simply dummy text of the printing 
            </span>
              <button className='button s-button'>Hire me</button> 
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* Right side  */}
        <div className='w-right'>
          <motion.div
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duration:4,type:"spring"}}
           className='w-mainCircle'>

            <div className='w-secCircle'>
              <img src={Upwork} alt=''/>
            </div>
            <div className='w-secCircle'>
              <img src={Fiverr} alt=''/>
            </div>
            <div className='w-secCircle'>
              <img src={Amazon} alt=''/>
            </div>
            <div className='w-secCircle'>
              <img src={Shopify} alt=''/>
            </div>
            <div className='w-secCircle'>
              <img src={Facebook} alt=''/>
            </div>

          </motion.div>

          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>
        </div>

    </div>
  )
}

export default Works