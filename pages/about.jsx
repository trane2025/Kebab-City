import styled from 'styled-components';
import About from '../components/About/About';
import MyGallery from '../components/Gallery/MyGallery';
import HowToDelivery from '../components/HomePage/HowToDelivery';
import TermsOfDelivery from '../components/HomePage/TermsOfDelivery';
import Layout from '../components/layout/Layout';
import Container from '../components/UI/Container';

function about() {
    return (
        <Layout title='О нас'>
            <PageAboutUs>
                <Container>
                    <About />
                    <HowToDelivery />
                    <TermsOfDelivery />
                    <MyGallery />
                </Container>
            </PageAboutUs>
        </Layout>

    )
}

export default about;

const PageAboutUs = styled.section`
    background: url('/images/background/back.jpg') repeat-y center center;
    background-color: #101114;
    padding: 100px 0;

    @media (max-width: 760px) {
        padding: 50px 0;
    }
`;
