import{Outlet} from "react-router-dom";
import ProfileClass from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import {Component} from "react";

class About extends Component {
constructor(props) {
    super(props);

    console.log("Parent - constructor");
};



componentDidMount() {
   // Best Place to make API calls
    console.log("Parent - componentDidMount");
    this.timer= setInterval(() => {
        console.log("timer");
    }, 2000)
};

componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("unmount - setTimeOut removed");
  }

    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1> About Us Page</h1>
                <p>
                    This is the Namaste React Live Course
                </p>
                {/* <Outlet /> */}
                <ProfileClass name={"First Child"} xyz="abc"/>
                {/* <ProfileFunctionalComponent name={"Mitika"}/> */}
            </div>
        );
    };
    
};

export default About;

/**
 * Parent constructor
 * Parent render
 *          first Child - Constructor
 *          first Child - render
 *          second Child - Constructor
 *          second Child - render
 *          first Child - componentDidMount
 *          second Child - componentDidMount
 * Parent - ComponentDidMount
 *  
 */








