import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { get, toString } from 'lodash';

import {
  KeyValue,
  Row,
  Col,
} from '@folio/stripes/components';
import formatDate from '../../Utils/formatDate';

const PhysicalView = ({ physical, vendors }) => {
  const materialSupplierId = get(physical, 'material_supplier');
  const materialSupplier = vendors.find((v => v.id === materialSupplierId));

  return (
    <Row>
      <Col xs={6}>
        <KeyValue
          label={<FormattedMessage id="ui-orders.physical.materialSupplier" />}
          value={get(materialSupplier, 'name', '')}
        />
      </Col>
      <Col xs={6}>
        <KeyValue
          label={<FormattedMessage id="ui-orders.physical.receiptDue" />}
          value={formatDate(get(physical, 'receipt_due'))}
        />
      </Col>
      <Col xs={6}>
        <KeyValue
          label={<FormattedMessage id="ui-orders.physical.receiptDate" />}
          value={formatDate(get(physical, 'expectedReceiptDate'))}
        />
      </Col>
      <Col xs={6}>
        <KeyValue
          label={<FormattedMessage id="ui-orders.physical.volumes" />}
          value={toString(get(physical, 'volumes'))}
        />
      </Col>
    </Row>
  );
};

PhysicalView.propTypes = {
  physical: PropTypes.object.isRequired,
  vendors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default PhysicalView;
