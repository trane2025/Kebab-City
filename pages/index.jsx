import React from 'react';
import AboutKebab from '../components/HomePage/AboutKebab';
import Banner from '../components/HomePage/Banner';
import Contacts from '../components/HomePage/Contacts';
import HowToDelivery from '../components/HomePage/HowToDelivery';
import TermsOfDelivery from '../components/HomePage/TermsOfDelivery';
import Layout from '../components/layout/Layout';
import Container from '../components/UI/Container';
import styled from 'styled-components';

function index() {
    return (
        <Layout>
            <Background>
                <Banner />
                <Container>
                    <AboutKebab />
                    <HowToDelivery />
                    <TermsOfDelivery />
                    <Contacts />
                </Container>
            </Background>
        </Layout>
    )
}

export default index;

const Background = styled.div`
    background: url('/images/background/back.jpg') repeat-y center center;
    background-color: #101114;
`;