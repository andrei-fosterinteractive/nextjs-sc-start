import styled from 'styled-components'

const Footer = () => (
    <Container>
      &copy; {new Date().getFullYear()} &middot; Site Copyright
    </Container>
)

const Container = styled.footer`
  padding: 2rem 4rem;
  background-color: #eee;

  @media (min-width: 1200px) {
    max-width: 2000px;
    padding: 4rem 12rem;
  }
`

export default Footer
