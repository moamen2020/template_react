import React from 'react';
import {Homes, HomeInformation, HomeTitle, HomeInfo, HomeDisc, DiscSpan, Homebutton, } from './style.js'

const Home = () => {
    return (
        <Homes>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Creat With React Js</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDisc>
                        Iam a professional <DiscSpan>UX Designer</DiscSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDisc>
                    <Homebutton>Let's Begin</Homebutton>
                </HomeInformation>
            </div>
        </Homes>      
    )
}

export default Home;