import FormControl from "./FormControl";
function TextField(props){
    const data = props.data;
    const handleChange = (event)=>{
        props.onChange(data.htmlFor,event.target.value);
    }
    return(
            <FormControl label = {data.label} htmlFor={data.htmlFor} helper = {data.helper} iconName={data.iconName}>
                <input
                    value = {props.value}
                    onChange = {handleChange}
                    {...data.htmlProps}
                />

            </FormControl>
    )   
}

export default TextField;