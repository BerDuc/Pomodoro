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
        console.log("handleChangePause app")
        this.setState({
            tempsPause: temps
        });
    }

    handleChangeTravail(temps){
        console.log("handleChangeTravail app"+temps)
        this.setState({
            tempsTravail: temps
        });
        console.log(this.state.tempsTravail);
    }

    render(){
        return <div>
            <Pomodoro tempsTravail={this.state.tempsTravail} tempsPause={this.state.tempsPause}/>
            <EntreeTemps handleChangePause={this.handleChangePause} handleChangeTravail={this.handleChangeTravail}/>
        </div>
    }
}



ReactDOM.render(<App />, document.getElementById('app')); 