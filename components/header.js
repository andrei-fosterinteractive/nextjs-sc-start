import styled from 'styled-components'

const Header = () => (
    <Container>
      Brand
    </Container>
)

const Container = styled.header`
  padding: 2rem 4rem;
  background-color: #eee;

  @media (min-width: 1200px) {
    max-width: 2000px;
    padding: 4rem 12rem;
  }
`

export default Header
