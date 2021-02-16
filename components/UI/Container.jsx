import styled from 'styled-components'

function Container(props) {
  return (
    <>
      <ContainerStyle>
        {props.children}
      </ContainerStyle>
    </>
  )
}

export default Container

const ContainerStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1250px) {
    width: 960px;
  }

  @media (max-width: 1000px) {
    width: calc(100% - 30px);
  }
  
  @media (max-width: 760px) {
    width: calc(100% - 30px);
  }
`;
