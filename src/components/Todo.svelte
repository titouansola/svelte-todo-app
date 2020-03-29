<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from 'svelte-awesome';
	import { trash, pencil } from 'svelte-awesome/icons';

	export let todo = {};
	const toggleButtonText = todo.done ? 'undo' : 'done';

	const dispatch = createEventDispatcher();

	const fireToggleEvent = () => {
		const updated = {...todo};
		updated.done = !updated.done;
		dispatch('toggle', updated);
	};
	const fireDeleteEvent = () => dispatch('delete', todo);
	const fireEditEvent = () => dispatch('edit');
</script>

<h5>{todo.title}</h5>
<div>
	<button class:success={!todo.done} class:danger={todo.done} on:click={fireToggleEvent}>
		{toggleButtonText}
	</button>
	<button on:click={fireEditEvent}>
		<Icon data={pencil}></Icon>
	</button>
	<button class="danger" on:click={fireDeleteEvent}>
		<Icon data={trash}></Icon>
	</button>
</div>

<style>
h5 {
	font-size: 14px;
}
</style>