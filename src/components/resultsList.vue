<template>
    <div class="resultsList__wrapper">
        <div class="resultsList__header">
            <div class="resultsList__element">
                <div class="cityName">Nazwa miejscowości</div>
                <div class="adminName">Województwo</div>
            </div>
        </div>
        <ul class="resultsList">
            <li v-for="(item,index) in searchResults" :key="index">
                <div class="resultsList__element">
                    <div class="cityName">{{item.city}}</div>
                    <div class="adminName">{{item.admin_name}}</div>
                </div>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
  name: 'ResultsList',
  computed: {
    searchResults: {
      get() {
        const resultsByWord = this.$store.state.searchResults.filter(obj => {
          const lowerWord = obj.city.toLowerCase();
          return lowerWord.includes(this.$store.state.searchWord);
        });
        this.sortType == "ASC" && resultsByWord.sort(this.sortASC);
        this.sortType == "DESC" && resultsByWord.sort(this.sortDESC);
        return resultsByWord;
      }
    },    
    sortType(){
      return this.$store.state.sortType
    }
  },
  methods: {
    sortASC(x, y){
        return x.city.localeCompare(y.city);
    },
    sortDESC(x, y){
        return y.city.localeCompare(x.city);
    }
  }
}
</script>