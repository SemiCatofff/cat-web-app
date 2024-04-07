import Slider from 'react-slick'
import challenge from '../../assets/images/challe.png'
import styles from '../../styles/style'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ChallengeSlider = ({ items }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesToShow: 2.15,
    slidesToScroll: 2,
  }

  // const sliderContainerClasses = `slider-container ${
  //   items.length === 1 ? 'single-item' : ''
  // }`

  return (
    <div className={` slider-container `}>
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div className="relative w-full cursor-pointer">
              <img src={challenge} alt="" className="w-[200px]" />

              <div
                className={`absolute top-5 left-5 bg-white rounded-[80px] flex items-center justify-center `}
              >
                <div
                  className={`${styles.flexBetween} !text-[11px] !text-[#6F6F6F] px-2 py-1`}
                >
                  {' '}
                  {moment
                    .duration(
                      moment(parseInt(item.EndDate)).diff(
                        moment(parseInt(item.StartDate))
                      )
                    )
                    .humanize()}
                </div>
              </div>
              <div className={`absolute bottom-5 left-5 h-[22px]`}>
                <div
                  className={`${styles.flexBetween} px-2 !text-[10px] !text-[#ffffff]`}
                >
                  {item.ChallengeName}
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ChallengeSlider
