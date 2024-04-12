import styles from "../../styles/style"
import { homeHeader, edit } from "../../assets/images"


const Profile = ({details, solTok}) =>{
 return (
    <div className={`${styles.paddingX}`}>
    <div className="relative">
      <div className="w-full absolute z-20 flex justify-center">
        <div className="flex-col">
          <img
            src={details.ProfilePicture}
            className="rounded-full w-20 h-20 object-cover mx-auto mt-10"
          />
          <div className="absolute z-40 right-4 -mt-4">
            <img src={edit} alt="" />
          </div>
          <h1 className={`${styles.heading2} text-center pt-4`}>
            {details.UserName}
          </h1>
          <h1 className={`${styles.paragraph} text-white text-center pt-2`}>
            {details.UserEmail}
          </h1>
          <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
            {details.WalletAddress}
          </h1>
          <h1 className={`${styles.paragraph} text-white text-center pt-1`}>
            {' '}
            {solTok}
          </h1>
        </div>
      </div>
    </div>
    <img src={homeHeader} alt="" className="pt-20 w-full" />
  </div>
 )


}

export default Profile