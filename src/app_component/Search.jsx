import React from 'react'


const Search =(props)=>{
    return(
        <div className="Search">
            <input 
            type="text"  
            placeholder="Ciudad" 
            onChange={({target:{value}}) => props.changeSearch(value)}
            value={props.cityValue}
            
            />
            <button onClick={props.weather}> ¿Debo de llevar mi paraguas? </button>
       
        </div>
    );
}



export default Search;