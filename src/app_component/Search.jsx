import React from 'react'


const Search =(props)=>{
    return(
        <div className="Search">
            <input 
            className="px-5 text-left"
            type="text"  
            placeholder="Ingresa tu Ciudad" 
            onChange={({target:{value}}) => props.changeSearch(value)}
            value={props.cityValue}
            
            />
            <button onClick={props.weather} className="mx-3"> ¿Debo de llevar mi paraguas? </button>
       
        </div>
    );
}



export default Search;