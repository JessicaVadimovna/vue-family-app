<template>
  <div id="app">
    <header>
      <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
      <nav>
        <router-link to="/form">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>all rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('@/assets/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6vh 44vw 1.6vh 6.7vw;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
}
.logo {
  width: 93px;
  height: auto;
}
nav a {
  margin-left: 24px;
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: bottom;
}
nav a:hover {
  color: rgba(1, 167, 253, 1);
}
main {
  flex: 1;
  overflow-y: auto;
}
footer {
  width: 100%;
  height: 76px;
  background-color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: bottom;
}
</style>