import { useEffect, useState } from "react"

function Filter({filter, onFilterChange}){
  const themes = ["Cat protagonist","Cat care", "Feline fiction", "Cat lover author", "Other"]
  const [localFilter, setLocalFilter] = useState(filter)

  useEffect(() => {
    setLocalFilter(filter)
  }, [filter])

  function handleCheckbox(event){
    const {value, checked} = event.target
    let updatedFilter = [...localFilter]
    if (checked) {
      updatedFilter.push(value)
    } else {
      updatedFilter = updatedFilter.filter(theme => theme != value)
    }

    setLocalFilter(updatedFilter)
    onFilterChange(updatedFilter)
  }

  return(
    <div>
      {themes.map((theme) => (
        <label htmlFor={theme}>
          <input 
            type="checkbox"
            name={theme}
            value={theme}
            onChange={handleCheckbox}
          />
          {theme}
        </label>
      ))}
    </div>
  )
}

export default Filter