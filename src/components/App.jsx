import React,{useRef} from 'react';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { Ring } from '@uiball/loaders'
import CharactersCard from './CharactersCard';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import SearchCharacter from './SearchCharacter';

export const App = () => {
  const {data,loading} = useFetchCharacters();
  const characterRef = useRef("");
  const {findedCharacters,handleSearch} = useSearchCharacter(data,characterRef)

  return (
    <>
        <h1 className='title'>Bienvenido al mundo de los Simpsons</h1>
        
        {/*Componente Buscador*/}
        <SearchCharacter characterRef = {characterRef} handleSearch={handleSearch}/>

        {loading && 
          <div className="ring">
            <Ring 
            size={40}
            lineWeight={5}
            speed={2} 
            color="black" 
            />
          </div>
        }
        {
          findedCharacters.map(item => (
            <CharactersCard key={item.id} {...item}/>
          ))
        }
    </>
  )
}

