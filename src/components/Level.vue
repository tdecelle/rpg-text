<template lang="html">
  <div class="component">
    <h1>Level {{ level }}</h1>
    <monster :level="monsterLevel"></monster>
    <button type="button" @click="startGame">Start Game</button>
  </div>
</template>

<script>
import Monster from './Monster.vue';

export default {
  components: {
    monster: Monster
  },
  data: function() {
    return {
      level: 1,
      monsterLevel: 1
    }
  },
  methods: {
    startGame: function() {
      
    }
  }
}
</script>

<style lang="css">
</style>
