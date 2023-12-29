import { useState } from "react"

export default function Player({initialName, symbol, isActive, setPlayerName}) {
    const [name, setName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)

        if(isEditing) {
            setPlayerName(symbol, name)
        }
    }

    function handleChangeName(event) {
        setName(event.target.value)
    }

    let playerNameHtml = isEditing 
                    ? <input type="text" required value={name} onChange={handleChangeName}/>
                    : <span className="player-name">{name}</span>;

    let buttonText = isEditing ? "Save" : "Edit"
    
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameHtml}
                <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing }
            <button onClick={handleEditClick}>{buttonText}</button>
        </li>
    )
}