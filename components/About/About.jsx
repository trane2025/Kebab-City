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
    
    span {
        color: #f7c77e;
    }
`;

const ImageWraper = styled.div` 
    border-radius: 10px;
    width: 670px;
    height: 500px;
    overflow: hidden;
    margin-top: 30px;
`;

const LeftWraper = styled.div`
    

    h2 {
        
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
`;
