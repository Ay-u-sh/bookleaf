import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
export function useBookingForm(){
    const { businessId } = useParams();
    const [status,setStatus] = useState('valid');
    const [business,setBusiness] = useState({});
    const [timeSlots,setTimeSlot] = useState([]);
    const [error,setError] = useState('')
    useEffect(()=>{
        fetch(`/api/business/${businessId}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.ok){
                setBusiness(data.data);
                const slots = generateTimeSlots(data.data.opening_time,data.data.closing_time,data.data.appointment_duration.minutes);
                setTimeSlot(slots); 
            }
        })
        .catch(error=>{
            setError(error);
        })
    },[])
    const [formData,setFormData] = useState({
        'customer_name':'',
        'customer_phone':'',
        'customer_email':'',
        'booked_date':'',
        'booked_time':'',
        'message':''
    })
    const [submitting,setSubmitting] = useState(false)
    const updateField = (name,value)=>{
        setFormData(prev => ({...prev,[name]:value}))
    }

    const generateTimeSlots = (opening, closing, intervalMin) => {
        const slots = [];

        // Convert opening time "09:00:00" → hours & minutes
        let [openH, openM] = opening.split(":").map(Number);
        let [closeH, closeM] = closing.split(":").map(Number);
      
        // Convert both times to total minutes from midnight
        let start = openH * 60 + openM;
        const end = closeH * 60 + closeM;
      
        // Loop and create time slots
        while (start <= end) {
          const hours = String(Math.floor(start / 60)).padStart(2, "0");
          const minutes = String(start % 60).padStart(2, "0");
          slots.push(`${hours}:${minutes}`);
      
          start += intervalMin; // add 15 minutes
        }
      
        return slots;
      };
      

    const submitHandler = async (event,retries = 3)=>{
        event.preventDefault();
        setSubmitting(true);
        
        for(let attempt = 1;attempt<=retries;attempt++){
            try{
                const bookingData = {
                   'id': business.id,
                   'business_email':business.email,
                   'business_name':business.name,
                   ...formData
                }
              
                const response = await fetch('/api/book',{
                    method: 'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(bookingData)
                })
                if(response.ok){
                    setSubmitting(false);
                    return;
                }
                else
                    throw new Error('Server error');
            }
            catch(error){
                console.error(error);
                if(attempt === retries){
                    console.log('Failed to submit after multiple attempts. Please try again later');
                    setSubmitting(false);
                    return;
                }
                await new Promise((resolve)=>setTimeout(resolve,200));
            }
        }
    }
    return [
        business,
        submitting,
        formData,
        timeSlots,
        updateField,
        submitHandler
    ]
}