import { useState,useEffect } from "react";
import { getCharacterByName } from "../helpers/getCharacterByName"

export const useFetchCharacterByName = (character) => {
    const [state,setState] = useState({
        data:[],
        loading:true,
    });


    useEffect(() => {
        getCharacterByName(character)
            .then(characters => {
                setState({
                    data:characters,
                    loading:false

                })
            })
    },[character])
    
    return state;
}