import React from 'react';
import styled, {keyframes} from 'styled-components';
import rooms from '../../consts/building/rooms';


const swing = keyframes`
    from {text-indent : -400px;}
    to {text-indent : 0px;}
`;


const Frame = styled.div`
    max-width:1200px;
    max-height:768;
    overflow: hidden;
    text-indent: ${props => props.pos}px;
    background-color:blue;
    transition: text-indent 1s;
    animation: ${swing} 6s linear infinite;
    animation-direction: alternate;
`;

const Image = styled.img`
    max-width: initial;
    max-height: initial;
`;


// const Monitor = styled.img`
//   /* display: inline-block; */
//   /* animation: ${swing} 2s linear infinite; */
//   /* padding: 2rem 1rem; */
//   /* font-size: 1.2rem; */
// `;



const getImage = (imgs, room) => ({
    ...imgs,
    [room]: require(`./img/${room}.jpg`)
})

// const getImages = (rooms) =>
//     rooms.reduce(getImage, {})

const images = Object.values(rooms).reduce(getImage, {})

    // getImages(['kitchen', 'toilet', 'dining room,'])


console.log(images)


export default ({room}) => (
    <Frame>
        <Image src={images[room]} role="presentation" alt="" />
    </Frame>
)
