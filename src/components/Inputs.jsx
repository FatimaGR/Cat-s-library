export function Input({ id, name, type="text", value, onChange, label, placeholder=""}) {
  return (
    <div key={id}>
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export function TextArea({ id, name, value, onChange, label, placeholder=""}) {
  return (
    <div key={id}>
      <label htmlFor={id || name}>{label}</label>
      <textarea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
