import styled from 'styled-components';

function Prelouder() {
    return (
        <Section>
            <svg version="1.0" width="150px" height="150px" viewBox="0 0 128 128" space="preserve">
                <rect x="0" y="0" width="100%" height="100%" fill="#0f0f13" />
                <g>
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#111114" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#f8f8f8" transform="rotate(30 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#e8e8e8" transform="rotate(60 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#d4d4d4" transform="rotate(90 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#bebebe" transform="rotate(120 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#a6a6a6" transform="rotate(150 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#8e8e8e" transform="rotate(180 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#737373" transform="rotate(210 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#5a5a5a" transform="rotate(240 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#414141" transform="rotate(270 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#21232b" transform="rotate(300 64 64)" />
                    <path d="M61.5.05v18.52a45.2 45.2 0 0 0-15.52 3.62l-9.3-16.1A63.67 63.67 0 0 1 61.5.05z" fill="#111114" transform="rotate(330 64 64)" />
                    <animateTransform attributeName="transform" type="rotate" values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
                        calcMode="discrete" dur="600ms" repeatCount="indefinite">
                    </animateTransform>
                </g>
            </svg>
        </Section>
    )
}

export default Prelouder;

const Section = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: #0f0f13;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
       position: absolute;
    }
`;
