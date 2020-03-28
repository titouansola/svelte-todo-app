import axios from 'axios';
import TodoStore from '../store/todo';

const API_URL = 'https://titouan-sola-training-api.herokuapp.com/api/todo';

function request(method, url, data) {
	return axios({ method, url, data })
		.then((response) => {
			console.log(`Response from ${url} :`, response.data);
			return response.data;
		});
}

const fetchTodoList = () => {
	return request('GET', API_URL)
		.then(({ todos }) => {
			TodoStore.set(todos);
		})
}
const createTodo = (todo) => request('POST', API_URL, todo)
const updateTodo = (todo) => request('PUT', `${API_URL}/${todo.id}`, todo)
const deleteTodo = (todo) => request('DELETE', `${API_URL}/${todo.id}`)

export default {
	fetchTodoList,
	createTodo,
	updateTodo,
	deleteTodo,
}