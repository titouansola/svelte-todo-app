<script>
	import { createEventDispatcher } from 'svelte';

	let title = '';

	const dispatch = createEventDispatcher();

	const fireCreateEvent = () => dispatch('create', title);
</script>

<form on:submit|preventDefault={fireCreateEvent}>
	<input bind:value={title}/>
	<button type:submit>add</button>
</form>

<style>
form {
	display: flex;
	justify-content: center;
}
</style>