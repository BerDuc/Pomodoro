class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            tempsPause: 5,
            tempsTravail: 25
        }
        this.handleChangePause = this.handleChangePause.bind(this); 
        this.handleChangeTravail = this.handleChangeTravail.bind(this); 
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
        console.log(this.state.tempsTravail);
    }

    render(){
        return <div>
            <div className="section">
                <div className="columns">
                    <div className="column">
                        <Pomodoro tempsTravail={this.state.tempsTravail} tempsPause={this.state.tempsPause}/>                    
                    </div>
                    <div className="column">
                        <EntreeTemps
                            tempsPause = {this.state.tempsPause}
                            tempsTravail = {this.state.tempsTravail} 
                            handleChangePause={this.handleChangePause} 
                            handleChangeTravail={this.handleChangeTravail}
                        />              
                    </div>    
                </div>
            </div>
        </div>
    }
}



ReactDOM.render(<App />, document.getElementById('app')); 