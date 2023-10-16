

export const getCharacterByName = async (name) => {
    const api = `https://apisimpsons.fly.dev/api/personajes/find/${encodeURI(name)}`;
    const resp = await fetch(api);
    const data = await resp.json();

   const character = data.result.slice(0,3).map(item => {
    return {
        id: item._id,
        name:item.Nombre, 
        state:item.Estado, 
        img:item.Imagen, 
        history:item.Historia,
        occupation:item.Ocupacion,
        gender:item.Genero
    }
   })

    return character;
}