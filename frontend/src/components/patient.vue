<template>
  <div  class="hellox" >
      <b-card > 
        <h1>{{ title }}</h1>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "bin2dec",
  props: {
    message: String,
    error: String,
    title: String,
    binary: String
  },
  methods: {
      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hellox {
  margin-top: 10%;
}

</style>
