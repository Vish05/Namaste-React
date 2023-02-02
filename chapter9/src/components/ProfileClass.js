import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        // best place to create state
        this.state = {
            count : 0,
            count2 : 0,
            name: "Dummy Name",
            location: "Dummy Location",
        }       
        console.log("Child - constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mits1209");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        console.log("Child - componentDidMount" + " " + this.props.name);
    };

    componentDidUpdate(prevProps, prevState) {
//         if(this.state.count ===! prevState.count) {
// code
//         }
        console.log("componentDidUpdate");
    };

    componentWillUnmount() {
        console.log("componentWillUnmount");
    };


    render() {
        console.log("child - render" + " " + this.props.name);
        const { count } = this.state;
    return (
        <div>
            <h2>This is a Class Component </h2>
            <img src={this?.state?.userInfo?.avatar_url} />
            <h3>Name: {this?.state?.userInfo?.name}</h3>
            <h3>location: {this?.state?.userInfo?.location}</h3>


            {/* <h3>Count: {count}</h3> */}
            {/* <button onClick={()=>{
                //We do not mutate state directly
                //Never do this.state = something
                this.setState({
                count: 1,
                count2: 2,
                });
                }}
                >
                SetCount
            </button> */}
    </div>
    );
    }
}
 export default ProfileClass;