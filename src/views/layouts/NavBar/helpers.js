// Make sure correct tab is selected on refresh.  Send false when on a page not in navTabs.
export const getTabIndex = (navTabs) => {
	const index = navTabs.map(e => e.to).indexOf(window.location.pathname);
	return index > -1 ? index : false;
};
