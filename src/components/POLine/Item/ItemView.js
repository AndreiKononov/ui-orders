import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { get, toString } from 'lodash';
import { Link } from 'react-router-dom';

import {
  Col,
  KeyValue,
  Row,
} from '@folio/stripes/components';
import formatDate from '../../Utils/formatDate';
import ContributorView from './ContributorView';
import ProductIdDetails from './ProductIdDetails';

class ItemView extends Component {
  static propTypes = {
    poLineDetails: PropTypes.object.isRequired,
    identifierTypes: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { poLineDetails, identifierTypes } = this.props;

    return (
      <Fragment>
        <Row>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.title" />}
            >
              {get(poLineDetails, 'instanceId') ? (
                <Link to={`/inventory/view/${get(poLineDetails, 'instanceId')}`}>
                  {get(poLineDetails, 'title')}
                </Link>) : get(poLineDetails, 'title')
              }
            </KeyValue>
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.receivingNote" />}
              value={get(poLineDetails, ['details', 'receivingNote'])}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.subscriptionFrom" />}
              value={formatDate(get(poLineDetails, ['details', 'subscriptionFrom']))}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.subscriptionTo" />}
              value={formatDate(get(poLineDetails, ['details', 'subscriptionTo']))}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.subscriptionInterval" />}
              value={get(poLineDetails, ['details', 'subscriptionInterval'])}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.publicationDate" />}
              value={get(poLineDetails, 'publicationDate')}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.publisher" />}
              value={get(poLineDetails, 'publisher')}
            />
          </Col>
          <Col xs={6}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.edition" />}
              value={toString(get(poLineDetails, 'edition'))}
            />
          </Col>
          <Col xs={6}>
            <ContributorView contributors={poLineDetails.contributors} />
          </Col>
        </Row>
        <Row>
          <ProductIdDetails
            identifierTypes={identifierTypes}
            itemIdDetails={get(poLineDetails, ['details', 'productIds'], [])}
          />
        </Row>
        <Row>
          <Col xs={12}>
            <KeyValue
              label={<FormattedMessage id="ui-orders.itemDetails.description" />}
              value={toString(get(poLineDetails, 'description'))}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ItemView;
