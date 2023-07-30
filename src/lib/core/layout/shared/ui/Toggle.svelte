<script>
	export let buttonFunction = (value) => {
		// console.log('Button clicked');
	};
</script>

<input type="checkbox" class="toggle-primary toggle toggle-lg" on:click={buttonFunction} />
