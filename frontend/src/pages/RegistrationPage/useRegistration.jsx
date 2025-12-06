import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function useBusinessRegistrationForm(initial){
    const navigate = useNavigate();
    const [submitting,setSubmitting] = useState(false);
    const[business,setBusiness] = useState({
        'business_name':'',
        'business_email':'',
        'business_phone':'',
        'opening_time':'',
        'closing_time':'',
        'appointment_duration':'',
        'working_days':{
            'Mon':false,
            'Tue':false,
            'Wed':false,
            'Thu':false,
            'Fri':false,
            'Sat':false,
            'Sun':false
        },
        ...initial
    });

    const updateBusinessRegistrationForm = (name,value)=>{
        if(name === 'working_days'){
            setBusiness(prev => ({
                ...prev,
                'working_days':{
                    ...prev.working_days,
                    ...value
                }
                }
            ))
        }
        else{
            setBusiness(prev => ({...prev,[name]:value}))
        }
    }

    const submitHandler = async (event,retries = 3)=>{
        event.preventDefault();
        setSubmitting(true);
        for(let attempt = 1;attempt<=retries;attempt++){
            try{
                const response = await fetch('/api/register',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    credentials:'include',
                    body:JSON.stringify(business)
                })
                if(response.ok){
                    setSubmitting(false);
                    navigate('/verify-request')
                    break;
                }
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
    return[
        submitting,
        business,
        updateBusinessRegistrationForm,
        submitHandler
    ]
}