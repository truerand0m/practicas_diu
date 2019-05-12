<template lang="pug">
  .pruebaContenedor.w-100.center.tc
    h1 {{ msg }}
    p {{ descripcion }}
    //Seccion 1
    #listaEventos.center.pa2-l.pa1
      div.evento(v-for="evento in listaEventos")
        p {{evento.id}}  {{ evento.titulo }}
            span {{ evento.fecha }}
        p {{ evento.ubicacion }}   
    
    //Seccion2
    h1 {{ msg2 }}
    p {{ descripcion2 }}
    div.evento(v-for="evento in listaEventos" class="container")
      //<img :src="require(`@/assets/images/${evento.imagen}`)" alt="">
      b-container
          b-row(style="border-top: 1px")
              b-col
                  <img :src="require(`@/assets/images/bug.png`)" width="80px"/>
                  //no funciona ver https://github.com/vuejs-templates/webpack/issues/450
                  //<img :src="require(`@/assets/images/${evento.imagen}`)" width="100px"/>
              b-col(cols=10)
                  b-row
                      a {{ evento.titulo }}
                      p {{ evento.fecha }}
                      span {{ evento.ubicacion }}
    //Seccion3
    h1 {{ msg3 }}
    p {{ descripcion3 }}
    div.evento(v-for="evento in listaEventos" class="container")    
          b-container
          b-row(style="border-top: 1px")
              b-col
                  <img :src="require(`@/assets/images/bug.png`)" width="80px"/>
                  //no funciona ver https://github.com/vuejs-templates/webpack/issues/450
                  //<img :src="require(`@/assets/images/${evento.imagen}`)" width="100px"/>
          b-row
            b-col(cols="4")
            b-col(cols="2")
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ getMes( evento.fecha)}}</li>
                    <li class="list-group-item">{{ getDiaInicio( evento.fecha)}}</li>
                    <li class="list-group-item">Dia Final</li>
                  </ul>
            b-col(cols="5")
          b-row
              b-col
                  a {{ evento.titulo }}
                  p {{ evento.fecha }}
                  span {{ evento.ubicacion }}
</template>

<script></script>
<script>
import dataJson from "@/assets/data/eventos.json";

export default {
  name: "Eventos",
  data() {
    return {
      dataJ: "",
      listaEventos: "",
      msg: "Eventos UNAM",
      descripcion:
        "Implementar una lista vertical con informacion de los eventos de la UNAM",

      msg2: "Ejercicio2",
      descripcion2: "Agregar imagen tipo thumbnail",

      msg3: "Ejercicio3",
      descripcion3: "Agregar calendario"
    };
  },
  methods: {
    setDataJ: function() {
      this.dataJ = dataJson;
      console.log("dataJson ", this.dataJ);
    },
    setListaEventos: function() {
      this.listaEventos = this.dataJ["eventos"];
    },
    //https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript
    getMes: function(fecha) {
      fecha = fecha
        .split(" ")[1]
        .replace(",", "")
        .toUpperCase();
      return fecha;
    },
    getDiaInicio: function(fecha) {
      fecha = fecha
        .split(" ")[0]
        .replace(",", "")
        .toUpperCase();
      return fecha;
    }
  },
  mounted() {
    this.setDataJ();
    this.setListaEventos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//styles
.pruebaContenedor {
  //colors
  background: $white;
  border: 1px solid $gray;
  border-style: dotted;
  .unamGoldColor.bold {
    font-weight: 900;
  }
  .unamGoldColor {
    color: $gold;
    &.bold {
      font-weight: 600;
    }
  }
  div {
    border: 0.5px solid $gray;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 0;
    border: 2px solid $light-gray;
  }
  p {
    color: $blue;
    font-size: 80%;
    border: 0px;
    border-style: dotted;
  }
  span {
    color: $gold;
    font-weight: 6000;
    margin-left: 15px;
    font-size: 0.7em;
    border: 0px;
  }
}
</style>
