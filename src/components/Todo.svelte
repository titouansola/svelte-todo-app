<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from 'svelte-awesome';
	import { trash } from 'svelte-awesome/icons';

	export let todo = {};
	const toggleButtonText = todo.done ? 'undo' : 'done';

	const dispatch = createEventDispatcher();

	const fireToggleEvent = () => dispatch('toggle', todo);
	const fireDeleteEvent = () => dispatch('delete', todo);
</script>

<div class="todo">
	<h5>{todo.title}</h5>
	<div>
		<button class:success={!todo.done} class:danger={todo.done} on:click={fireToggleEvent}>
			{toggleButtonText}
		</button>
		<button class="danger" on:click={fireDeleteEvent}>
			<Icon data={trash}></Icon>
		</button>
	</div>
</div>

<style>
	.todo {
		background-color: #fafafa;
		border: 1px solid #e0e0e0;
		border-radius: 5px;
		display: flex;
		padding: 0 30px;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0;
	}

	h5 {
		font-size: 14px;
	}
</style>