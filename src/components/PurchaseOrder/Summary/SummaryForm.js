import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Checkbox,
  KeyValue,
} from '@folio/stripes/components';
import { Field } from 'redux-form';
import FieldWorkflowStatus from './FieldWorkflowStatus';

class SummaryForm extends Component {
  render() {
    const { initialValues: order } = this.props;
    return (
      <Row>
        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-orders.orderSummary.totalUnits" />}
            value={order.total_items}
          />
        </Col>
        <Col xs={6} md={3}>
          <br />
          <Field
            component={Checkbox}
            label={<FormattedMessage id="ui-orders.orderSummary.approved" />}
            name="approved"
            type="checkbox"
          />
        </Col>
        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-orders.orderSummary.totalEstimatedPrice" />}
            value={order.total_estimated_price}
          />
        </Col>
        <Col xs={6} md={3}>
          <FieldWorkflowStatus />
        </Col>
      </Row>
    );
  }
}

SummaryForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
};

export default SummaryForm;
