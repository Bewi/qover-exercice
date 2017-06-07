import React, { Component } from 'react';
import { Segment, Form, Input, Select, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from './quickQuoteActions';

import ComputedPrice from './ComputedPriceComponent';
import Nav from '../layout/NavComponent';

const cars = [
    { key: 'a', text: 'Audi', value: 'audi' },
    { key: 'b', text: 'BMW', value: 'bmw' },
    { key: 'p', text: 'Porsche', value: 'porsche' },
];

class QuickQuoteComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            driverName: '',
            car: '',
            price: 0,
        };
    }

    getPrice(e) {
        e.preventDefault();
        this.props.computePrice(this.state.driverName, this.state.car, this.state.price);
    }

    updateDriverName(event) {
        this.setState({ driverName: event.target.value });
    }

    updateCar(event, { value }) {
        this.setState({ car: value });
    }

    updatePrice(event) {
        this.setState({ price: event.target.value });
    }

    render() {
        return (
            <div>
                <Nav />
                <Segment>
                    <Form
                        onSubmit={e => this.getPrice(e)}
                        loading={this.props.pending}
                        error={this.props.error}
                    >
                        <Form.Field required error={this.state.dirty && !this.state.username}>
                            <label htmlFor="diverName">Driver name</label>
                            <input
                                type="text"
                                id="diverName"
                                name="diverName"
                                value={this.state.diverName}
                                onChange={e => this.updateDriverName(e)}
                            />
                        </Form.Field>
                        <Form.Field
                            label="Car"
                            control={Select}
                            options={cars}
                            placeholder="Car"
                            onChange={(e, value) => this.updateCar(e, value)}
                            value={this.state.car}
                            required
                        />
                        <Form.Field>
                            <label htmlFor="price">Price</label>
                            <Input
                                label={{ tag: true, content: 'VAT Included' }}
                                labelPosition="right"
                                type="number"
                                value={this.state.price}
                                onChange={e => this.updatePrice(e)}
                                required
                            />
                        </Form.Field>
                        <Button type="submit" color="green" fluid >GET PRICE</Button>
                    </Form>
                </Segment>
                <ComputedPrice value={this.props.computedPrice} />
            </div>
        );
    }
}

QuickQuoteComponent.propTypes = {
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    computedPrice: PropTypes.number.isRequired,
    computePrice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    pending: state.quickQuote.pending,
    computedPrice: state.quickQuote.computedPrice,
    error: state.quickQuote.error,
});

const mapDispatchToProps = dispatch => ({
    computePrice: (driverName, car, price) => dispatch(
        actions.computePrice(driverName, car, price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuoteComponent);
