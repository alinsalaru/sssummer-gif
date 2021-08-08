import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GifCollector = (props) => {

    const {searchItem = 'cats'} = props

    const [gifCollection, setGifCollection] = useState([])
    useEffect(()=>{
        axios.get('https://api.giphy.com/v1/gifs/search', {params}).then(res=>{
            const {data} = res;
            let gifs = data?.data;
            console.log(data.data)
            let images = gifs.map((gif)=>gif.images.fixed_height_downsampled.url);
    
            setGifCollection(images)
        })
        console.log(gifCollection)
    })
    // https://developers.giphy.com/explorer
    const params = {
        api_key: 'YOUR API KEY HERE',
        q: searchItem,
        limit: 10,
    }  

    return (<div>
        {gifCollection.map((gif) => {
            return <img src={gif} />
        })}
    </div>)
}

export default GifCollector;