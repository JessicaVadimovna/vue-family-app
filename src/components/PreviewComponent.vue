<template>
  <div class="preview-container">
    <h2>Персональные данные</h2>
    <p>
      {{ user.name || "Не указано" }}, {{ formatAge(user.age) }}
    </p>
    
    <h3>Дети</h3>
    <ul>
      <li v-for="(child, index) in children" :key="index">
        {{ child.name || "Не указано" }}, {{ formatAge(child.age) }}
      </li>
    </ul>
    <p v-if="children.length === 0">Дети не добавлены</p>
  </div>
</template>

<script>
export default {
  name: "PreviewComponent",
  computed: {
    user() {
      return this.$store.state.user;
    },
    children() {
      return this.$store.state.children;
    },
  },
  methods: {
    formatAge(age) {
      if (!age) return "возраст не указан";
      
      const lastDigit = age % 10;
      const lastTwoDigits = age % 100;
      
      // Исключения для 11-14 (они всегда "лет")
      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${age} лет`;
      }
      
      // Склонения по последней цифре
      if (lastDigit === 1) {
        return `${age} год`;
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${age} года`;
      } else {
        return `${age} лет`;
      }
    }
  }
}
</script>

<style scoped>
.preview-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
h2, h3 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgba(17, 17, 17, 1);
}
p {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgba(17, 17, 17, 1);
}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  background-color: rgba(241, 241, 241, 1);
  width: fit-content;
  height: 44px;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
