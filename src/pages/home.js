import React from 'react'
import {HeaderContainer} from '../containers/header'
import {JumbotronContainer} from '../containers/jumbotron'
import {FaqsContainer} from '../containers/faq';
import {FooterContainer} from '../containers/footer'
import OptForm from '../components/opt-form'
import Feature from '../components/feature'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try Now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}