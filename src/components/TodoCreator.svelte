<script>
	import { createEventDispatcher } from 'svelte';

	let title = '';

	const dispatch = createEventDispatcher();

	const fireCreateEvent = () => {
		dispatch('create', title);
		title = '';
	}
</script>

<form on:submit|preventDefault={fireCreateEvent}>
	<h4>Add a task to  your todo list :</h4>
	<div>
		<input bind:value={title}/>
		<button type:submit>add</button>
	</div>
</form>

<style>
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
h4, div {
	display: inline-flex;
	justify-content: center;
}
</style>