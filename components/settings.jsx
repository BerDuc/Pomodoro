class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tempsPause: this.props.tempsPause,
            tempsTravail: this.props.tempsTravail,
            chronoAuto: false
        }
        this.handleChangePause = this.handleChangePause.bind(this);
        this.handleChangeTravail = this.handleChangeTravail.bind(this); 
        this.handleChangeChrono = this.handleChangeChrono.bind(this); 
    }

    handleChangePause(e){
        this.setState({
            tempsPause: e.target.value
        }, () => {this.props.handleChangePause(this.state.tempsPause)
        });
    }
    
         
    

    handleChangeTravail(e){
        this.setState({
            tempsTravail: e.target.value
        }, () => {this.props.handleChangeTravail(this.state.tempsTravail)
        });        
    }

    handleChangeChrono(e){
        this.setState({
            chronoAuto: e.target.checked
        }, () => {this.props.handleChangeChrono(this.state.chronoAuto)
        });
    }
    
    
    
    render(){
        return <div className="container">
            <div>
                <label className="label">Temps pour les périodes de travail</label>
                <input type="text" className="input" value={this.state.tempsTravail} onChange={this.handleChangeTravail} />
            </div>
            <div>
                <label className="label">Temps pour les périodes de pause</label>
                <input type="text" className="input" value={this.state.tempsPause} onChange={this.handleChangePause} />
            </div>
            <div>
                <label className="checkbox">Démarrer automatiquement le chrono suivant  
                    <input type="checkbox" checked={this.state.chronoAuto} onChange={this.handleChangeChrono}/>
                </label>
            </div>
        </div>
    }
}