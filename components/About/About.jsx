import styled from 'styled-components';

function About() {
    return (
        <Section>
            <LeftWraper>
                <h2>О нашем <span>кафе</span></h2>
                <ImageWraper>
                    <img src="/images/about/about.jpg" alt="about-img" />
                </ImageWraper>
            </LeftWraper>
            <RightWraper>
                <h3><span>Приглашаем всех,</span> кто любит вкусно <br /> и сытно поесть! </h3>
                <p>Кафе ... предлагает посетителям вкуснейшие блюда, которые готовятся по проверенным рецептам. В нашем меню: сочный свежий вкусный шашлык, нежнейшие люля-кебаб, шаурма, закуски, салаты, гарнир, соусы.</p>
                <p>А чтобы блюдо получилось вкусным, мы подходим к его приготовлению со всей душой!</p>
                <p>Отдельно стоит упомянуть про печь «тандыр», <br />в которой приготовленные блюда славятся незаменимым ароматом.</p>
                <p>Заходите к нам на обед или закажите горячие блюда с доставкой на дом</p>

            </RightWraper>
        </Section>
    )
}

export default About

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
    position: relative;


    span {
        color: #f7c77e;
    }

    @media (max-width: 1250px) {
            display: block;
            margin-bottom: 100px;
        }

        @media (max-width: 1000px) {
            margin-bottom: 60px;
        }
`;

const ImageWraper = styled.div` 
    border-radius: 10px;
    width: 670px;
    height: 500px;
    overflow: hidden;
    margin-top: 30px;

    @media (max-width: 1250px) {
            position: absolute;
            margin: 0;
            right: 0;
            width: 50%;
            height: 87%;
    }

    @media (max-width: 760px) {
        display: none;
    }

`;

const LeftWraper = styled.div`
    
    @media (max-width: 1250px) {
        h2 {
            margin-bottom: 30px;
            text-align: center;
        }
    }
    
`;

const RightWraper = styled.div`
    padding: 30px;
    background-color: #1d1d25;
    border-radius: 10px;

    h3 {
        width: 300px;
        font-style: italic;
    }

    p {
        width: 400px;
        margin: 15px 0;
    }

    @media (max-width: 1250px) {
        padding: 20px;
    }

    @media (max-width: 1000px) {
        p {
            font-size: 14px;
            width: 230px;
        }
    }

    @media (max-width: 760px) {
        h3 {
            width: 200px;
            font-style: italic;
        }
        p {
            font-size: 14px;
            width: 230px;
        }
    }
`;
