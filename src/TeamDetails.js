import './css/App.css'

const TeamDetails = () => {
    return(
        <div className='TeamDetails'>
            <div className='Size'>
                <label for="number_players">Number of Players</label>
                <select name="number_players" id = "number_players">
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                </select>
            </div>
            <div className='Name'>
                <label for="teamName">Name of the Team</label>
                <input type="teamName"></input>
            </div>
        </div>
        
    )
    
}

export default TeamDetails