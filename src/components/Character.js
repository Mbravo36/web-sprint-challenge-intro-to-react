import React, {useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';


const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
`
export default function Character(props) {
    const {characterId} = props
    const [details, setDetails] = useState([])

    useEffect(()=> {
        axios.get('https://swapi.dev/api/people/?format=api')
        .then(res=> {
         setDetails(res.data)

        }).catch(err=>{
          console.log(err)
        })
      },[characterId])

      const newDetails = details.map(det =>{
          return det
      })

      return (
          <StyledFriend>
          <div className='container'>
              <li>Birth Year {newDetails.birth_year}</li>
              <li>Films {newDetails.films}</li>
              <li>gender {newDetails.gender}</li>
              <li>Starships {newDetails.starships}</li>
          </div>
          </StyledFriend>
      )

}