import React, { Component } from "react";
import { Link } from "react-router-dom";

class Well extends Component {
  // handleWells=()=>{
  //     retur
  // }
  handleWells = () => {
    return this.props;
  };
  render() {
    const { wells } = this.props;
    console.log("www", wells);

    const wellsList = wells.map(welll => (
      <div className="item" key={welll.id}>
        <span className="item-title">Unique Identifier</span>
        <span>{welll.uwid}</span>

        <span className="item-title">welll Name</span>
        <span>{welll.wellName}</span>

        <span className="item-title">License Number</span>
        <span>{welll.licenseNumber}</span>

        <span className="item-title">Status</span>
        <span>{welll.status}</span>

        <span className="item-title">Area</span>
        <span>{welll.area}</span>

        <span className="item-title">Field</span>
        <span>{welll.field}</span>

        <span className="item-title">Total Depth</span>
        <span>{welll.totalDepth}</span>

        <span className="item-title">Drilling Date</span>
        <span>{welll.drillDate}</span>

        <button>delete</button>
        <button>edit</button>
        <button>
          <Link to={`/wells/well/${welll.id}`}>Show</Link>
        </button>
        <button>
          <Link to={`/wells/well?uwid=${welll.uwid}`}>Show</Link>
        </button>
      </div>
    ));

    return (
      <React.Fragment>
        {wellsList}
        <div />
      </React.Fragment>
    );
  }
}

export default Well;
