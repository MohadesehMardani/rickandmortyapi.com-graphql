import React, { Fragment, useEffect }  from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { setAPI } from "../actions/api";

const Characters = ({setAPI, api: {api}}) => {
    //const[charResults, setCharResults]= useState([]);   

    useEffect(() => {
        /*const getCharacters = async () => {
        const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;*/
        const API_URL = 'https://rickandmortyapi.com/api/character/?page=1';
        setAPI(API_URL);
        /*let data = await getCharacters();
        setCharResults(data.results);
        console.log('datafrom api:',data.results);*/
    },[setAPI]);
   
return(
    <Fragment>
        
        {
        api.map((item)=> {
            
            return(
            <div id={item.id} className="grid-container">  
               <div className="movie" >
                   <img src={item.image} alt={item.name}/>
                   <div className="movie-info">
                      <h3>{item.name}</h3>
                    </div>
                </div>
            </div>
            
            )
        })
    }    
    </Fragment>
)
};

Characters.propTypes = {
    setAPI : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    api: state.api
});
export default connect(mapStateToProps, {setAPI})(Characters); 