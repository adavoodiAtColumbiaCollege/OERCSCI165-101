class ScrollProgressBar {
	constructor(selector, root, target, callback) {
		// Get elements from selectors
		this.element = document.querySelector(selector);
		this.root = document.querySelector(root) || document.documentElement;
		this.target = document.querySelector(target);
		this.callback = callback;
		// Set events
		window.addEventListener("scroll", this.computeScroll.bind(this));
		window.addEventListener("resize", this.computeScroll.bind(this));
		// Compute to initialize
		this.computeScroll();
	}
	
	computeScroll() {
		// Compute percentage of scroll
		const scrollPercent = ~~((this.root.scrollTop - this.target.offsetTop - this.target.parentElement.offsetTop) / (this.target.clientHeight - this.root.clientHeight) * 100);
		// Call the callback function with scrollPercent as an argument
		if (this.callback && typeof this.callback === "function") 
			this.callback(scrollPercent);
	}
}
let progressBar = new ScrollProgressBar("#scroll-progress", null, "body", function(scrollPercent) {
	// Affect percentage value to the width and the label of the progress bar
	this.element.style.height = this.element.querySelector("span").innerText = Math.max(0, Math.min(100, scrollPercent)) + "%";
});