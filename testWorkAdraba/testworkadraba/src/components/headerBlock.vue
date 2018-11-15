<template>
  <header>
    <div class="item">
      <a href="#/favorite">favorite</a>
      <a href="/#/">home</a>
      <input type="text">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'headerBlock'
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 105px;
    position: fixed;
    top: 0;
    left: 0;
    background: #282828;
    border-bottom: 3px solid #888;
    .item {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      a {
        margin: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-size: 20px;
      }
      input {
        outline: none;
        background-color: #3c3c3c;
        border: 1px solid #898989;
        padding: 5px 10px;
        font-size: 16px;
        color: #888;
        border-radius: 5px;
      }
    }
  }
</style>
