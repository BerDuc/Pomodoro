function SelecteurSons ({alarmes, handleChange}){

    let options;
    if(alarmes){ 
    options = alarmes.length >0 
    && alarmes.map((alarme, i) =>{
        return (
            <option key={i} label={alarme.nom} value={alarme.src}/>
        );
    });
    }
    return <div>
        <select onChange={handleChange}>
            {options}
        </select>
    </div>
}