import React from 'react';

const CategoryCarousel = props => {

    // props 
    // title
    // an array of images or moveis to create images from 
    console.log(props)
    return (
        <div className="carousel">
            <div>{props.title}</div>
            <div className="carousel-row">
                {props.media.map(item => {
                    // console.log('item: ', item)
                    return (
                        <img key={item.id} src={item.image} alt={item.name}/>
                    )
                })}

            </div>
        </div>
        // once we start mapping, need a key
    )
}

export default CategoryCarousel;