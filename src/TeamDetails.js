import {useEffect, useState} from 'react'
import './css/App.css'

const TeamDetails = () => {
    const [teamName, setTeamName] = useState('');
    const [teamSize, setTeamSize] = useState('');
    return(
        <div className='TeamDetails'>
            <div className='Size'>
                <label for="number_players">Number of Players</label>
                <select 
                name="number_players" 
                id = "number_players"
                required
                value = {teamSize}
                onChange = {(e) => setTeamSize(e.target.value)}
                >
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                </select>
            </div>
            <div className='Name'>
                <label for="teamName">Name of the Team</label>
                <input 
                type="teamName"
                required
                value = {teamName}
                onChange = {(e) => setTeamName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default TeamDetails