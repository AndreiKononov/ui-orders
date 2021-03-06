import { describe, beforeEach, it } from '@bigtest/mocha';
import { expect } from 'chai';

import setupApplication from '../../../helpers/setup-application';
import OrderTemplatesEditor from '../../../interactors/settings/OrderTemplates/OrderTemplatesEditor';

describe('Settings - Order templates - Create', function () {
  setupApplication();

  const orderTemplatesEditor = new OrderTemplatesEditor();

  beforeEach(async function () {
    this.visit('/settings/orders/order-templates/create');
    await orderTemplatesEditor.whenLoaded();
  });

  it('should be present', () => {
    expect(orderTemplatesEditor.isPresent).to.be.true;
  });
});
