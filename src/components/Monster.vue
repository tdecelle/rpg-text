<template lang="html">
<div>
  <h1>Monster</h1>
  <h3>Level {{ level }}</h3>
  <healthBar :health="health"></healthBar>
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
      health: 100
    }
  },
  methods: {
    create: function(){
      this.health = this.calculateHealth();
    },
    calculateHealth: function(){
      return 100;
    },
    getPunch: function(){
      this.health -= 10;
    }
  }
}
</script>

<style lang="css">
</style>
