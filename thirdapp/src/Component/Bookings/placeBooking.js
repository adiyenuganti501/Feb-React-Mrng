import React,{Component} from 'react';
const BookingUrl = "http://localhost:8900/booking";

class PlaceBooking extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.hotelname,
            name:'',
            phone:''
        }
    }

    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        fetch(BookingUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>OrderId</label>
                            <input name="id" value={this.state.id} readOnly
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>HotelName</label>
                            <input name="hotel_name" value={this.state.hotel_name} readOnly
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name}
                            className="form-control"
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone" value={this.state.phone}
                            className="form-control"
                            onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Place Booking
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;