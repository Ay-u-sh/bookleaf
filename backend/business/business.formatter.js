const normalizeWorkingDays = (working_days)=>{
    const map = {
        'Mon':1,
        'Tue':2,
        'Wed':3,
        'Thu':4,
        'Fri':5,
        'Sat':6,
        'Sun':7
    }

    const resultDays = []

    for(const day in working_days){
        if(working_days[day])
            resultDays.push(map[day]);
    }
    return resultDays.sort();
}

const normalizeBusiness = (payload)=>{
    return{
        name:payload.business_name,
        email:payload.business_email,
        phone:payload.business_phone,
        opening_time:payload.opening_time,
        closing_time:payload.closing_time,
        appointment_duration: payload.appointment_duration,
        working_days:normalizeWorkingDays(payload.working_days)
    }
}

module.exports = {
    normalizeWorkingDays,
    normalizeBusiness
}