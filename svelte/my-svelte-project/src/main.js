import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Flavia'
	}
});

export default app;