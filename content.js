InboxSDK.load(2, 'custom-route').then(sdk => {

	const routeID = 'helloWorld/:country';

	sdk.Router.handleCustomRoute(routeID, customRouteView => {
		customRouteView.getElement().textContent = 'hello world! ' + customRouteView.getParams().country;
	});

	sdk.NavMenu.addNavItem({
		name: 'Hello Canada',
		routeID: routeID,
		routeParams: {country: 'Canada'}
	});

});
