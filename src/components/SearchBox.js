import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
     <div className='pa2'>
   <input 
   className = 'tc bg-lightest-blue ba b--green pa3' 
   type='search' 
   placeholder='search kittens'
   onChange={ searchChange }/>
     </div>
		);
	
}
export default SearchBox;