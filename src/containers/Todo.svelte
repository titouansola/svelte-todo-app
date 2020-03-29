<script>
	import Todo from '../components/Todo.svelte';
	import TodoEdit from '../components/TodoEdit.svelte';
	export let todo = {};

	let editable = false;

	function toggleEdtionMode() {
		editable = !editable;
	}
</script>

<div class="todo">
	{#if editable}
		<TodoEdit
			on:edit
			on:edit={toggleEdtionMode}
			on:cancel={toggleEdtionMode}
			bind:todo
		></TodoEdit>
	{:else}
		<Todo
			on:delete
			on:toggle
			on:edit={toggleEdtionMode}
			bind:todo
		></Todo>
	{/if}
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
</style>