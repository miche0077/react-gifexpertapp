export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category )}&limit=10&api_key=WSnAZXv4VPuRV7ZtuhFFn6UbhSuZU8nn`
    
    const resp = await fetch( url );
    //api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=10&api_key=WSnAZXv4VPuRV7ZtuhFFn6UbhSuZU8nn`
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

   return gifs;
}