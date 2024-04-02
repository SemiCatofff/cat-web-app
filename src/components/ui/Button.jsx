const PurpleButton=({children,className=""})=>{
    return (
        <button className={'bg-purple text-white rounded-md p-2 w-full '+className}>
            {children}
        </button>
    )
}

const PurpleOutlineButton=({children, className="", onClick, type="button"})=>{
    return (
        <button type={type} className={'border-purple bg-white text-purple rounded-md p-2 w-full '+className} onClick={onClick}>
            {children} 
        </button>
    )
}
export {PurpleButton,PurpleOutlineButton};