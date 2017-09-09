import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(function(business, i) {
                        {/* Not the best to use an index as a key... but no reason to give a real uID for this project. */}
                        return <Business key={i} business={business} />;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;