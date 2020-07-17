import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles'; 

export const HeaderContainer = styled.div`
  margin-bottom: 16px;
`;

export const HeaderElementos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  padding: 8px 0;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 10vw;
  height: 48px;
  text-align: left;
  img{
    height: 100%;
  }
  cursor: pointer;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const BotaoHeader = withStyles({ 
  root: {
    color: 'white',
  },
})(Button);