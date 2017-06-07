import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ComputedPriceComponent = (props) => {
    if (!props.value) {
        return null;
    }

    return (
        <Segment>
            <h1>Computed price : {props.value} €</h1>
        </Segment>
    );
};

ComputedPriceComponent.defaultProps = {
    value: 0,
};


ComputedPriceComponent.propTypes = {
    value: PropTypes.number,
};

export default ComputedPriceComponent;
