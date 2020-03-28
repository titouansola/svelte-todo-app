<script context="module">
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
	import Loader from './components/Loader.svelte';
	import TodoCreator from './components/TodoCreator.svelte';
	import TodoList from './containers/TodoList.svelte';
	import TodoService from './services/todo';
	import TodoStore from './store/todo';
</script>

<script>
	let todoList = [];
	let refresh;
	const unsubscribe = TodoStore.subscribe(value => {
		todoList = [...value];
		refresh = false;
	});


	// Lifecycle methods
	onMount(() => {
		fetchTodoList();
		return unsubscribe;
	})


	// Service functions
	function fetchTodoList() {
		refresh = true;
		TodoService.fetchTodoList();
	}

	function updateTodo(todo) {
		const updatedTodo = {...todo};
		updatedTodo.done = !updatedTodo.done;
		
		TodoService.updateTodo(updatedTodo).then(fetchTodoList);
	}

	function deleteTodo(todo) {
		TodoService.deleteTodo(todo).then(fetchTodoList);
	}

	function createTodoByTitle(title) {
		const todo = {
			title,
			done: false,
			createdAt: new Date().toISOString()
		};
		TodoService.createTodo(todo).then(fetchTodoList);
	}


	// Handlers
	function toggleTodoHandler(event) {
		updateTodo(event.detail);
	}

	function createTodoHandler(event) {
		createTodoByTitle(event.detail);
	}

	function deleteTodoHandler(event) {
		deleteTodo(event.detail);
	}
</script>

<Header></Header>
<div class="app-container">
	<TodoCreator on:create={createTodoHandler}></TodoCreator>

	<div class="separator"></div>
	{#if refresh}
		<Loader></Loader>
	{:else}
		<TodoList
			on:toggle={toggleTodoHandler}
			on:delete={deleteTodoHandler}
			todoList={todoList}
		></TodoList>
	{/if}
</div>

<style>
	.app-container {
		width: 80%;
		max-width: 700px;
		margin: 50px auto;
	}

	.separator {
		width: 100%;
		height: 1px;
		background: radial-gradient(#e0e0e0, #fdfdfd 70%);
		margin: 30px 0;
	}

	@media (max-width: 500px) {
		.app-container {
			width: 95%;
		}
	}
</style>