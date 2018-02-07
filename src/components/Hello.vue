<template>
  <div class="hello">
    <h2>Enter the query information</h2>
    <table align="center">
      <tr>
        <td align="right">Route:</td>
        <td align="left"><select :name="include" v-model="include" >
              <option value="L">L</option>
              <option value="E">E</option>
              <option value="O">O</option>
              <option value="A">A</option>
            </select>
        </td>
      </tr>
      <tr>
        <td align="right">Days before today: </td>
        <td align="left"><input type="text" v-model="start" size="5"> Integer</td>
      </tr>
      <tr>
        <td align="right">Days after today:</td>
        <td align="left"><input type="text" v-model="end" size="5"> Integer</td>
      </tr>
    </table>
    <br>
    <button @click="navToBooking">LH_Late Web</button>
    <br>
    <hr>
  </div>


</template>

<script>
//  import axios from 'axios'
  export default {
    name: 'Hello',
    data () {
      return {
        // msg: 'Welcome to the e-Booking view board',
        term: [],
        errors: [],
        show: true,
        load: true,
        start: '',
        end: '',
        include: '',
        clear: true,
        placeholder: 'pick a date'
      }
    },
    mounted: function () {
      // this.fetchData()
    },
    methods: {
      navToBooking () {
        this.$router.push('/late/' + this.include + '/' + this.start + '/' + this.end)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
