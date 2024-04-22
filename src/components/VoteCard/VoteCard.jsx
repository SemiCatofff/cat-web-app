import card2 from '../../assets/images/img.png'
import styles from '../../styles/style'

const VoteCard = ({name,img,time}) =>{

    return (
        <div className ="mx-4 my-5  border-[#E2DBFF] border-[1px] bg-[#F6EEF6]  rounded-[12px] px-4 flex flex-col">
            <div className="w-full h-[60px] flex items-center relative">
                <img src={card2} className="w-[30px] h-[30px] rounded-[50%] "/>
                <div className={`${styles.subheading} !text-[#000000] mx-2 font-regular !text-[12px] flex items-center h-full`} > Name </div>
                <div className={`${styles.subheading} !text-[#6B6B6B] mx-2 font-regular !text-[9px] flex items-center h-full`} > Posted few days ago </div>
                <div className={`${styles.subheading} !text-[#6B6B6B] mx-2 font-regular !text-[9px] flex items-center h-full absoulute right-[10px]`} > Posted </div>
            </div>
            <div>
                <img src={card2} className="w-full rounded-[20px]"/>
            </div>
            <div className="w-full h-[58px] flex items-center">
            <div className=" h-[48px] flex items-center">
            <div className={`${styles.heading2} !text-[#000000] mx-2 flex items-center h-full !text-[14px]`} > Quantity : 100 KG </div>

                </div></div>
             </div>
    )


}

export default VoteCard