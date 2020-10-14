class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            tempsPause: 5,
            tempsTravail: 25,
            chronoAuto: false
        }
        this.handleChangePause = this.handleChangePause.bind(this); 
        this.handleChangeTravail = this.handleChangeTravail.bind(this);
        this.handleChangeChrono = this.handleChangeChrono.bind(this); 
    }

    handleChangePause(temps){
        this.setState({
            tempsPause: temps
        });
    }  
    

    handleChangeTravail(temps){
        this.setState({
            tempsTravail: temps
        });
    }

    handleChangeChrono(checked){
        this.setState({
            chronoAuto: checked
        });
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
                        />                    
                    </div>
                    <div className="column">
                        <Settings
                            tempsPause = {this.state.tempsPause}
                            tempsTravail = {this.state.tempsTravail} 
                            handleChangePause={this.handleChangePause} 
                            handleChangeTravail={this.handleChangeTravail}
                            handleChangeChrono={this.handleChangeChrono}
                        />              
                    </div>    
                </div>
            </div>
        </div>
    }
}



ReactDOM.render(<App />, document.getElementById('app')); 