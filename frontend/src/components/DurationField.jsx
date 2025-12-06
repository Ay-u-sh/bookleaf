import { useDurationField } from "./useDurationField";
function DurationField(props){
    const [hours,minutes,hoursHandler,minutesHandler] = useDurationField();
    
    return(
        <div className="form-group">
            <label>Appointment Duration</label>
            <div className="duration-row">
            <span className="duration-icon material-symbols-rounded">timer</span>

            <div className="duration-part">
                <input
                    type="numeric"
                    id="duration_hours"
                    name="duration_hours"
                    min="0"
                    max="12"
                    value= {hours}
                    maxLength="2"
                    required

                    onChange = {(event)=>{props.onChange('appointment_duration',hoursHandler(event))}}
                />
                <span className="duration-label">Hours</span>
            </div>

            <div className="duration-part">
                <input
                    type="numeric"
                    id="duration_minutes"
                    name="duration_minutes"
                    min="0"
                    max="59"
                    step="5"
                    value= {minutes}
                    maxLength="2"
                    required

                    onChange = {(event)=>{props.onChange('appointment_duration',minutesHandler(event))}}
                />
                <span className="duration-label">Minutes</span>
            </div>
            </div>
            <small className="hint">
                Set how long a single appointment slot should be.
            </small>
        </div>
    )
}

export default DurationField;