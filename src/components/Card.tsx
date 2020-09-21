import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

interface CardProps {
	title: string
	description?: string
	source: string
	length: number
	image?: string
	video?: string
}

const Card = ({ title, description, source, length, image, video }: CardProps) => {
	return (
		<Wrapper>
			{video ? (
				<video autoPlay={false} controls width="100%">
					<source src={video} type="video/mp4" />
				</video>
			) : (
				<img src={image} alt="RSS" />
			)}

			<Info>
				<h1>{title}</h1>
				{description && <p>{description}</p>}
			</Info>

			<span>
				{source} • {length >= 60 ? moment.duration({ minutes: length }).humanize() : `${length}m`}
			</span>
		</Wrapper>
	)
}

// STYLED COMPONENTS
const Wrapper = styled.div`
	border: 1px solid lightgray;
	max-width: 450px;
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 3px;
	padding-bottom: 10px;
	position: relative;
	min-heigth: 200px;

	img {
		width: 100%;
		height: auto;
	}

	span {
		padding: 10px;
		color: darkgray;
		font-size: 10px;
		font-weight: 400;
		position: absolute;
		bottom: 0;
	}
`

const Info = styled.div`
	padding: 10px;
	margin-bottom: 20px;

	h1 {
		font-size: 22px;
		margin-bottom: 10px;
	}

	p {
		font-size: 16px;
	}
`

export default Card
