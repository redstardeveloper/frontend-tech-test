import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  tasks: [],
  selectedTask: null,
}

const tasksReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.TASKS_FETCH_START:
      return { ...state, loading: true }
    case constants.TASKS_FETCH_SUCCESS:
      return { ...state, loading: false, tasks: action.payload }
    case constants.TASKS_FETCH_FAIL:
      return { ...state, loading: false, err: action.payload }
    case constants.TASK_ADD_FAIL:
      return { ...state, err: action.payload }
    case constants.TASK_SELECTED:
      return { ...state, selectedTask: action.payload }
    case constants.TASK_DELETE_SUCCESS:
      const newTasks = state.tasks.filter(task => task.id !== action.payload) // eslint-disable-line
      return { ...state, tasks: newTasks, selectedTask: null }
    case constants.TASK_EDIT_SUCCESS:
      return { ...state, selectedTask: null }
    default:
      return state
  }
}

export default tasksReducer
