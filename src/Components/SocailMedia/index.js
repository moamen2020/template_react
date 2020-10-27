import React, { Component } from 'react'
import axios from 'axios'

import { SocialMed, Social, Icon, Para, Span, SpanInfo} from './style.js'

class SocialMedia extends Component {

    state = {
        Socials : []
    }

    componentDidMount () {
        axios.get('js/data.json')
        .then(res => {this.setState({Socials : res.data.social})} )
    }
    
    render () {

        const {Socials} = this.state;

        const InformaionSocial = Socials.map( (InforSocial) => {
            return (
                <Social key={InforSocial.id} infos={InforSocial.id}>
                    <Icon className={InforSocial.icon}></Icon>
                    <Para>
                        <Span>{InforSocial.title}</Span>
                        <SpanInfo>{InforSocial.body}</SpanInfo>
                    </Para>
                </Social>
            )
        })


        return (
            <SocialMed>
                {InformaionSocial}
            </SocialMed>

        )
}
}

export default SocialMedia;