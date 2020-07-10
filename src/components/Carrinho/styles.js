import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles'; 

export const Total = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
export const Car = styled.div`
  width: 60vw;
  > * {
    margin: 10px;
  }
`
export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BotaoFinaliza = withStyles({ 
  root: {
    color: 'white',
  },
})(Button);