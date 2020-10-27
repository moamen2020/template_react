import React, { Component } from 'react';
import axios from 'axios'

import './style.js'
import { WorkSection, WorkPart, Icon, PartTitle, PartDisc, Link } from './style';

class Work extends Component {

    state = {
        works : []
    }

    componentDidMount () {
        axios.get('js/data.json').then( res => {this.setState({ works : res.data.works})});
    }

    render() {

        const {works} = this.state;

        const WorkList = works.map( (workItem) => {
            return (
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Link />
                    <PartDisc>{workItem.body}</PartDisc>
                </WorkPart>
            )
        })

    return (
        <WorkSection>
            <div className="container">
                {WorkList}
            </div>
        </WorkSection>
    )
    }
}

export default Work;