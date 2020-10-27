import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const Profiles = styled.div`
    width: 50%;
    float: left
`

export const ProfileTitle = styled.h2`
    font-weight: normal;
    font-size: 35px
`

export const TitleSpan = styled.span`
    font-weight: bold
`

export const ProfileList = styled.ul`
    list-style: none
`

export const ListItem = styled.li`
    margin-button: 8px
`

export const ItemSpan = styled.span`
    display: inline-block;
    width: 80px;
    font-weight: bold
`

export const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skill = styled.div`
    width:50%;
    float: right
`

export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
    font-weight: normal
`

export const SkillsSpan = styled.span`
    font-weight: bold
`

export const Description = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Barks = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarksTitle =styled.span`
    float: left;
`

export const BarksPerc =styled.span`
    float: right;
    margin-right: 100px

`

export const Parent =styled.div`
    height: 7px;
    clear: both;
    background: #d2d2d2;
    position: relative;
    top: 5px
`

export const ParentSpan =styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 95%;
    width: ${props => props.Parse === "Par2" ? "90%": ''};
    width: ${props => props.Parse === "Par3" ? "80%": ''};
    width: ${props => props.Parse === "Par4" ? "70%": ''};
`