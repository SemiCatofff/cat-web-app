import styles from '../../styles/style'

const Chatbox = () => {
  const SenderMessage = () => {
    return (
      <>
        {' '}
        <div class="flex items-start justify-end">
          <div class="flex flex-col items-end">
            <div class="flex flex-col items-end justify-end">
              <span className={`${styles.caption1} !text-[#000000] py-1 px-4`}>
                Rahul X
              </span>
              <span
                className={`${styles.caption1} !text-[#ffffff] py-3 px-4 rounded-[12px] bg-[#202117]`}
              >
                1km in 10 min!
              </span>
            </div>
          </div>
          <div class="flex items-center h-7 w-7 rounded-full bg-[#202117] text-[#ffffff] justify-center">
            Y
          </div>
        </div>
        <div className={`${styles.paragraph} !text-[#8D8D8D] text-right mr-10`}>
          09:25 AM
        </div>
      </>
    )
  }

  const Message = () => {
    return (
      <>
        <div class="flex items-start justify-start">
          <div class="flex items-center h-7 w-7 rounded-full bg-[#F2EFFF] justify-center">
            M
          </div>
          <div class="flex flex-col items-start">
            <div className="flex flex-col items-start justify-start">
              <span className={`${styles.caption1} !text-[#000E08] py-1 px-2`}>
                Rahul X
              </span>
              <span
                className={`${styles.caption1} !text-[#000E08] py-3 px-4 rounded-[12px] bg-[#F2EFFF]`}
              >
                1km in 10 min!
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.paragraph} !text-[#8D8D8D] ml-10`}>
          09:25 AM
        </div>
      </>
    )
  }

  return (
    <div className="h-[calc(100vh-240px)] mt-6 mx-4">
      <div className="h-[calc(100%-71px)] bg-[#FFFFFF] border-[1px] border-[#CDCDCD] rounded-[31px]">
        <div class="flex items-center px-4 py-4">
          <div class="rounded-full w-[15%] flex items-center justify-center text-white font-semibold"></div>
          <div className="flex flex-col w-[70%]">
            <span className={`${styles.caption1} !text-[#000000] !text-[16px]`}>
              Chatroom
            </span>
            <span className={`${styles.caption1} !text-[#9A9C95]`}>
              {' '}
              3 members, 4 online
            </span>
          </div>
          <div className="flex w-[15%]"></div>
        </div>
        <div class="p-3 space-y-2">
          <SenderMessage />
          <Message />
        </div>
      </div>

      <div class="relative h-[71px] flex bg-[#FFFFFF] border-[1px] px-3 py-3 rounded-[31px] border-[#CDCDCD]">
        <div class="w-[12%] rounded-full bg-[#F2EFFF] z-10"></div>
        <div class="w-[90%] rounded-full bg-[#F2EFFF] -ml-[2%] z-0"></div>
      </div>
    </div>
  )
}

export default Chatbox
