import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import {
  Col,
  Datepicker,
  Row,
  Select,
} from '@folio/stripes/components';

import {
  EMPTY_OPTION,
  DATE_FORMAT,
  TIMEZONE,
} from '../../Utils/const';
import InventoryRecordTypeSelectField from '../../../settings/InventoryRecordTypeSelectField';
import normalizeEmptySelect from '../../Utils/normalizeEmptySelect';
import MaterialTypeField from '../Eresources/MaterialTypeField';

const OtherForm = ({ materialTypes, vendors }) => (
  <Row>
    <Col xs={6}>
      <Field
        component={Select}
        dataOptions={[EMPTY_OPTION, ...vendors]}
        fullWidth
        label={<FormattedMessage id="ui-orders.physical.materialSupplier" />}
        name="physical.materialSupplier"
        normalize={normalizeEmptySelect}
      />
    </Col>
    <Col xs={6}>
      <Field
        backendDateStandard={DATE_FORMAT}
        component={Datepicker}
        dateFormat={DATE_FORMAT}
        fullWidth
        label={<FormattedMessage id="ui-orders.physical.receiptDue" />}
        name="physical.receiptDue"
        timeZone={TIMEZONE}
      />
    </Col>
    <Col xs={6}>
      <Field
        backendDateStandard={DATE_FORMAT}
        component={Datepicker}
        dateFormat={DATE_FORMAT}
        fullWidth
        label={<FormattedMessage id="ui-orders.physical.expectedReceiptDate" />}
        name="physical.expectedReceiptDate"
        timeZone={TIMEZONE}
      />
    </Col>
    <Col xs={6}>
      <InventoryRecordTypeSelectField
        label="ui-orders.physical.createInventory"
        name="physical.createInventory"
      />
    </Col>
    <Col xs={6}>
      <MaterialTypeField
        materialTypes={materialTypes}
        name="physical.materialType"
      />
    </Col>
  </Row>
);

OtherForm.propTypes = {
  vendors: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  materialTypes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default OtherForm;