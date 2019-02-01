<template>
  <div class="hello">
    <h1 v-if="show">hai</h1>
    <h1 v-else>hehe</h1>
    <p>Skor : {{skor}}/3</p>
    <p>{{ nama}}</p>
    <input type="text" v-model="nama">
    <button type="button" v-on:click="hideTitle">Click Me</button>
    <br>
    <!--SOAL1-->
    <li v-for="s in soal">
    <h3>{{s}}</h3>
    <jawaban1 v-for="j in jawaban1">
    <br>
    <input type="radio" v-on:click="increment" value="A.2">
    {{j}}
    </jawaban1>
    <br>
    <jawaban2 v-for="a in jawaban2">
    <input type="radio" v-on:click="increment" value="B.3">
    {{a}}
    </jawaban2>
    <br>
    <jawaban3 v-for="w in jawaban3">
    <input type="radio" v-on:click="increment" value="C.4">
    {{w}}
    </jawaban3>
    <br>
    <jawaban4 v-for="b in jawaban4">
    <input type="radio" v-on:click="increment" value="D.5">
    {{b}}
    </jawaban4>
    <!--SOAL2-->
      <li v-for="o in soal2">
    <h3>{{o}}</h3>
    <option1 v-for="p in option1">
    <br>
    <input type="radio" v-on:click="increment" value="A.P90">
    {{p}}
    </option1>
    <br>
    <option2 v-for="t in option2">
    <input type="radio" v-on:click="increment" value="B.Galil">
    {{t}}
    </option2>
    <br>
    <option3 v-for="i in option3">
    <input type="radio" v-on:click="increment" value="C.AUG">
    {{i}}
    </option3>
    <br>
    <option4 v-for="n in option4">
    <input type="radio" v-on:click="increment" value="D.Desert Eagle">
    {{n}}
    </option4>
     <!--SOAL3-->
      <li v-for="l in soal3">
    <h3>{{l}}</h3>
    <choose1 v-for="c in choose1">
    <br>
    <input type="radio" v-on:click="increment" value="A.Fauzan">
    {{c}}
    </choose1>
    <br>
    <choose2 v-for="e in choose2">
    <input type="radio" v-on:click="increment" value="B.Adam">
    {{e}}
    </choose2>
    <br>
    <choose3 v-for="s in choose3">
    <input type="radio" v-on:click="increment" value="C.Bonbon">
    {{s}}
    </choose3>
    <br>
    <choose4 v-for="h in choose4">
    <input type="radio" v-on:click="increment" value="D.Asrul">
    {{h}}
    </choose4>
    </li>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
  return{
    nama: 'Luthfi',
    show: true,
    skor: 0,
    soal : ['1.1+1'],
    jawaban1 : ['A.2'],
    jawaban2 : ['B.3'],
    jawaban3 : ['C.4'],
    jawaban4 : ['D.5'],
    soal2 : ['2.Senjata yang ada di pubg adalah'],
    option1 : ['A.P90'],
    option2 : ['B.Galil'],
    option3 : ['C.AUG'],
    option4 : ['D.Desert Eagle'],
    soal3 : ['3.Nama Bapa Farhan adalah'],
    choose1 : ['A.fauzan'],
    choose2 : ['B.Adam'],
    choose3 : ['C.Bonbon'],
    choose4 : ['D.Asrul']
    }
    },
  methods: {
    hideTitle() {
      this.show = !this.show
    },
    increment() {
    var value = event.target.value;

    if (value === "A.2"){
    this.skor++;
    }else if (value === "C.AUG"){
    this.skor++;
    }else if (value === "D.Asrul"){
    this.skor++;
    }
    }
  },
  mounted: function () {
    this.nama = 'Fitra'
  }
  }
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
</style>
