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


    handleSubmit(){
        
    }

    render(){
        const newName:string = document.getElementById("#newName").value();
        const newCity:string = document.getElementById("#newCity").value();
        const newAbrv:string = document.getElementById("#newAbrv").value();


        return(
            <>
                <form>
                    <label>Name for new team: &nbsp;</label>
                    <input type="text" placeholder="team name" value="" id="newName"></input><br/>
                    <label>City: &nbsp;</label>
                    <input type="text" placeholder="city name" value="" id="newCity"></input><br/>
                    <label>Abbreviation: &nbsp;</label>
                    <input type="text"placeholder="abbreviation" value="" id="newAbrv"></input><br/>

                    {/** add inputs for colors, logos */}
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        );
    }
}