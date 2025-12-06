export default function FormControl({htmlFor, label, iconName,helper, wrapperClassName, children}){
    return(
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            <div className="input-wrapper">
            <span className="input-icon material-symbols-rounded">{iconName}</span>
                {children}
            </div>
            <small className="hint">{helper}</small>
        </div>
    );
}