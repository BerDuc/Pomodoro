class SelecteurSons extends React.Component{

    constructor(props){
        super(props); 
        this.state = {
            alarmRef: this.props.alarmes[0].src
        }
        this.handleAlarmChange = this.handleAlarmChange.bind(this); 
        this.beep = this.beep.bind(this); 
    }

    handleAlarmChange(e){
        this.setState({
            alarmRef: e.target.value
        }, () => this.props.handleChange(this.state.alarmRef)); 
    }

    beep(){
        let alarmeChoisie = new Audio(this.state.alarmRef);
        alarmeChoisie.play(); 
    }

    render(){
        let options;
        if(this.props.alarmes){ 
        options = this.props.alarmes.length >0 
        && this.props.alarmes.map((alarme, i) =>{
            return (
                <option key={i} label={alarme.nom} value={alarme.src}/>
            );
        });
        }
        return <div>
            <div className="select">
                <select  id="selectSonnerie" onChange={this.handleAlarmChange}>
                    {options}
                </select>
                <input type="button" className="button is-small" value="Test son" onClick={this.beep} />
            </div>
            
        </div>
    
    }
}