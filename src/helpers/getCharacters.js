
export const getCharacters = async () => {
    const api = 'https://apisimpsons.fly.dev/api/personajes?limit=635';
    const resp = await fetch(api);
    const data = await resp.json();

    const characters = data.docs.map(item => {

        return {
            id:item._id,
            name:item.Nombre,
            img:item.Imagen
        }
    })
    return characters;
}