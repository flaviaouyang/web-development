<script>
	let name;
	let displayName = "You";
	let numLamb = 5;

	const incrementBtn = function () {
		return numLamb++;
	};

	const decrementBtn = function () {
		return numLamb--;
	};

	const nameInput = (e) => {
		name = e.target.value
	};

	const handleDisplayName = () => displayName = name;

</script>

<main>
	<h1>Hello {displayName}!</h1>
	<p>What should I call you?</p>
	<input type="text" autocomplete="off" autofocus on:input={nameInput}>
	<input type="submit" value="ENTER" on:click={handleDisplayName}>

	<h1>{displayName} got {numLamb} little lambs</h1>
	<button on:click={incrementBtn}>Increment</button>
	<button on:click={decrementBtn}>Decrement</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>