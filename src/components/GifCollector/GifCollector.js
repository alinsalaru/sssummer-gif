import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
//https://developers.giphy.com/explorer
const GifCollector = (props) => {

    const {searchItem = 'cats'} = props

    const [gifCollection, setGifCollection] = useState([])

    const params = {
        api_key: 'INSERT YOUR API KEY HERE',
        q: searchItem,
        limit: 10,
    }  

    return (<div>
       <Typography> Gif collection from: {searchItem}</Typography>
    </div>)
}

export default GifCollector;