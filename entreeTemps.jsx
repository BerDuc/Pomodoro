class EntreeTemps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tempsPause: 0,
            tempsTravail: 0
        }
        this.handleChangePause = this.handleChangePause.bind(this);
        this.handleChangeTravail = this.handleChangeTravail.bind(this); 
    }

    handleChangePause(e){
        this.setState({
            tempsPause: e.target.value
        });
        this.props.handleChangePause(this.state.tempsPause); 
    }
    handleChangeTravail(e){
        this.setState({
            tempsTravail: e.target.value
        })
        console.log("state travail: "+this.state.tempsTravail)
        this.props.handleChangeTravail(this.state.tempsTravail); 
    }

    render(){
        return <div>
            <label>Temps pour les périodes de travail</label>
            <input type="text" value={this.state.tempsTravail} onChange={this.handleChangeTravail} />
            <label>Temps pour les périodes de pause</label>
            <input type="text" value={this.state.tempsPause} onChange={this.handleChangePause} />
        </div>
    }
}