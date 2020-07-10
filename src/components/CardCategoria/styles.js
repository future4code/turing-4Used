import styled from 'styled-components';

export const Container = styled.div `
max-width: 1024px;
margin: 15px auto 80px;
`

export const CardsHeader = styled.div `
`

export const GridProdutos = styled.div `
max-width: 1024px;
margin: 40px auto;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-gap: 16px;
`

export const GridItem = styled.div `
&:nth-child(1) {
  grid-area: 1 / 1 / 3 / 3;
}
&:nth-child(2) {
  grid-area: 1 / 3 / 2 / 4;
}
&:nth-child(3) {
  grid-area: 2 / 3 / 3 / 4;
}
&:nth-child(4) {
  grid-area: 1 / 4 / 2 / 5;
}
&:nth-child(5) {
  grid-area: 2 / 4 / 3 / 5;
}
&:nth-child(6) {
  grid-area: 1 / 5 / 3 / 7;
}
`
export const styles = {
  titulo: {
    marginBottom: 8
  },
  subtitulo: {
    marginBottom: 8
  },
  fio: {
    marginLeft: 0
  }
};