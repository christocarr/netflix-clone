import React from 'react'
import {HeaderContainer} from '../containers/header'
import {JumbotronContainer} from '../containers/jumbotron'
import {FaqsContainer} from '../containers/faq';
import {FooterContainer} from '../containers/footer'
import OptForm from '../components/opt-form'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try Now</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}