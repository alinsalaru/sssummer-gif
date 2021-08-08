import { useParams } from "react-router-dom";
import GifCollector from "../GifCollector/GifCollector";

const WrapperGifCollector = () => {
    const { searchItem } = useParams();
    return <GifCollector searchItem={searchItem}></GifCollector>;
}

export default WrapperGifCollector;