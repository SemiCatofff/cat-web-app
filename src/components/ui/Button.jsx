import React from "react";
 
// const CustomButton = forwardRef(({buttonColor, textColor, className,...props}, ref) => {
//   return (
//     <button ref={ref}  className={` flex justify-between items-center gap-2 text-[${textColor}] bg-[${buttonColor}]  p-2 rounded-full ${className}`} {...props}>
//       {props.children}
//     </button>
//   );
// });

export default function CustomButton({ buttonColor, textColor, className ,children, ...attributes }) {
    return (
      <button className={` flex justify-center items-center gap-2  text-${textColor}  bg-${buttonColor}  p-3 w-32 rounded-full ${className}`} type="button" {...attributes}>
        {children}
      </button>
    );
}
