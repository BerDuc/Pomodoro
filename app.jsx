class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tempsPause: 5,
            tempsTravail: 25,
            chronoAuto: false, 
            alarme: ""
        }
        this.handleChangePause = this.handleChangePause.bind(this); 
        this.handleChangeTravail = this.handleChangeTravail.bind(this);
        this.handleChangeChrono = this.handleChangeChrono.bind(this); 
        this.handleChangeAlarm = this.handleChangeAlarm.bind(this); 
    }

    handleChangePause(e){
        this.setState({
            tempsPause: e.target.value
        });
    }  
    

    handleChangeTravail(e){
        this.setState({
            tempsTravail: e.target.value
        });
    }

    handleChangeChrono(e){
        this.setState({
            chronoAuto: e.target.value
        });
    }

    handleChangeAlarm(alarmRef){
        this.setState({
            alarme: alarmRef
        })
    }

    render(){
        return <div>
            <div className="section">
                <div className="columns">
                    <div className="column">
                        <Pomodoro 
                            tempsTravail={this.state.tempsTravail} 
                            tempsPause={this.state.tempsPause}
                            chronoAuto={this.state.chronoAuto}
                            alarm={this.state.alarme}
                        />                    
                    </div>
                    <div className="column">
                        <Settings
                            tempsPause = {this.state.tempsPause}
                            tempsTravail = {this.state.tempsTravail} 
                            handleChangePause={this.handleChangePause} 
                            handleChangeTravail={this.handleChangeTravail}
                            handleChangeChrono={this.handleChangeChrono}
                            handleChangeAlarm={this.handleChangeAlarm}
                        />              
                    </div>    
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app')); 