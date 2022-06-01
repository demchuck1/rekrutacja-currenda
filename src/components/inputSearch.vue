<template>
<div class="input-wrapper">
    <div class="input"><input type="search" minlength="3" required placeholder="Nazwa miasta" v-model="word"></div>    
    <button type="button" :class="{'active' : sortType === 'ASC'}" @click="changeSortType('ASC')">Rosnąco</button>
    <button type="button" :class="{'active' : sortType === 'DESC'}" @click="changeSortType('DESC')">Malejąco</button>
</div>
</template>

<script>
export default {
    name: 'InputSearch',
    computed: {
      word: {
        get() {
          return this.$store.state.searchWord
        },
        set(value) {
          value = value.toLowerCase();
          this.$store.commit('updateSearchWord', value)
        }
      },
      sortType(){
        return this.$store.state.sortType 
      }
    },
    methods: {
      changeSortType(value){
        this.$store.commit('changeSortType', value) 
      }
    }
}
</script>
