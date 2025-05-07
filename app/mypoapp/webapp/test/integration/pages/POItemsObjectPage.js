sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'bosch.po.mypoapp',
            componentId: 'POItemsObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});