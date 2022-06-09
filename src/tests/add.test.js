import {
    tasksHtml, addTask, createTasks, getFromLocalStorage,
  } from '../modules/add.js';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock;

const mydom = new JSDOM (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<title>My to Do</title>
</head>
<body class="dflex">

	<h1 id="my-todo-title">✔️ My todo list ✔️</h1>
	<main class="dflex">
		<header class="header dflex">
			<h3 class="h-title">Today's To Do</h3>
			<span class="material-symbols-outlined autorenew">
				autorenew
			</span>
		</header>
		
		<form class="form" class="dflex">
			<input type="text" placeholder="Add to your list..." class="input-form" autofocus>
			<button class="material-icons submit" type="submit">
				keyboard_return
			</button>
		</form>

		<ul class="tasks"> </ul>
		
		<button type="button" class="clear">
			clear all completed
		</button>
	</main>
</body>
</html>`)


describe('tasksHtml', () => {
  test('returns a string', () => {
    expect(typeof tasksHtml(2,"desc")).toBe('string')
  })
})

describe('addTask', ()=> {
  const inputForm = mydom.window.document.querySelector('.input-form');
  inputForm.value = ""
  
  test('function is returned if value is empty',()=> {
    expect(addTask(inputForm)).toBe(undefined)
  })

  inputForm.value = "task1"
  
  addTask(inputForm)

  test('new task has been added', () => {
    expect(JSON.parse(localStorage.store.todoTasks).length).toBe(1)
  })

  test('new task is task1', () => {
    expect(JSON.parse(localStorage.store.todoTasks)[0].description).toBe("task1")
  })
  
  const allTasks = mydom.window.document.querySelector('.tasks');
  createTasks(allTasks)
  const list = [...mydom.window.document.querySelectorAll('.list')]
  
  test('new task added to the DOM',()=> {
    expect(list.length).toBe(1)
  })
})
