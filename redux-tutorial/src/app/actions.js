export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

const tasks = [
  {
    type: 'daily',
    text: 'Check Facebook',
    completed: false
  },

  {
    type: 'habit',
    text: 'Walk up the stairs'
  },

  {
    type: 'todo',
    text: 'Finish redux tutorial',
    completed: false
  },
  
  {
    type: 'todo',
    text: 'Finish redux slides',
    completed: true
  },

]

export function getTasks(){
  console.log('GET_TASKS');
  return {
    type: GET_TASKS,
    payload: {tasks}
  }
}

export function addTask(text, type) {
  return {
      type: ADD_TASK,
      payload: {
        text,
        type
      }
    };
}

export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    payload: {
      id
    }
  };
}

export function fetchTasks() {
  return function(dispatch, getState) {
    let state = getState();
  };
}

