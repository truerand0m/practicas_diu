<template lang="pug">
div
  .pruebaContenedor.w-100.center.tc
    h1 SpringBoard
    //-
      #gridSpringboard.center.pa2-l.pa1
        div.cosa(v-for="index in lmax")
          img(src="@/assets/images/bug.png" height="50px")
          p {{ loremArray[aleatorio(min, max)].msg}}        
    #myGridSpringBoard
      div.cosa(v-for="index in lmax" height="50px")
        img(src="@/assets/images/bug.png")
</template>

<script>
import dataLorem from "@/assets/data/lorem.json";
import imageBackground from "@/assets/images/sand.jpg";

export default {
  name: "home",
  data() {
    return {
      backg: imageBackground,
      min: "",
      max: "",
      lmax: "",
      dataL: "",
      loremArray: "",
      msg: "Patrón Springboard",
      descripcion:
        "El patrón Springboard, también llamado Launchpad, fue el patrón de navegación más popular en 2011. Pantalla de inicio que actúan como puntos de inicio en la aplicación."
    };
  },
  methods: {
    aleatorio: function(a, b) {
      return Math.round(Math.random() * (b - a) + parseInt(a));
    },
    loadJsonLorem: function() {
      this.dataL = dataLorem;
      console.log("dataL", this.dataL);
      console.log("settings", this.dataL["settings"][0]);
      console.log("lorem", this.dataL["loremArray"]);
    },
    setSettings: function() {
      this.settings = this.dataL["settings"][0];
      this.min = this.dataL["settings"][0]["min"];
      this.max = this.dataL["settings"][0]["max"];
      this.lmax = this.dataL["settings"][0]["lmax"];
    },
    setLoremArray: function() {
      this.loremArray = this.dataL["loremArray"];
      console.log("loremArray ", this.loremArray);
    },
    getImgPath: function(partial) {
      return "@/assets/images/" + partial;
    }
  },
  mounted() {
    this.loadJsonLorem();
    this.setSettings();
    this.setLoremArray();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//styles
.pruebaContenedor {
  border: 1px solid $orange;
  .unamGoldColor.bold {
    font-weight: 900;
  }
  .unamGoldColor {
    color: $gold;
    &.bold {
      font-weight: 600;
    }
  }
  #gridSpringboard {
    display: grid;
    width: 98%;
    border: 1px solid $blue;
    overflow-wrap: break-word;
  }
  div {
    border: 1px solid $red;
  }
  #gridSpringboard_uno {
    grid-template-columns: 48% 48%;
    grid-template-rows: 48%;
    grid-gap: 1.3%;
    grid-row-gap: 2%;
  }
  #myGridSpringBoard {
    display: inline-grid;
    grid-template-rows: 50% 50%;
  }
}

/* media queries para pantallas large*/
@media #{$breakpoint-large} {
  .pruebaContenedor {
    background: white;
  }
  #gridSpringboard {
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 32% 32% 32%;
    grid-gap: 1.3%;
    grid-row-gap: 2%;
  }
  #gridSpringboard_uno {
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 32% 32% 32%;
    grid-gap: 1.3%;
    grid-row-gap: 2%;
  }
}
@media #{$breakpoint-medium} {
  .pruebaContenedor {
    background: white;
  }
  #gridSpringboard {
    grid-template-columns: 32% 32% 32%;
    grid-template-rows: 32% 32% 32% 32%;
    grid-gap: 1.3%;
    grid-row-gap: 2%;
  }
  #gridSpringboard_uno {
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 32% 32% 32% 32%;
    grid-gap: 1.3%;
    grid-row-gap: 2%;
  }
}
</style>
