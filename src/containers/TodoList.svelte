<script>
	import Todo from '../containers/Todo.svelte';

	export let todoList = [];

	const todoTasks = todoList.filter((todo) => !todo.done);
	const doneTasks = todoList.filter((todo) => todo.done);
</script>

<div class="todo-list">
	<h4>Todo tasks</h4>
	{#if todoTasks.length > 0}
		{#each todoTasks as todo}
			<Todo on:edit on:toggle on:delete todo={todo}></Todo>
		{/each}
	{:else}
		<p>There's nothing to do! Get some rest and wash your hands!</p>
	{/if}
	<h4>Done tasks</h4>
	{#if doneTasks.length > 0}
		{#each doneTasks as todo}
			<Todo on:edit on:toggle on:delete todo={todo}></Todo>
		{/each}
	{:else}
		<p>Wake up! you got to do something!</p>
	{/if}
</div>

<style>
</style>