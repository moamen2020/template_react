import React, { Component } from 'react'
import axios from 'axios'
import { ProfileSkills, Profiles, ProfileTitle, TitleSpan, ProfileList, ListItem, ItemSpan, SpanWeb, Skill, SkillsTitle, SkillsSpan, Description, Barks, BarksTitle, BarksPerc, Parent, ParentSpan } from './style.js'

class Profile extends Component {

    state = {
        Parcent : []
    }

    componentDidMount () {
        axios.get('js/data.json')
        .then(res => {this.setState({Parcent : res.data.Profile})})
    }

    render () {

        const {Parcent} = this.state;

        const Parcents = Parcent.map( (ParcentList) => {
            return (
                <Barks key={ParcentList.id}>
                    <BarksTitle>{ParcentList.name}</BarksTitle>
                    <BarksPerc>{ParcentList.percent}</BarksPerc>
                    <Parent>
                        <ParentSpan Parse={ParcentList.Pars}></ParentSpan>
                    </Parent>
                </Barks>
            )
        })

    return (
        <ProfileSkills>
            <div className="container">
                <Profiles>
                    <ProfileTitle> My <TitleSpan>Profile</TitleSpan></ProfileTitle>
                    <ProfileList>
                        <ListItem>
                            <ItemSpan>Name</ItemSpan>
                            Moamen Omar
                        </ListItem>
                        <ListItem>
                            <ItemSpan>Birtday</ItemSpan>
                            10/6/2000
                        </ListItem>
                        <ListItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain Shams
                        </ListItem>
                        <ListItem>
                            <ItemSpan>Phone</ItemSpan>
                            0114 494 4981
                        </ListItem>
                        <ListItem>
                            <ItemSpan>Email</ItemSpan>
                            moamen@moamen.com
                        </ListItem>
                        <ListItem>
                            <ItemSpan>Website</ItemSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ListItem>
                    </ProfileList>
                </Profiles>

                <Skill>
                    <SkillsTitle>Some <SkillsSpan>Skills</SkillsSpan></SkillsTitle>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</Description>
                    {Parcents}
                </Skill>

            </div>
        </ProfileSkills>
    )
    }
}

export default Profile;