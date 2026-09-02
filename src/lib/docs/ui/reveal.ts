type RevealOptions = { delay?: number };

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	node.classList.add("reveal");
	if (options.delay) node.style.transitionDelay = `${options.delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.classList.add("reveal-in");
			observer.disconnect();
		},
		{ rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
	);

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
}
