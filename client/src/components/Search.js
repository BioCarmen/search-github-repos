import React from 'react';
const Search = (props) => {

  return (
    <form className='search'>
      <h2 className="search__heading">Live Search: React Application</h2>
      <label className='search__label' htmlFor='search-input'>
        <input placeholder="Search for..." type='text' value={props.value} onChange={props.onChange} />
          <input onClick={props.onSubmit} type="submit" value="SEARCH" />
      </label>
    </form>
  )
}
export default Search;