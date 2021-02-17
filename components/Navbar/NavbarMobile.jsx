import styled from 'styled-components';
import Link from 'next/link';

function NavbarMobile({ links, route, activeBtn, setActiveBtn }) {
    return (
        <Section active={activeBtn}>
            <ul>
                {links.map((link, index) => {
                    return (
                        <LinkWraps key={index} active={route === link.href} onClick={() => setActiveBtn(false)}>
                            <Link href={link.href}>
                                <a>{link.label}</a>
                            </Link>
                        </LinkWraps>
                    )
                })}
            </ul>


            <WraperGeolocation>
                <div className="wraper-Geolocation-text">
                    <img src="/images/icons/geolocation.png" alt="geolocation" />
                    <div>
                        <p className='phone'>42-28-22</p>
                        <p className='adres'>ул.Славянская 20</p>
                    </div>
                </div>

                <div className="wraper-Geolocation-text">
                    <img src="/images/icons/geolocation.png" alt="geolocation" />
                    <div>
                        <p className='phone'>41-42-42</p>
                        <p className='adres'>ул. Медногорская, 121</p>
                    </div>
                </div>
            </WraperGeolocation>

        </Section>
    )
}

export default NavbarMobile;

const Section = styled.div`
    position: fixed;
    background-color: #0f0f13;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
    transition-duration: .4s;
    right: ${({ active }) => active ? '0' : '-100%'};
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1000px) {
        display: flex;
    }

    ul {
        margin-bottom: 30px;
    }
`;

const LinkWraps = styled.li`
    margin: 15px;
    a {
        font-weight: 600;
        color: ${({ active }) => active ? '#f7ce95' : '#d3d3d3'};
        text-align: center;
        display: block;
        font-size: 18px;
    }

    
`;

const WraperGeolocation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;

    .wraper-Geolocation-text {
        display: flex;
        align-items: center;
        margin: 10px;

        img {
            margin-right: 10px;
        }

        p {
            font-family: 'Secondary-font';
            font-weight: 400;
            font-size: 16px;
            color: rgb(218, 218, 218);
            line-height: 1.6;
        }

        .phone {
            font-weight: 800;
            font-size: 18px;
            color: white;
        }
    }
    
`;
