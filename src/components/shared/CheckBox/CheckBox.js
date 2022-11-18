import './CheckBox.css'

export const CheckBox = ({text}) => {
    return (
        <>
            <input id="checkbox" type='checkbox' className="search__checkbox"/>
            <label htmlFor="checkbox" className="search__label-text">{text}</label>
        </>
    )
}