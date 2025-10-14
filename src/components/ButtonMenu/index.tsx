const ButtonMenu = ({label, isLast}:{label: string, isLast?: boolean}) => {
    const hasBorder = isLast ? '' : 'lg:border-r-1 border-r-gray-500'

    return (
        <button 
            className={`cursor-pointer lg:min-w-[120px] lg:font-button lg:text-lg font-light
            ${hasBorder} hover:font-normal lg:active:bg-gray-50`}
        >
            {label}
        </button>
    )
}

export default ButtonMenu