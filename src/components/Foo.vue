<template>
    <div>
        <button @click="fetchResults"></button>
        <ul>
          <li v-for="item in items" :key="$index">
            <p>{{item.name}}</p>
            <img :src="item.src" />
          </li>
        </ul>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [
          {name: "value01", src: "/images/image02.png"},
          {name: "value02", src: "/images/image02.png"},
        ]
      }
    },

    methods: {
      async fetchResults() {
        const response = await axios.get('mock/service')
        console.log(`response = ${response}`);
        this.items = response.data
      }
    },

    beforeUpdate() {
      console.log(`beforeUpdate: ${performance.now()}`);
    },

    updated() {
      console.log(`updated: ${performance.now()}`);
    }
  }
</script>