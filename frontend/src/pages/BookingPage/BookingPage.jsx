import TextField from '../../components/TextField'
import DateField from '../../components/DateField'
import TimeSelect from '../../components/TimeSelect';
import TextAreaField from '../../components/TextAreaField';
import { bookingSchema } from './bookingForm.Schema';
import { useBookingForm } from './useBookingPage'
import '../Styles/Form.css'

function BookingForm(props){
    const [business,submitting,formData,timeSlots,updateField,submitHandler] = useBookingForm();

    return(
        <div className="form-page">
            <form className="form-page-card" autoComplete="on" onSubmit = {submitHandler}>
            
            {/* <!-- Business name heading --> */}
            <h1>{business.name}</h1>
            <p className="form-page-subtitle">Book your appointment</p>

            <TextField 
                value = {formData.customer_name}
                data = {bookingSchema.customer_name}
                onChange = {updateField}
            />
            <TextField 
                value = {formData.customer_phone}
                data = {bookingSchema.customer_phone}
                onChange = {updateField}
            />
            <TextField 
                value = {formData.customer_email}
                data = {bookingSchema.customer_email}
                onChange = {updateField}
            />

            <DateField
                value = {formData.booked_date}
                data = {bookingSchema.booked_date}
                onChange = {updateField}
            />

            {/* Time select replaced with TimeSelect component */}
            <TimeSelect
                value = {formData.booked_time}
                data={bookingSchema.booked_time}
                timeSlots = {timeSlots}
                onChange={updateField}
            />

            {/* Message replaced with TextAreaField component */}
            <TextAreaField
                value = {formData.message}
                data={bookingSchema.message}

                onChange={updateField}
            />

            <button type="submit" className="btn-primary" disabled = {submitting}>
                {submitting ? "Submitting…" : "Confirm Booking"}
            </button>
            </form>
        </div>
    );
}

export default BookingForm;