//
//
// ATENÇÃO: Não é necessário mexer neste arquivo.
// Novos componentes devem ir dentro do componente AppContainer
//
//

import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'

const tema = createMuiTheme({
	palette: {
	  primary: {
		main: "#00bcd5"
	  },
	  secondary: {
		main:"#cc1474"
    },
    textPrimary: {
      main: "#FF0000"
    },
    textSecondary: {
      main: "#FFFFFF"
    },
	}
})

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	insertionPoint: document.getElementById('jss-insertion-point'),
})

function App() {
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={tema}>
				<CssBaseline />
				<AppContainer />
			</MuiThemeProvider>
		</JssProvider>
	)
}

export default App