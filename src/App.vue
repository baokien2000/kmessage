<script lang="ts" setup>
import { computed, ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', completed: false },
  { id: id++, text: 'Learn JavaScript', completed: false },
  { id: id++, text: 'Learn Vue', completed: false }
])
const filterTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((todo) => !todo.completed) : todos.value
})
function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, completed: false })
  newTodo.value = ''
}

function removeTodo(todo: { id: number; text: string; completed: boolean }) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <!-- <div class="flex flex-col gap-2">
    <form @submit.prevent="addTodo" class="flex gap-2">
      <input
        class="h-10 px-3 rounded border border-black/10 outline-none"
        v-model="newTodo"
        required
        placeholder="new todo"
      />
      <button class="px-4 text-white h-10 rounded bg-black/80 hover:bg-black">Add Todo</button>
    </form>
    <button class="w-fit bg-black/10 px-3 rounded" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    <ul class="mt-3">
      <li
        v-for="todo in filterTodos"
        :key="todo.id"
        class="px-3 rounded group flex gap-2 justify-start h-10 hover:bg-black/10 transition-colors after:pointer-events-none duration-300 items-center relative after:w-full after:h-full after:left-0 after:absolute after:border-b after:border-b-black/10"
      >
        <span :class="{ 'line-through': todo.completed }">
          {{ todo.text }}
        </span>
        <button
          class="size-[13px] text-[10px] pointer-events-none ml-auto group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center font-bold rounded-sm bg-red-500 hover:bg-red-600 text-white"
          @click="removeTodo(todo)"
        >
          X
        </button>
        <input type="checkbox" class="cursor-pointer" v-model="todo.completed" />
      </li>
    </ul>
  </div> -->
  <RouterView />
</template>
<!-- s -->
