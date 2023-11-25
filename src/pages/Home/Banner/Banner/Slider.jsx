import { SliderData } from "./appData"
import './AppBanner.css'

const Slider = ({sliderr,current,setIndexVal}) => {
    let content
    if(!Array.isArray(sliderr) || sliderr.length <= 0){
        return null;
    }

    content = (
        <div className='slider'>
            {
                SliderData.map((slide,index)=>{
                    setIndexVal(index)
                    return (
                        <div className={index === current ? 'slider-des' : 'slider-des'} key={index}>
                            {
                                index === current && 
                                <div className='change'>
                                    <img src={slide.img} alt="" />
                                    <div className='change-des'>
                                        <button className='top-btn'>{slide.but}</button>
                                        <h1>{slide.tit}</h1>
                                        <h5>{slide.des}</h5>
                                        <button className='btm-btn'>Explore Process</button>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
      )
    return content
}

export default Slider