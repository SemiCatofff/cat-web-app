import styles from '../../styles/style'
import { homeHeader } from '../../assets/images'
import { ChallengeCard } from '../../components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className={` ${styles.paddingX} ${styles.paddingY} `}>
        <div className="relative">
          <img src={homeHeader} alt="headerImg" className="w-full" />{' '}
          <h1
            className={`${styles.heading1} ${styles.marginX} absolute top-0 text-yellow ${styles.paddingY}`}
          >
            Welcome to <br /> CATOFF 🔥
          </h1>
          <p
            className={`${styles.paragraph} ${styles.marginX} ${styles.marginY} absolute bottom-4 `}
          >
            Own your Wager, Own your wins !
          </p>
        </div>
      </div>
      {/* Cards Section */}
      <div className={`card-box`}>
        <div
          className={`${styles.marginX} ${styles.marginY} ${styles.flexBetween}`}
        >
          <p className={`${styles.subheading} !text-neutral-700`}>
            Live Challenges
          </p>
          <a href="" className={`${styles.paragraph} !text-neutral-500`}>
            View All <span>..</span>
          </a>
        </div>
        <div className={` slider-container ml-4 overflow-hidden `}>
          <Slider {...settings}>
            <div className="">
              <ChallengeCard />
            </div>
            <div className="">
              <ChallengeCard />
            </div>
            <div className="">
              <ChallengeCard />
            </div>
            <div className="">
              <ChallengeCard />
            </div>
          </Slider>
        </div>
      </div>
      <div className={`blog-box mt-6`}>
        <div
          className={`${styles.marginX} ${styles.marginY} ${styles.flexBetween}`}
        >
          <p className={`${styles.subheading} !text-neutral-700`}>
            How Do We Work ?
          </p>
          <a href="" className={`${styles.paragraph} !text-neutral-500`}>
            View All <span>..</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
