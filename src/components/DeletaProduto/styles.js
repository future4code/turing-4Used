import styled from 'styled-components';

export const styles = {
  card: {
    minWidth: 250,
    height: '100%',
    position: 'relative',
    margin: 4,
  },
  media: {
    height: 0,
    paddingTop: '100%',
    marginTop: 16,
    cursor: 'pointer'
  },
  value: {
    fontWeight: 700
  },
  bottomCard: {
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
      display: "flex",
      aligmItems: "center",
      justifyContent: "space-between"
  },
  chip: {
    backgroundColor: '#00BCD5',
    color: '#FFFFFF',
    fontWeight: 700
  },
};
export const IconContainer = styled.div `
  width: calc(100% - 16px);
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DeleteContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`
export const Titulo = styled.h1 `
  text-align: center;
  width: 100%;
`