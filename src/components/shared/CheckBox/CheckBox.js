import './CheckBox.css';

export const CheckBox = ({ text, isChecked, setIsChecked }) => {
    return (
        <>
            <input onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} id="checkbox" type="checkbox" className="search__checkbox" />
            <label htmlFor="checkbox" className="search__label-text">
                {text}
            </label>
        </>
    );
};
