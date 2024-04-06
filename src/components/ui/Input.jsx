
import { info } from "../../assets/images";
import React,{forwardRef} from "react";

// export const RadioInput = ({label, inputs, selectedInput, handleInputChange}) => {
//   return (
//     <div>
//       <label className=" text-sm text-[#666666] font-semibold">{label}</label>
//       <div className="space-y-2 my-1">
//       {inputs.map((input)=>{
//         return (
//           <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="radio"
//             name="challenge"
//             className="placeholder:text-[#666666] text-base bg-[#F2EFFF]"
//             value={input}
//             checked={selectedInput === input}
//             onChange={handleInputChange}
//           />
//           <span className="">{input}</span>
//         </label>
//         )
//       })}

//       </div>
//     </div>

//   )
// }

export const Input = forwardRef(({ type="text", label, errorName, errors, footerText, ...props }, ref) => (
  <div className=" flex flex-col gap-2">
    <label className=" text-sm text-[#666666] font-semibold">{label}</label>
    <input type={type} className="rounded-md bg-[#F2EFFF] placeholder:text-[#666666] text-base w-full px-2 py-3 outline-none" ref={ref} {...props} />
    {errors[errorName]?<p className=" text-sm text-red-500">{errors[errorName].message}</p>:<p className=" flex gap-1 text-sm text-[#666666]"><img src={info} alt="info" />{footerText}</p>}
  </div>
));


export const DatePickerInput = forwardRef(({ label, errors, errorName, ...props }, ref) => {
  return (
    <div className="relative w-[95%]">
      <label className="text-sm text-[#666666] font-semibold">{label}</label>
      <input
        type="datetime-local"
        className="w-36 px-2 py-3 rounded-md bg-[#F2EFFF] focus:outline-none focus:border-purple focus:ring focus:ring-[#C7B5DE]"
        placeholder="Select a date"
        ref={ref}
        {...props}
      />
      {errors[errorName]&&<p className=" text-sm text-red-500">{errors[errorName].message}</p>}
    </div>
  );
});




export const RadioInput = forwardRef(({ label, handleInputChange, ...props }, ref) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        className="placeholder:text-[#666666] text-base bg-[#F2EFFF]"
        ref={ref}
        {...props}
        // value={value}
        // checked={selectedValue === value}
        // onChange={handleInputChange}
      />
      <span className="">{label}</span>
    </label>
    )
});

// export const DatePickerInput=({label,startDate,setDate})=>{
//   return (
//   <div class="relative w-[95%]">
//     <label className=" text-sm text-[#666666] font-semibold">{label}</label>
//     <input type="date" id="datepicker" name="datepicker" class="w-[100%] px-2 py-3 rounded-md bg-[#F2EFFF] focus:outline-none focus:border-purple focus:ring focus:ring-[#C7B5DE] " placeholder="Select a date"/>
//   </div>
//   );
// }

export const SelectInput=forwardRef(({label, initialOption, options, ...props}, ref)=>{
  return (
    <div>
        <label className=" text-sm text-[#666666] font-semibold">{label}</label>
        <select className="block w-full py-2 px-3   rounded-md shadow-sm focus:outline-none focus:ring-purple focus:border-purple bg-[#F2EFFF]" ref={ref} {...props}>
        <option disabled>{initialOption}</option>
        {options.map((option)=>{
          return (
            <option className=" hover:bg-purple " value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
});


export const CheckboxInput = forwardRef(({label,checked,toggleCheckbox,...props},ref) => {


  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-purple-500 transition duration-150 ease-in-out mr-2 rounded bg-[#F2EFFF]"
        ref={ref}
        {...props}
      />
      {/* <svg
        className={`h-6 w-6 fill-current ${checked ? 'block' : 'hidden'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.293 10.293a1 1 0 011.414 0l3 3a1 1 0 001.414-1.414L7.414 10l2.293-2.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414z"
          clipRule="evenodd"
        />
      </svg> */}
      <span className="text-sm text-[#666666] font-semibold">{label}</span>
    </label>
  );
});

export const ToggleSwitchInput = forwardRef(({ label, checked, toggleSwitch, ...props }, ref) => {
  return (
    <label className="relative flex items-center gap-4 group pb-2 text-sm">
      <input
        ref={ref}
        type="checkbox"
        className="absolute left-0 -translate-x-1 w-full h-full peer appearance-none rounded-md cursor-pointer"
        {...props}
      />
      <span className="w-10 h-4 flex items-center flex-shrink-0 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-purple after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 cursor-pointer"></span>
      {label}
    </label>
  );
});




