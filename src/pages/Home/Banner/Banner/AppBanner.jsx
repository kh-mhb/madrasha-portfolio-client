import { useState } from 'react';
import './AppBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { SliderData } from './appData'
import Slider from './Slider'


const AppBanner = () => {
    let content
    const [current,setCurrent] = useState(0);
    const [indexVal,setIndexVal] = useState(0);
    const length = SliderData.length;

    var sectionStyle = {
        borderRadius:'1rem',
        backgroundImage:  `linear-gradient(to left, rgba(52, 74, 95,0.5), rgba(51, 101, 101,0.8)), url(${SliderData[current].bck})`,
    }


    const nextSlide = () =>{
      setCurrent(current === length-1 ? 0 : current + 1)
    }
  
    const prevSlide = () =>{
      setCurrent(current === 0 ? length -1 : current - 1)
    }

    content = (
        <div className='land-holder ' style={sectionStyle}>
            <div className='color-holder bg-gray-300'>
              <div className='font-holder'>
                <div className='flex flex-row total'>
                    <h1 className='pg-crnt'>{current+1}</h1>
                    <div className='slanted-line'></div>
                    <h1 className='pg-cnt'>{length}</h1>
                </div>
                <button onClick={nextSlide} className='nxt-prb-btn'><FontAwesomeIcon icon={faArrowRight}/></button>
                <button onClick={prevSlide} className='nxt-prb-btn'><FontAwesomeIcon icon={faArrowLeft}/></button>
              </div>
            </div>
              <Slider
                  sliderr={SliderData}
                  current={current}
                  setIndexVal={setIndexVal}
              ></Slider>
          
    
        </div>
    )

    return content
}

export default AppBanner
