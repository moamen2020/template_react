import React , {useState, useEffect} from 'react';
import './style.js'
import { Portolio, ProTitle, Span, ProtList, ListItems, ImageWrapper, Images, OverLay, OverSpan } from './style.js'
import axios from 'axios'



const Portfolio = () => {

    const [ images , setImages ] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio)})
    }, [] )

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
            <Images src={imageItem.image} alt="" />
                <OverLay>
                    <OverSpan>
                        Show Image
                    </OverSpan>
                </OverLay>
            </ImageWrapper>
        )
    })

    return (
        <Portolio>
            <ProTitle><Span>My</Span> Portfolio</ProTitle>
            <ProtList>
                <ListItems active>All</ListItems>
                <ListItems>HTML</ListItems>
                <ListItems>Photoshop</ListItems>
                <ListItems>Wordpress</ListItems>
                <ListItems>Mobile</ListItems>
            </ProtList>
            
            <div className="box">
                {PortfolioImages}
            </div>
            
        </Portolio>

    )
}

export default Portfolio;