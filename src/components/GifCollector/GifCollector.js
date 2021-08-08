import { Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const GifCollector = (props) => {

    const {searchItem = 'cats'} = props

    const [gifCollection, setGifCollection] = useState([])

    // https://developers.giphy.com/explorer
    const params = {
        api_key: 'INSERT YOUR API KEY HERE',
        q: searchItem,
        limit: 10,
    }  

    return (<div>
       <Typography> Rendered gif collection from: {searchItem}</Typography>
    </div>)
}

export default GifCollector;