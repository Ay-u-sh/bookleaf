import { useState } from "react";

export function useDurationField(h = '00',m = '15'){
    const[hours,setHours] = useState(h);
    const [minutes,setMinutes] = useState(m);

    const hoursHandler = (event)=>{
        const newHour = event.target.value
        setHours(newHour);

        const hh = newHour.toString().padStart(2,'0');
        const mm = minutes.toString().padStart(2,'0');

        return `${hh}:${mm}`;
    }

    const minutesHandler = (event)=>{
        const newMinutes = event.target.value;
        setMinutes(newMinutes);

        const hh = hours.toString().padStart(2,'0');
        const mm = newMinutes.toString().padStart(2,'0');

        return `${hh}:${mm}`;
    }

    return[
        hours,
        minutes,
        hoursHandler,
        minutesHandler,
    ]
}