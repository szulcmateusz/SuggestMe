<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 1200px;
  width: 100%;
  margin: 0 12px;
  -webkit-font-smoothing: antialiased;
}

#app,
input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E201E;
  color: white;
  min-height: 100vh;
}

header {
  margin: 40px 0;
}

a {
  text-decoration: none;
}

.underline {
  width: 100px
}

.text-center {
  text-align: center;
}

.d-flex {
  display: flex;
}
</style>
