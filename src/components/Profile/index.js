import React from 'react';

import { ProfileSkillSection,ProfileWrapper,Title,TitleSpan,ProfileList,ProfileItem,ProfileItemSpan,Skills
    ,SkillsDesc,Bar,BarParent,BarPerc,BarTitle,ParentSpan} from './style';
import axios from 'axios';

class Profile extends React.Component {

    state = {
        profile: {
            skills: []
        }
    }

    componentDidMount () {
        axios.get('js/data.json').then(res => {
            this.setState({
                profile: res.data.profile
            });
        });
    }

    render() {
        const {profile} = this.state;
        const {skills} = this.state.profile;
        const skillsList = skills.map((skill) => {
            return (
                <Bar key={skill.id}>
                    <BarTitle>{skill.name}</BarTitle>
                    <BarPerc>{skill.value}%</BarPerc>
                    <BarParent>
                        <ParentSpan value={skill.value} />
                    </BarParent>
                </Bar>
            );
        });
        return (
            <ProfileSkillSection>
                <div className="container">
                    <ProfileWrapper>
                        <Title><TitleSpan>My </TitleSpan>Profile</Title>
                        <ProfileList>
                            <ProfileItem>
                                <ProfileItemSpan>Name</ProfileItemSpan>
                                {profile.name}
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileItemSpan>Birthday</ProfileItemSpan>
                                {profile.birthday}
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileItemSpan>Address</ProfileItemSpan>
                                {profile.address}
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileItemSpan>Phone</ProfileItemSpan>
                                {profile.phone}
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileItemSpan>Email</ProfileItemSpan>
                                {profile.email}
                            </ProfileItem>
                            <ProfileItem>
                                <ProfileItemSpan>Website</ProfileItemSpan>
                                <ProfileItemSpan web>{profile.website}</ProfileItemSpan>
                            </ProfileItem>
                        </ProfileList>
                    </ProfileWrapper>
                    
                    <Skills>
                        <Title>Some <TitleSpan>skills</TitleSpan></Title>
                        <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>

                        {skillsList}
                        
                    </Skills>
                    
                </div>
            </ProfileSkillSection>
        );
    }
}

export default Profile;