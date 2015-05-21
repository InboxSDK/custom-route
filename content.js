InboxSDK.load(1, 'custom-route').then(function(sdk) {

	var routeID = 'helloWorld/:country';

	sdk.Router.handleCustomRoute(routeID, function(customRouteView){
		customRouteView.getElement().textContent = 'hello world! ' + customRouteView.getParams().country;
	});

	sdk.NavMenu.addNavItem({
		name: 'Hello Canada',
		routeID: routeID,
		routeParams: {country: 'Canada'}
	});

});
