export function Input({ id, name, type="text", value, onChange, label}) {
  return (
    <div key={id}>
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export function TextArea({ id, name, value, onChange, label}) {
  return (
    <div key={id}>
      <label htmlFor={id || name}>{label}</label>
      <textarea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
