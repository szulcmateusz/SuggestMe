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
  margin: 0 8px;
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
</style>
