import { useState, useEffect } from "react";
import {ListGroup} from 'reactstrap';
import ListGroup1 from "./ListGroup1";

const Home = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/albums')
        .then((Response) => Response.json())
        .then((albums) => setAlbums(albums))
    });
    return ( 
        <ListGroup>
            {albums.map(({title,id}) => {
                return (
                    <ListGroup1
                        title ={title}
                        id = {id}
                    ></ListGroup1>
                );
            })}
        </ListGroup>
    );
}
export default Home;