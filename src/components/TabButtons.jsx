function TabButton({isSelected,children,onSelect,...props}){
    return(
        <>
            <button className={isSelected ? "bg-black text-white border-3 border-black p-2 px-6 font-[600] rounded-[10px] cursor-pointer" : "bg-white text-black border-3 p-2 px-6 font-[600] rounded-[10px] cursor-pointer"} {...props} onClick={onSelect}>{children}</button>
        </>
    )
}
export default TabButton;