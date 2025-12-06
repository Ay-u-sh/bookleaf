function WorkingDays(props){
    return(
        <div className="form-group">
            <label>Working Days</label>
            <div className="days-grid">
                {
                    Object.entries(props.data).map(([key,value])=>(
                        <label key = {key}>
                            <input 
                                type = "checkbox" 
                                name = "working_days"
                                checked = {value}
                                onChange = {(event)=>props.onChange('working_days',{[key]:event.target.checked})}
                            />
                            {key}
                        </label>
                    ))
                }
            </div>
            <small className="hint">Select all days on which you accept bookings.</small>
        </div>
    )
}

export default WorkingDays;