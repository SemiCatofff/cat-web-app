import moment from "moment"
import styles
 from "../../styles/style"
import { useNavigate } from "react-router-dom"
const HistoryItem = ({item, index}) =>{

  const navigate = useNavigate()
  

return (
    <div
    className={`flex justify-between bg-white rounded-xl ${styles.paddingX} px-6 ${styles.paddingY} py-4 shadow`}
   onClick={()=>{navigate(`/challenge/${item.ChallengeID}`)}} >
    <div className="flex">
      <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center">
        <p className={`${styles.subheading} !text-black my-3.5`}>
          {index + 1}
        </p>
      </div>
      <div className="texts ml-4 my-auto">
        <p className={`${styles.subheading2} !text-black`}>
          {item.ChallengeName}
        </p>
        <p className={`${styles.caption2} !text-gray-500`}>
          {moment(parseInt(item.StartDate, 10)).format(
            'D MMM, YYYY HH.mm'
          )}
        </p>
      </div>

      <div className="flex">
        <div className="texts ml-4 my-auto">
          <p className={`${styles.subheading2} !text-amber-400`}>
            - {item.WagerStaked}
          </p>
          <p
            className={`${styles.caption1} !text-gray-500 flex justify-center`}
          >
            {' '}
            {/* {item.Rank} */}
          </p>
        </div>
      </div>
    </div>
  </div>

)

}


export default HistoryItem
