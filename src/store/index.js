import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      name: '',
      age: ''
    },
    children: []
  },
  mutations: {
    setUserName(state, name) {
      state.user.name = name;
    },
    setUserAge(state, age) {
      state.user.age = age;
    },
    addChild(state) {
      if (state.children.length < 5) {
        state.children.push({ name: '', age: '' });
      }
    },
    removeChild(state, index) {
      state.children.splice(index, 1);
    },
    setChildName(state, { index, name }) {
      state.children[index].name = name;
    },
    setChildAge(state, { index, age }) {
      state.children[index].age = age;
    }
  }
});
