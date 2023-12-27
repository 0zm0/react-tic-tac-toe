import { useState } from "react"

export default function Player({initialName, symbol}) {
    const [name, setName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }

    function handleChangeName(event) {
        setName(event.target.value)
    }

    let playerNameHtml = isEditing 
                    ? <input type="text" required value={name} onChange={handleChangeName}/>
                    : <span className="player-name">{name}</span>;

    let buttonText = isEditing ? "Save" : "Edit"
    
    return (
        <li>
            <span className="player">
                {playerNameHtml}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonText}</button>
        </li>
    )
}