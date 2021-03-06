import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import { Checkbox } from '@folio/stripes/components';

const FieldIsApproved = ({ disabled }) => {
  return (
    <Field
      component={Checkbox}
      label={<FormattedMessage id="ui-orders.orderSummary.approved" />}
      name="approved"
      type="checkbox"
      disabled={disabled}
      vertical
    />
  );
};

FieldIsApproved.propTypes = {
  disabled: PropTypes.bool,
};

FieldIsApproved.defaultProps = {
  disabled: false,
};

export default FieldIsApproved;
