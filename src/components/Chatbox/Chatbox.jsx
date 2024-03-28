const Chatbox = () => {
  const messages = [
    {
      sender: 'Alice Doe',
      text: '0x7856...jh86sp09',
      time: '5000',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      sender: 'Alice Doe',
      text: '0x7856...jh86sp09',
      time: '15000',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      sender: 'Alice Doe',
      text: '0x7856...jh86sp09',
      time: '2000',
      imageSrc: '/path-to-your-image.jpg',
    },
    {
      sender: 'Alice Doe',
      text: '0x7856...jh86sp09',
      time: '2000',
      imageSrc: '/path-to-your-image.jpg',
    },
  ]

  const SenderMessage = () => {
    return (
      <div className="w-full px-2 h-[75px]">
      
      </div>
    )
  }

  const Message = () => {
    return <div></div>
  }

  return (
    <div className="h-[calc(100vh-240px)] mt-6 mx-4">
      <div className="h-[calc(100%-71px)] bg-[#FFFFFF] border-[1px] border-[#CDCDCD] rounded-[31px]">
        <div className="flex flex-col py-2">
            <div className="flex">

            </div>
          <SenderMessage />
          <Message />
        </div>
      </div>
      <div className="h-[71px] bg-[#FFFFFF] border-[1px] rounded-[31px] border-[#CDCDCD]">
       
      </div>
    </div>
  )
}

export default Chatbox
