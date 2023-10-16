import React from 'react';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { Ring } from '@uiball/loaders'
import Card from './Card';

const App = () => {
  const {data,loading} = useFetchCharacters();

  return (
    <>
        <h1 className='title'>Bienvenido al mundo de los Simpsons</h1>
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
          data.map(item => (
            <Card key={item.id} {...item}/>
          ))
        }
    </>
  )
}

export default App
