define([
    'jquery',
    'mage/translate'
], function ($, translate) {
    'use strict';

    var modalWidgetMixin = {
        _getOptionLabel: function (option) {
            var label = option.label;

            if (option.allowedProducts.length === 0) {
                label += " (" + translate("Out of Stock") + ")";
            }

            return label;
        }
    };

    return function (targetWidget) {
        $.widget('mage.configurable', targetWidget, modalWidgetMixin);

        return $.mage.configurable;
    };
});
