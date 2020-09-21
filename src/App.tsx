import React from 'react'
import styled from 'styled-components'
import { Cards } from './components'

const App = () => {
	return (
		<Wrapper>
			<Title>CNN - Breaking News, Latest News and Videos</Title>
			<Cards />
		</Wrapper>
	)
}

// STYLED COMPONENTS
const Wrapper = styled.div``

const Title = styled.h1`
	text-align: center;
	margin: 20px 0;
	font-size: 30px;
	font-weight: 300;
`

export default App
