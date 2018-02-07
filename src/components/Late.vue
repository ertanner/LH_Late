<template>
  <div  v-if="show" >

    <table align="center"  border="1" class="container-fluid">
      <tr bgcolor="#f5f5dc">
        <td >CARRIER</td>
        <td>TRIP</td>
        <td >ORIGIN</td>
        <td >DEST</td>
        <td>CUT_DATE</td>
        <td>ETA</td>
        <td >STATUS</td>
        <td >HOURS_LATE</td>
        <td >COMMENT</td>
        <td >CC_UC</td>
      </tr>
      <tr  v-for="t in trips" v-bind:class="t.COLOR" >
        <td>{{ t.CARRIER}} </td>
        <td>{{ t.TRIP }}</td>
        <td>{{ t.ORIGIN }}</td>
        <td>{{ t.DEST }}</td>
        <td>{{ formatDate(t.CUT_DATE) }}</td>
        <td>{{ formatDate(t.ETA) }}</td>
        <td>{{ t.STATUS }}</td>
        <td v-bind:bgcolor="formatColor(t.HOURS_LATE)" >{{ formatHours(t.HOURS_LATE) }}</td>
        <td>{{ t.COMMENT }}</td>
        <td>{{ t.CC_UC }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    props: ['include', 'start', 'end'],
    name: 'late',
    data () {
      return {
        msg: 'Late',
        trips: [],
        show: true,
        v_include: '',
        v_start: '',
        v_end: ''
      }
    },
    watch: {
      '$route' (to, from) {
      }
    },
    mounted: function () {
      this.fetchData()
    },
    methods: {
      navToBooking () {
        this.$router.push('/late')
      },
      onFinish () {
        this.fetchData()
      },
      getString () {
      },
      formatDate (text) {
        if (text != null) {
          text = text.substr(0, 19)
        }
        return text
      },
      formatHours (hr) {
        if (hr != null) {
          var a = hr.toFixed(2)
        }
        return a
      },
      fetchData () {
        this.v_include = this.$route.params.include
        this.v_start = this.$route.params.start
        this.v_end = this.$route.params.end
        console.log(this.$route.params.include)
        console.log('Terminal start end:' + this.v_include + ' ' + this.v_start + ' ' + this.v_end)
        console.log('include: ' + this.$route.params.include)
        var str = ''
        console.log('late')
        str = 'http://localhost:1337/late/' + this.v_start + '/' + this.v_end

        console.log('URL: ' + str)

        axios.get(str)
          .then(response => {
            this.trips = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      formatColor (hrs) {
        var color
        if (hrs > 24) {
          color = 'red'
        } else {
          color = 'white'
        }
        return color
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    margin-top: 50px;
  }
  .red {
    background-color: salmon;
    color: blue;
  }
  .yellow {
    background-color: lemonchiffon;
    color: blue;
  }
  #verticalScroller {
    position: absolute;
    width:52px;
    height: 180px;
    border: 1px solid red;
    overflow: hidden;
  }
  #verticalScroller > div{
    position:absolute;
    width:50px;
    height:50px;
    border: 1px solid blue;
    overflow:hidden;
  }

</style>
