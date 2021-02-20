import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import styled from 'styled-components';


const images = [
    { href: "/images/about/image1.jpg" },
    { href: "/images/about/image2.jpg" },
    { href: "/images/about/image3.jpg" },
    { href: "/images/about/image4.jpg" },
    { href: "/images/about/image5.jpg" },
    { href: "/images/about/image6.jpg" },
]

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <>
        <Title>Галерея <span>нашего кафе</span></Title>
        <SectionGallery>
            <Gallery>
                {images.map((item, index) => {
                    return (
                        <ItemWraper key={index}>
                            <Item
                                original={item.href}
                                thumbnail={item.href}
                                width="1024"
                                height="768"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={item.href} />
                                )}
                            </Item>
                        </ItemWraper>
                    )
                })}

            </Gallery>
        </SectionGallery>
    </>
)

export default MyGallery;

const Title = styled.h2`
    margin-bottom: 50px;
    text-align: center;

    span {
        font-style: italic;
        font-weight: 600;
    }
`;

const SectionGallery = styled.div`
    display: flex;
    margin: -15px;
    flex-wrap: wrap;

`;

const ItemWraper = styled.div`
    width: 370px;
    height: 260px;
    border-radius: 10px;
    background-color: #0f0f13;
    margin: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img {
        max-height: 300px;
        width: auto;
        transition-duration: .3s;
        cursor: zoom-in;

        :hover {
            transform: scale(1.3);
        }
    }
`;


