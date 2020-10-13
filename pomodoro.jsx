class Pomodoro extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            minutes: this.props.tempsTravail,
            secondes: 0,
            periode: "travail",
            pomodoros_accomplis: 0,  
            timer: null,
            btnValue: "Start",
        }
        this.alarm = new Audio("./ressources/analog-watch-alarm_daniel-simion.mp3"); 
        this.decrement = this.decrement.bind(this); 
        this.clickTimer = this.clickTimer.bind(this); 
        this.startTimer = this.startTimer.bind(this); 
        this.stopTimer = this.stopTimer.bind(this); 
        this.switchTimer = this.switchTimer.bind(this); 
        this.beep = this.beep.bind(this); 
    }

    static getDerivedStateFromProps(props, state){
        return {
            minutes: props.tempsTravail
        };
    }

    decrement(){
        if(this.state.secondes == 0){
            if(this.state.minutes == 0){
                this.stopTimer();
                this.switchTimer();
                this.beep();            
            } else {
                this.setState((state, props) => {
                    return {
                        minutes: state.minutes-1,
                        secondes: 59
                    }
                });
            }
        } else {
            this.setState((state, props) => {
                return {
                    secondes: state.secondes-1
                }
            });
        }
    }

    clickTimer(){
        if(this.state.timer == null){
            this.startTimer(); 
        } else {
            this.stopTimer(); 
        }
    }

    startTimer(){
        this.setState({
            timer: window.setInterval(this.decrement, 1000),
            btnValue: "Stop"
        })
    }

    stopTimer(){
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
            btnValue: "Start"
        }) 
    }

    switchTimer(){
        if(this.state.periode == "travail"){
            this.setState((state, props) =>{
                return {
                    periode: "pause",
                    runningStatus: "between",
                    pomodoros_accomplis: state.pomodoros_accomplis+1,
                    minutes: props.tempsPause
                }
            });
        } else {
            this.setState((state, props) =>{
                return {
                    periode: "travail",
                    runningStatus: "between",
                    minutes: props.tempsTravail
                }
            });
        }
    }

    beep(){
        this.alarm.play(); 
    }

    render(){
        return <div className="container">
            <div>
                <h1 className="title has-text-centered">Pomodoro</h1>
            </div>
            <div className="has-text-centered is-size-1">
                <p>{this.state.minutes}: {this.state.secondes.toString().padStart(2, '0')}</p>
            </div>            
            <div className="has-text-centered">
                <input className="button" type="button" value={this.state.btnValue} onClick={this.clickTimer} />  
            </div>
            <div className="section">
                <p>Nombre de pomodoros que vous avez fait: {this.state.pomodoros_accomplis}</p>      
            </div>               
        </div>
    }
}