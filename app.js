class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            tempsPause: 5,
            tempsTravail: 25
        }
       
    }

  

    render(){
        return <div>
            <Pomodoro tempsTravail={this.state.tempsTravail} tempsPause={this.state.tempsPause}/>
        </div>
    }
}



ReactDOM.render(<App />, document.getElementById('app')); 