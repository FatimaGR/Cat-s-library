import "../styles/Create.css"

export function Input({ id, name, type="text", value, onChange, label, placeholder="", classInput, classDiv}) {
  return (
    <div key={id} className={classDiv}>
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classInput}
      />
    </div>
  )
}

export function TextArea({ id, name, value, onChange, label, placeholder="", classDiv}) {
  return (
    <div key={id} className={classDiv}>
      <label htmlFor={id || name}>{label}</label>
      <textarea
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-area"
      />
    </div>
  )
}
