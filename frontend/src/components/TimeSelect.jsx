
function TimeSelect(props) {
  const handleChange = (event)=>{
    const newTime = event.target.value
    props.onChange('booked_time',newTime);
  }
  return(
      <div className="form-group">
        <label htmlFor="booked_time">Time</label>
      
        {/* <!-- Dropdown with left icon --> */}
        <div className="input-wrapper">
          <span className="input-icon material-symbols-rounded">schedule</span>
      
          <select 
            value = {props.value}
            id="booked_time"
            name="booked_time" 
            className="" 
            required

            onChange = {handleChange}
          >
            <option value="" disabled>Select a time</option>
            {props.timeSlots.map(time=>(
              <option key = {time} value = {time}>{time}</option>
            ))}
          </select>
        </div>
      
        <small className="hint">
          Choose any available time from the list.
        </small>
      </div>
  );
}

export default TimeSelect;
