<template>
  <div class="container">
    <div class="sec">
      <h1>Suggest.Me</h1>
      <img class="underline" src="../assets/underline.svg" alt="underline">
    </div>
    <div class="sec">
      <p>“Suggest.Me” is an app designed to help you find your next favorite song. Simply enter the name of a song you
        love, and the app will suggest other tracks with a similar vibe. It’s the perfect way to discover new music that
        matches your taste effortlessly.</p>
    </div>
    <div class="sec">
      <form @submit="submitForm">
        <div>
          <input type="text">
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}

.sec {
  margin: 16px 0;
}

p {
  font-size: 18px;
}

input {
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 16px 8px;
  max-width: 600px;
  width: 100%;
}

button {
  position: relative;
  z-index: 100;
  font-size: 16px;
  width: 200px;
  padding: 16px 8px;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 20px
}

button::after {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #427df7;
  content: " ";
  color: blue;
  transition: 0.4s;
}

button:hover::after {
  width: 100%;
}

.underline {
  width: 100px
}
</style>