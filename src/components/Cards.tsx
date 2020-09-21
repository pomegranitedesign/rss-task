import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Cards = () => {
	return (
		<Wrapper>
			<Card
				image="https://cdn.cnn.com/cnnnext/dam/assets/200520111123-01-pompeo-presser-0520-medium-plus-169.jpg"
				title="Pompeo's push to fire watchdog focuses attention on his transparency record"
				description="Secretary of State Mike Pompeo's push to fire the inspector general reportedly looking into his actions at the oldest US cabinet agency has refocused of the top US diplomat's transparency record after just ov..."
				source="cnn.com"
				length={26}
			/>

			<Card
				video="https://amd-ssl.cdn.turner.com/cnn/big/ads/2020/09/17/FirstPresidentialDebate_LiveFromCleveland_Politics_VersionA_NextTuesday_7p_15_H9TKM_576x324.mp4"
				title="'It's startling,' CNN reporter tours graveyard - CNN Video"
				source="cnn.com"
				length={50}
			/>

			<Card
				image="https://cdn.cnn.com/cnnnext/dam/assets/200729093333-01-biden-harris-notes-0728-exlarge-169.jpg"
				title="The Top 10 women Joe Biden might pick as vice president ranked"
				description="Joe Biden's got 88 days to make the biggest decision of his political life."
				source="cnn.com"
				length={58}
			/>

			<Card
				video="https://amd-ssl.cdn.turner.com/cnn/big/ads/2020/09/17/FirstPresidentialDebate_LiveFromCleveland_Politics_VersionA_NextTuesday_7p_15_H9TKM_576x324.mp4"
				title="The virus hunter who contracted coronavirus - CNN Video"
				source="cnn.com"
				length={60}
			/>

			<Card
				image="https://cdn.cnn.com/cnnnext/dam/assets/200520111123-01-pompeo-presser-0520-medium-plus-169.jpg"
				title="Pompeo's push to fire watchdog focuses attention on his transparency record"
				description="Secretary of State Mike Pompeo's push to fire the inspector general reportedly looking into his actions at the oldest US cabinet agency has refocused of the top US diplomat's transparency record after just ov..."
				source="cnn.com"
				length={26}
			/>

			<Card
				video="https://amd-ssl.cdn.turner.com/cnn/big/ads/2020/09/17/FirstPresidentialDebate_LiveFromCleveland_Politics_VersionA_NextTuesday_7p_15_H9TKM_576x324.mp4"
				title="'It's startling,' CNN reporter tours graveyard - CNN Video"
				source="cnn.com"
				length={50}
			/>

			<Card
				image="https://cdn.cnn.com/cnnnext/dam/assets/200729093333-01-biden-harris-notes-0728-exlarge-169.jpg"
				title="The Top 10 women Joe Biden might pick as vice president ranked"
				description="Joe Biden's got 88 days to make the biggest decision of his political life."
				source="cnn.com"
				length={58}
			/>

			<Card
				video="https://amd-ssl.cdn.turner.com/cnn/big/ads/2020/09/17/FirstPresidentialDebate_LiveFromCleveland_Politics_VersionA_NextTuesday_7p_15_H9TKM_576x324.mp4"
				title="The virus hunter who contracted coronavirus - CNN Video"
				source="cnn.com"
				length={60}
			/>

			<Card
				video="https://amd-ssl.cdn.turner.com/cnn/big/ads/2020/09/17/FirstPresidentialDebate_LiveFromCleveland_Politics_VersionA_NextTuesday_7p_15_H9TKM_576x324.mp4"
				title="The virus hunter who contracted coronavirus - CNN Video"
				source="cnn.com"
				length={60}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 80%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

export default Cards
