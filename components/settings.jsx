function Settings({ 
    tempsTravail, 
    tempsPause, 
    handleChangeTravail, 
    handleChangePause, 
    handleChangeChrono, 
    handleChangeAlarm
}){     
        return <div className="section">
            <div>
                <label className="label">Temps pour les périodes de travail</label>
                <input type="text" className="input" value={tempsTravail} onChange={handleChangeTravail} />
            </div>
            <div>
                <label className="label">Temps pour les périodes de pause</label>
                <input type="text" className="input" value={tempsPause} onChange={handleChangePause} />
            </div>
            <div>
                <label className="label">Démarrer automatiquement le chrono suivant  
                    <input className="checkbox" type="checkbox" onChange={handleChangeChrono}/>
                </label>
            </div>
            <label className="label">Choisir sa sonnerie</label>
            <SelecteurSons 
                alarmes={alarmes}
                handleChange={handleChangeAlarm}
            /> 
        </div>    
}