export const InputField = ({
  label,
  onChange,
  name,
  placeholder,
  form,
  type,
}) => (
  <div class="input-container mt-3 mx-1">
    <label for={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={form.values[name]}
    />
  </div>
);

const Mapper = {
  default: InputBox,
};

export const Input = (props) => {
  const Component = Mapper[props.type] || Mapper.default;
  return <Component {...props} />;
};

Input.defaultProps = {
  type: "default",
};
