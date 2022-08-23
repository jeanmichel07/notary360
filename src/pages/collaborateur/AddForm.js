import React, {useEffect, useState} from 'react'

const AddForm = ()=>{
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{

    })

    const handleClick = (e)=>{
        e.preventDefault()
    }
    return(
        <>
            <form>
                <div className="form-group">
                    <label>Nom</label>
                    <input className="form-control" type="text" name="nom" onChange={(e)=>setNom(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Adresse</label>
                    <input className="form-control" type="text" name="adress" onChange={(e)=>setAdress(e.target.value)}/>
                </div>
                <hr/>
                <div className="form-group">
                    <label>Pseudo</label>
                    <input className="form-control" type="text" name="pseudo" onChange={(e)=>setPseudo(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Enregistrer" onClick={handleClick}/>
                </div>
            </form>
        </>
    )
}

export default AddForm