import styled from 'styled-components';

export const SocialSection = styled.div`
    height: auto;
    overflow: hidden;
`;

export const SocialSingle = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${props => props.name === 'facebook' ? '#3b5998' : ''};
    background:${props => props.name === 'twitter' ? '#498cbf' : ''};
    background:${props => props.name === 'pin' ? '#cc2127' : ''};

    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`;


export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
`;

export const SocialPar = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`;

export const SocialSpan = styled.span`
    display: block;
    margin-bottom: 8px;
`;

export const SpanInfo = styled.span`
    font-weight: normal;
`;