import Slider from 'react-slick'
import challenge from '../../assets/images/challe.png'
import { useState } from 'react'
import styles from '../../styles/style'

const ChallengeSlider=() =>{
    var settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        slidesToShow: 2.15,
        slidesToScroll: 2,
      }
    const [items, setItems] = useState([1, 2, 2, 2, 3, 4])

    return( <div className={` slider-container overflow-hidden `}>
    <Slider {...settings}>
      {items.map((item) => {
        return (
          <div className="relative w-full cursor-pointer">
            <img
              src={challenge}
              alt=""
              className="w-[200px]"
            />

            <div
              className={`absolute top-5 left-5 bg-white rounded-[80px] h-[22px]`}
            >
              <div className={`${styles.flexBetween} px-2 !text-[#6F6F6F]`}>
                {' '}
                7 days
              </div>
            </div>
            <div className={`absolute bottom-5 left-5 h-[22px]`}>
              <div className={`${styles.flexBetween} px-2 !text-[#ffffff]`}>
                {' '}
                Step up
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  </div>)
}


export default ChallengeSlider