import React from 'react';
import {DropSection,DropTitle,Span,InputEmail,InputSub,InputSubmit,InputText,TextArea,Form,FormInput} from './style';

const Contact = () => {
    return (
        <DropSection>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text"  placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </DropSection>
    );
}

export default Contact;