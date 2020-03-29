<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from 'svelte-awesome';
	import { check, times } from 'svelte-awesome/icons';

	export let todo = {};
	let title = todo.title || '';

	const dispatch = createEventDispatcher();

	const fireEditEvent = () => {
		const updated = {...todo};
		updated.title = title;
		dispatch('edit', updated);
	};
	const fireCancelEvent = () => dispatch('cancel');
</script>

<form on:submit|preventDefault={fireEditEvent}>
	<input type="text" bind:value={title}/>
	<div>
		<button class="success" type="submit">
			<Icon data={check}></Icon>
		</button>
		<button class="danger" on:click={fireCancelEvent}>
			<Icon data={times}></Icon>
		</button>
	</div>
</form>

<style>
form {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
input {
	margin: 20px 0;
}
</style>