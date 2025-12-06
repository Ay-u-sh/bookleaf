import FormControl from "./FormControl";

function TextAreaField(props) {
  const data = props.data;
  const handleChange = (event)=>{
    const newText = event.target.value;
    props.onChange(props.data.htmlFor,newText)
  }
  return (  
    <FormControl label = {data.label} htmlFor={data.htmlFor} helper = {data.helper} iconName={data.iconName}>
      <textarea
        value = {props.value}
        onChange={handleChange}
        {...data.htmlProps}
      />
    </FormControl>
  );
}

export default TextAreaField;
