<template>
  <div class="form-container">
    <h2>Персональные данные</h2>
    <div class="input-group">
      <div class="field">
        <label for="user-name">Имя</label>
        <input id="user-name" v-model="userName" @input="formatName($event, 'userName')" pattern="[A-Za-zА-Яа-яЁё\s]*" />
      </div>
      <div class="field">
        <label for="user-age">Возраст</label>
        <input id="user-age" v-model="userAge" type="number" min="0" max="999" @input="restrictInput($event, 'userAge')" />
      </div>
    </div>
    <div class="children-header">
      <h3>Дети (макс. 5)</h3>
      <button v-if="children.length < 5" @click="addChild" class="add-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="add-label">Добавить ребенка</span>
      </button>
    </div>
    <div v-for="(child, index) in children" :key="index" class="child-entry">
      <div class="child-input-group">
        <div class="field child-field">
          <label :for="'child-name-' + index">Имя</label>
          <input
            :id="'child-name-' + index"
            :value="child.name"
            @input="formatChildName(index, $event.target.value)"
            pattern="[A-Za-zА-Яа-яЁё\s]*"
          />
        </div>
        <div class="field age-field child-field">
          <label :for="'child-age-' + index">Возраст</label>
          <input
            :id="'child-age-' + index"
            :value="child.age"
            @input="setChildAge(index, restrictChildAge(index, $event.target.value))"
            type="number"
            min="0"
            max="999"
          />
        </div>
        <button @click="removeChild(index)" class="delete-btn">
  <span class="delete-label">Удалить</span>
</button>
      </div>
    </div>
    <button @click="save" class="save-btn">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  computed: {
    userName: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit("setUserName", value);
      },
    },
    userAge: {
      get() {
        return this.$store.state.user.age;
      },
      set(value) {
        this.$store.commit("setUserAge", value);
      },
    },
    children() {
      return this.$store.state.children;
    },
  },
  methods: {
    formatName(event, field) {
      let value = event.target.value;
      value = value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
      value = value.replace(/\s+/g, ' ');
      if (value) {
        value = value
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + (word.slice(1) || '').toLowerCase())
          .join(' ');
      }
      this[field] = value;
    },
    formatChildName(index, value) {
      value = value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
      value = value.replace(/\s+/g, ' ');
      if (value) {
        value = value
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + (word.slice(1) || '').toLowerCase())
          .join(' ');
      }
      this.$store.commit("setChildName", { index, name: value });
    },
    setChildAge(index, value) {
      this.$store.commit("setChildAge", { index, age: value });
    },
    addChild() {
      this.$store.commit("addChild");
    },
    removeChild(index) {
      this.$store.commit("removeChild", index);
    },
    save() {
      this.$router.push("/preview");
    },
    restrictInput(event, field) {
      let value = event.target.value;
      if (value < 0) value = 0;
      if (value > 999) value = 999;
      this[field] = value;
    },
    restrictChildAge(index, value) {
      if (value < 0) value = 0;
      if (value > 999) value = 999;
      return value;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Montserrat';
  src: url('@/assets/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
.form-container {
  max-width: 616px;
  margin: 30px auto 0 auto;
  background-color: #fff;
}
h2,
h3 {
  text-align: left;
  color: rgba(17, 17, 17, 1);
  margin-bottom: 10px;
  text-transform: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  margin-bottom: 20px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
.field {
  position: relative;
  flex: 1;
}
.age-field {
  flex: 0.5;
}
.child-field {
  max-width: 260px;
  min-height: 56px;
}
label {
  position: absolute;
  top: 8px;
  left: 16px;
  transition: all 0.2s ease;
  pointer-events: none;
  color: rgba(17, 17, 17, 0.48);
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
}
input {
  width: 100%;
  padding: 26px 16px 6px 16px;
  border: 1px solid rgba(241, 241, 241, 1);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #fff;
  min-height: 56px;
  transition: border 0.2s ease;
  outline: none;
}
input:focus {
  border: 1px solid rgba(1, 167, 253, 1);
  outline: none;
}
input:focus + label,
input:not(:placeholder-shown) + label {
  top: -10px;
  font-size: 10px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.children-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11px;
  margin-top: 33px;
}
.children-header h3 {
  margin: 0;
}
.add-btn {
  background-color: transparent;
  width: auto;
  height: 44px;
  color: rgba(1, 167, 253, 1);
  border: 2px solid rgba(1, 167, 253, 1);
  padding: 10px 20px;
  border-radius: 100px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.add-btn:hover {
  color: rgba(15, 121, 175, 1);
  border: 2px solid rgba(15, 121, 175, 1);
}
.child-entry {
  margin-bottom: 10px;
}
.child-input-group {
  display: flex;
  gap: 20px;
  align-items: center;
}
.delete-btn {
  background-color: transparent;
  color: rgba(1, 167, 253, 1);
  border: none;
  padding: 16px 0;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  pointer-events: none;
}
.delete-label {
  pointer-events: auto; 
}
.delete-btn:hover {
  color: rgba(15, 121, 175, 1);
}
.save-btn {
  background-color: rgba(1, 167, 253, 1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 25px;
  margin-left: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}
.save-btn:hover {
  background-color: rgba(15, 121, 175, 1);
}
</style>
