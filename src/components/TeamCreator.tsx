import { TeamProfile } from "../teamInterfaces";
import React from "react";

class TeamCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colors: [],

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    state: {
        colors: string[];
    }


    handleSubmit(event){
        event.preventDefault();
        this.setState({
            // save new team info
        });
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Name for new team: &nbsp;</label>
                    <input type="text" placeholder="team name" value="" id="newName"></input><br/>
                    <label>City: &nbsp;</label>
                    <input type="text" placeholder="city name" value="" id="newCity"></input><br/>
                    <label>Abbreviation: &nbsp;</label>
                    <input type="text"placeholder="abbreviation" value="" id="newAbrv"></input><br/>

                    {/** add inputs for colors, logos */}
                    <button type='submit'>Submit</button>
                </form>
            </>
        );
    }
}

export default TeamCreator;