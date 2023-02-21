//Imports de Use..
import { useState , useEffect} from 'react';


const FormComponent = () => {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    setTitle("") // serve para limpar o input


const handleSubmit = (e) => {
    e.preventDefault(); // Faz a página não atualizar e deixa o fluxo SPA acontecer
    console.log(title)
}

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="title">O que você vai fazer?</label>
                <input 
                type="text" 
                name="title" 
                value={title || ""}
                required
                placeholder="Título da Tarefa" 
                onChange={(e)=>setTitle(e.target.value)}>
                </input>
            </div>
            <div className="form-control">
                <label htmlFor="time">Duração</label>
                <input 
                type="text" 
                name="time" 
                value={time || ""}
                required
                placeholder="Tempo estimado em Horas" 
                onChange={(e)=>setTime(e.target.value)}>
                </input>
            </div>
            <input type="submit" value="Criar Tarefa"></input>
        </form>

    )

}


export default FormComponent;