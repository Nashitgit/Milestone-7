import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11)

    const addPlayer = () => {
        // setTeam(team => team + 1)
        const newTeam = team + 1;
        setTeam(newTeam)

    }

    const removePlayer = () => {
        // setTeam(team => team - 1)
        const newTeam = team - 1;
        setTeam(newTeam)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}