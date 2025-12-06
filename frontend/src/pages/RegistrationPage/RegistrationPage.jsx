import TextField from '../../components/TextField';
import DurationField from '../../components/DurationField';
import WorkingDays from '../../components/WorkingDays';
import {businessRegistrationSchema} from './businessRegistration.schema.js'
import { useBusinessRegistrationForm } from './useRegistration.jsx';
import '../Styles/Form.css'

function BusinessRegistrationForm(props){
    const [submitting, business, updateBusinessRegistrationForm, submitHandler ] = useBusinessRegistrationForm({'appointment_duration':'00:15'});

    return(
        <div className="form-page">
        <form className="form-page-card" autoComplete="on" onSubmit={submitHandler}>
        <h1>Business Registration</h1>

        <TextField 
            value={business.business_name}
            data={businessRegistrationSchema.business_name}
            onChange={updateBusinessRegistrationForm}
        />

        <TextField 
            value={business.business_email}
            data={businessRegistrationSchema.business_email}
            onChange={updateBusinessRegistrationForm}
        />

        <TextField
            value = {business.business_phone}
            data = {businessRegistrationSchema.business_phone}
            onChange = {updateBusinessRegistrationForm}
        />
        
        <div className="form-row">
            <TextField 
                value={business.opening_time}
                data={businessRegistrationSchema.opening_time}
                onChange={updateBusinessRegistrationForm}
            />

            <TextField 
                value={business.closing_time}
                data={businessRegistrationSchema.closing_time}
                onChange={updateBusinessRegistrationForm}
            />
        </div>

        <DurationField 
            value={business.appointment_duration}
            onChange={updateBusinessRegistrationForm}
        />

        <WorkingDays
            data={business.working_days}
            onChange={updateBusinessRegistrationForm}
        />

        <button type="submit" className="btn-primary">
            {submitting ? 'Submitting' : 'Register Business'}
        </button>
        </form>
    </div>
    )
}

export default BusinessRegistrationForm;
