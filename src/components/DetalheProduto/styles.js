import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
export const Total = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
export const Detalhe = styled.div`
  position: relative;
  background-color: #F2F2F2;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  min-height: 90%;
  width: 80%;
  padding: 40px;
  overflow-y: scroll;
  box-shadow:
    0px 1px 3px 0px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 2px 1px -1px rgba(0,0,0,0.12);
  border-radius: 4px;
    > * {
        margin: 16px;
    }
`
export const Dados = styled.div`
  grid-column: 1/2;
`
export const Imagens = styled.div`
  align-self: center;
  grid-column: 2/3;
`
export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PagamentoContainer = styled.div`
  margin-bottom: 24px;
`
export const GridProdutos = styled.div `
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
`
export const GridItem = styled.div `
  margin: 8px;
  width: calc(100%/3 - 24px);
  max-height: 240px;
  &:nth-child(1) {
      width: 100%;
  }
  &:nth-child(2) {
      width: calc(100%/2 - 16px);
  }
  &:nth-child(3) {
      width: calc(100%/2 - 16px);
  }
`
export const ItemImagem = styled.img `
  width: 100%;
  max-height: 240px;
  object-fit: cover;
`
export const Botaozao = withStyles({ //estilo do botão para texto branco
  root: {
    color: 'white',
    marginRight: 16
  },
})(Button);