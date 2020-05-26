import React from 'react';
import axios from 'axios';
import {WorkSection,WorkTitle,WorkPart,Icon,Line,PartDesc,Span,PartTtile} from './style';

class Work extends React.Component {
    state = {
        works : []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({ works : res.data.works });
        });
    }
    render () {
        const {works} = this.state;
        const WorksList = works.map((workItem) => {
            return (
                <WorkPart key={workItem.id} first={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTtile>{workItem.title}</PartTtile>
                    <Line />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        })
        return (
            <WorkSection>
    
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {WorksList}
                </div>
    
            </WorkSection>
        );
    }
    
}

export default Work;