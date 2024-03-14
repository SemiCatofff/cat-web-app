function Progress() {
  return (
    <div className="flex flex-col mt-4 gap-[13px] ">
      <div className="h-[256px] flex mx-4 rounded-box gap-[2%]">
        <div className="bg-black rounded-box w-[49%] gap-[2%]"></div>
        <div className="flex flex-col rounded-box w-[49%] gap-[2%]">
          <div className="bg-black rounded-box h-[49%]"></div>
          <div className="bg-yellow border-[1px] border-[#000000] rounded-box h-[49%]"></div>
        </div>
      </div>
      <div className="h-[333px] mx-4 bg-black rounded-box"></div>
      <div className="h-[92px] mx-4 mb-[110px] bg-yellow rounded-box border-[1px] border-[#000000]"></div>
    </div>
  );
}

export default Progress;
