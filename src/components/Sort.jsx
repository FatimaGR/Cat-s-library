function Sort({onSortChange, classname}){
  function handleSortChange (event){
    const { value } = event.target;
    onSortChange(value);
  }

  return(
    <div className={classname}>
      <label htmlFor="none">
        <input
          id="none"
          type="radio"
          name="sort"
          value=""
          onChange={handleSortChange}
        />
        none
      </label>
      <label htmlFor="name">
        <input
          id="name"
          type="radio"
          name="sort"
          value="name"
          onChange={handleSortChange}
        />
        name
      </label>
      <label htmlFor="author">
        <input
          id="author"
          type="radio"
          name="sort"
          value="author"
          onChange={handleSortChange}
        />
        author
      </label>
    </div>
  )
}

export default Sort