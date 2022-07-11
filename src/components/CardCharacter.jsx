import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {
		
	const character = useCharacterApi(resident)	
	return (
		<article>
				<img src={character?.image} alt="" />
				<h2>{character?.name}</h2>
				<p><span>Status: </span>{character?.status}</p>
				<p><span>Species: </span>{character?.species}</p>
				<p><span>Place of origin: </span>{character?.origin.name}</p>
				<p><span>Episodes: </span>{character?.episode.length}</p>
		</article>
	)
}

export default CardCharacter