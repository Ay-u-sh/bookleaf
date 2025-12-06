import FormControl from "./FormControl";
function DateField(props){
    const data = props.data
    const handleChange = (event)=>{
        const newDate = event.target.value;
        props.onChange(props.data.htmlFor,newDate)
    }
    return (
        <FormControl label = {data.label} htmlFor={data.htmlFor} helper = {data.helper} iconName={data.iconName}>
            <input
                value = {props.value}
                {...data.htmlProps}
                onChange = {handleChange}
            />
        </FormControl>
    )
}

export default DateField;