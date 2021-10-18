import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ReactStars from 'react-stars'

const Review = (props) => {
    return (
        <Card id="Review">
            <Card.Header><Image id="avatareview" src={props.image} /><p>{props.name}</p></Card.Header>
            <Card.Body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <label id="label">17/10/21</label>
                <ReactStars id="stars" count={5} size={24} edit={0} color1={'#ffa534'} />
            </Card.Body>
        </Card>
    )
}
export default Review;