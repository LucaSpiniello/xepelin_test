<template>
  <div class="container">
    <h1 class="heading">Xepelin API</h1>
    <iframe class="google-sheet" :src="sheetUrl" frameborder="0"></iframe>
  </div>
</template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1ymL1cRS5L1AXG6MtwUSiOKymYr7Zpz8M9st0VB6skd0/edit?usp=sharing'
      };
    }
  };
  </script>

<style scoped>
.container {
  max-width: 1000px; 
  margin: 0 auto; 
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
  border-radius: 8px; 
}

.heading {
  color: #2c3e50; 
  margin-bottom: 20px; 
  text-align: center;
}

.google-sheet {
  width: 100%; 
  height: 600px;
  border: none; 
}
</style>
  