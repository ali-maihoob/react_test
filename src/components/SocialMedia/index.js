import React,{useState,useEffect} from 'react';
import axios from 'axios';

import {SocialPar,SocialSection,SocialSingle,SocialSpan,SpanInfo,Icon} from './style';

const Social = () => {

    const [ socials,setSocials ] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => {
            setSocials(res.data.social);
        });
    },[]);

    const socialsList = socials.map((social) => {
        return (
            <SocialSingle name={social.name} key={social.id}>
                <Icon className={social.icon}></Icon>
                <SocialPar>
                    <SocialSpan>{social.title}</SocialSpan>
                    <SpanInfo>{social.body}</SpanInfo>
                </SocialPar>
            </SocialSingle>
        );
    });

    return (
        <SocialSection>
            {socialsList}
        </SocialSection>
    );
}

export default Social;