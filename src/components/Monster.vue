<template lang="html">
<div>
  <h1>Monster</h1>
  <h3>Level {{ level }}</h3>
  <healthBar :health="health"></healthBar>
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
      // this.health = this.calculateHealth();
    },
    calculateHealth: function(){
      // return this.level*100;
    }
  }
}
</script>

<style lang="css">
</style>
