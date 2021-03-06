import { TeamProfile } from "../interfaces/teamInterfaces";
import React from "react";

/**
 * Form component: Graphic Interface for user to initialize new teams.
 * Using props, user can set the team's name, city, upload a logo picture, etc.
 */

class TeamCreator extends React.Component{
    constructor(props: {}){ // implicit any type of parameters...
        super(props);
        this.state = {
            colors: [],

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    state: {
        colors: string[];
    }


    handleSubmit(event: any){ // implicit any type of event...

        //REVIEW BUTTON SPEC MORE TO IMPROVE THIS
        // https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type
        
        event.preventDefault();
        this.setState({
            // save new team info
        });
    }

    render(){
        return(
            <>
                <form >
                    <label htmlFor="newName">Name for new team: &nbsp;</label>
                    <input type="text" placeholder="team name" value="" id="newName"></input><br/>
                    <label htmlFor="newCity">City: &nbsp;</label>
                    <input type="text" placeholder="city name" value="" id="newCity"></input><br/>
                    <label htmlFor="newAbrv">Abbreviation: &nbsp;</label>
                    <input type="text"placeholder="abbreviation" value="" id="newAbrv"></input><br/>

                    {/** add inputs for colors, logos */}
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        );
    }
}

export default TeamCreator;