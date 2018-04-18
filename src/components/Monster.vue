<template lang="html">
<div>
  <h1>Monster</h1>
  <h3>Level {{ level }}</h3>
  <healthBar v-if="alive" :current="health" :total="healthTotal"></healthBar>
  <button type="button" @click="getPunch">Punch</button>
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
      healthTotal: this.level*100,
      alive: true
    }
  },
  methods: {
    calculateHealth: function(){
      return this.level*100;
    },
    getPunch: function(){
      this.health -= 10;
      console.log("Monster Health: " + this.health);
      if(this.health <= 0) {
        this.die();
      }
    },
    die: function() {
      console.log(this.level);
      this.health = this.healthTotal;
      this.$emit('destroy', this.level);
    }
  }
}
</script>

<style lang="css">
</style>
