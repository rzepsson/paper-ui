import { browser } from "$app/environment";

const STORAGE_KEY = "paperui:sidebar";

class SidebarState {
	open = $state(true);

	constructor() {
		if (browser) {
			this.open = localStorage.getItem(STORAGE_KEY) !== "closed";
		}
	}

	toggle() {
		this.open = !this.open;
		if (browser) {
			localStorage.setItem(STORAGE_KEY, this.open ? "open" : "closed");
		}
	}
}

export const sidebar = new SidebarState();
