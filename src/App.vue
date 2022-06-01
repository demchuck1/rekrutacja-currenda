<template>
  <div id="app">    
    <div class="container">
      <inputSearch />
      <resultsList />
    </div><!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import inputSearch from './components/inputSearch.vue'
import resultsList from './components/resultsList.vue';

export default {
  name: 'App',
  components: {
    inputSearch,
    resultsList,
  },
}
</script>

<style lang="scss">

body{
  font-size: 16px;
  font-family: Arial;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.container{
  width: 100%;
  max-width: 1260px;
  padding: 0 15px;
}

button,input{
  font-family: inherit;
}

button{
  &:hover{
    cursor: pointer;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input{
  position: relative;
  flex: 1;
  &:after{
    content: '';
    background: url('assets/search.svg');
    background-size: contain;
    position: absolute;
    right: 15px;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translatey(-50%);
  }
}

.input-wrapper{
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  justify-content: center;

  button{
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    background: none;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    &.active{
      background: red;
      color: #fff;
    }
  }
  @media(max-width: 600px){
    flex-wrap: wrap;
    button{
      flex: 1;
    }
  }
}

input{
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.2);
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  width: 100%;
  &:focus{
    outline-color: red;
  }
}

.resultsList{
  margin: 0;
  padding: 0;
  list-style: none;
}

.resultsList__header{
  font-weight: bold;
  position: sticky;
  top: 0;
  background: #fff;
}
.resultsList__wrapper{
  width: 100%;
  margin: 0 auto;
}

.resultsList__element{
  display: flex;
  text-align: left;
  border-bottom: 1px solid rgba(0,0,0,.1);
  gap: 15px;
  > *{
    height: 50px;
    line-height: 50px;
    @media(max-width: 600px){
      height: auto;
      line-height: 24px;
      padding: 15px 0;
    }
  }
}

.cityName{
  width: 200px;
}

.adminName{
  width: 200px;
}
</style>
