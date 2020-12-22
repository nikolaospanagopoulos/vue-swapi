<template>
  <div>
    <div class="grid-container">
      <div v-for="person in people" :key="person.height">
        <div class="grid-item">
          <person-card :person="person"></person-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PersonCard from "../components/PersonCard/PersonCard.vue";
export default {
  components: { PersonCard },
  data() {
    return {
      people: [],
    };
  },
  methods: {
    async fetchPeople() {
      const { data } = await axios.get("https://swapi.dev/api/people");
      this.people = data.results;
    },
  },
  mounted() {
    this.fetchPeople();
  },
};
</script>

<style>
.grid-container {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: -100px;
  margin: 0 auto;
  grid-auto-rows: minmax(100px, auto);
  justify-items: center;
}

.grid-item {
  padding: 18px;
  font-size: 150%;
  display: flex;
  align-items: flex-start;
  

  
}

@media screen and (max-width: 950px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .grid-item {
    padding: 10px;
  }
}

@media screen and (max-width: 1424px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .grid-item {
    padding: 13px;
  }
}

@media screen and (max-width: 650px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .grid-item {
    padding: 15px;
  }
}
</style>
