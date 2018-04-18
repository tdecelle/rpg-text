<template lang="html">
<div>
  <h1>Monster</h1>
  <h3>Level {{ level }}</h3>
  <healthBar :current="health" :total="healthTotal"></healthBar>
  <button type="button" @click="getPunch">Punch</button>
  <button type="button" @click="create">Create</button>
</div>
</template>

<script>
import HealthBar from './HealthBar.vue';

export default {
  props: ['level'],
  components: {
    healthBar: HealthBar
  },
  data: function() {
    return {
      health: this.level*100,
      healthTotal: this.level*100
    }
  },
  computed: {

  },
  methods: {
    create: function(){
      this.health = this.calculateHealth();
    },
    calculateHealth: function(){
      return this.level*100;
    },
    getPunch: function(){
      this.health -= 10;
    }
  }
}
</script>

<style lang="css">
</style>
