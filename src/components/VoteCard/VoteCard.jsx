import card2 from '../../assets/images/img.png'
import styles from '../../styles/style'

const VoteCard = ({name,img,time, isChecked}) =>{




    const handleCheckboxChange = () => {
        // setIsChecked(!isChecked);
        // onUpdate(!isChecked); // Call the provided update function when the state changes
      };

    return (
        <div className ="mx-4 my-5  border-[#E2DBFF] border-[1px] bg-[#F6EEF6]  rounded-[12px] px-4 flex flex-col">
            <div className="w-full h-[60px] flex items-center relative">
                <img src={card2} className="w-[30px] h-[30px] rounded-[50%] "/>
                <div className={`${styles.subheading} !text-[#000000] mx-2 font-regular !text-[12px] flex items-center h-full`} > Name </div>
                <div className={`${styles.subheading} !text-[#000000] font-regular !text-[12px] flex items-center h-[7px] w-[7px] rounded-[50%] bg-[#939393]`} > </div>
                <div className={`${styles.subheading} !text-[#6B6B6B] mx-2 font-regular !text-[9px] flex items-center h-full w-[50%]`} > Posted few days ago </div>
                {/* <div className={`${styles.subheading} !font-bold !text-[10px] flex items-center px-4 py-2 bg-[#4A484B] rounded-[20px] justify-center`} > Verified </div> */}
                <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-4 w-4 bg-green-500 rounded-full" // Tailwind classes for styling
      />
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