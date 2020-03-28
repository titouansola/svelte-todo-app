<script>
	import Todo from '../components/Todo.svelte';

	export let todoList = [];
</script>

<div class="todo-list">
	{#each todoList as todo}
		<Todo on:toggle on:delete todo={todo}></Todo>
	{/each}
</div>

<style>
</style>