import moment from "moment"
import styles
 from "../../styles/style"
import { useNavigate } from "react-router-dom"
const HistoryItem = ({item, index}) =>{

  const navigate = useNavigate()
  

return (
    <div
    className={`flex justify-between bg-white rounded-xl px-3 py-3 shadow`}
   onClick={()=>{navigate(`/challenge/${item.ChallengeID}`)}} >
    <div className="flex w-full">
      <div className="w-12 h-12 rounded-full bg-[#FFF5D9] text-center">
        <p className={`${styles.subheading} !text-black my-3.5`}>
          {index + 1}
        </p>
      </div>
      <div className="texts w-[57%] ml-3 my-auto">
        <p className={`${styles.subheading2} !text-black`}>
          {item.ChallengeName}
        </p>
        <p className={`${styles.caption2} !text-gray-500`}>
          {moment(parseInt(item.StartDate, 10)).format(
            'D MMM, YYYY HH.mm'
          )}
        </p>
      </div>

      <div className="flex items-end justify-end">
        <div className="texts ml-4 my-auto">
         {item.Winner === localStorage.getItem('name')? <p className={`${styles.subheading2} !text-[#32D42F]`}>
             + { item.TotalWagerStaked}
          </p> :
          <p className={`${styles.subheading2} ${!item.isSettled? "!text-amber-400" : "!text-[#FE5C73]"}`}>
            {!item.isSettled?"":"-"} { item.WagerStaked}
          </p>}
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
