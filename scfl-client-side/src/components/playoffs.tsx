import Team from "../TeamClass";
import TeamTag from "./TeamTag";

function PlayoffsBracket(): JSX.Element{
    //const NC_1: Team = NC.teams.reduce(winPctSort(NC.teams));
    // NC_1 will refer to the team in the NC with the best winning percentage.
    // find NC_1 with a callback function passed to reduce in the NC teams array
    //(the callback should return the highest winning percentage)
    return(
        <>
            <h1>Playoffs</h1>
            <div>
                <h3>Anchor Bowl</h3>
                {/*<TeamTag teamName={NC_1.profile.name} logo={NC_1.profile.logo}/>*/}
                {/*<TeamTag teamName={NC_2.profile.name} logo={NC_2.profile.logo}/>*/}
            </div>
            <div>
                <h3>Ax Bowl</h3>
            </div>
            <div>
                <h2>Sock Bowl</h2>
            </div>
        </>
    );
}