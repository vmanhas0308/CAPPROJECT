sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bosch/po/mypoapp/test/integration/FirstJourney',
		'bosch/po/mypoapp/test/integration/pages/POsList',
		'bosch/po/mypoapp/test/integration/pages/POsObjectPage',
		'bosch/po/mypoapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bosch/po/mypoapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);