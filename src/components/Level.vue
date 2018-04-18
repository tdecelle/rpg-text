<template lang="html">
  <div class="component">
    <div class="player-side">
      <h1>Level {{ level }}</h1>
      <healthbar :current="health" :total="healthTotal"></healthbar>
    </div>
    <div class="monster-side">
      <template v-for="monsterLevel in monsterLevels">
        <monster :level=monsterLevel></monster>
      </template>
    </div>
    <button type="button" @click="startGame">Start Game</button>
  </div>
</template>

<script>
import Monster from './Monster.vue';
import HealthBar from './HealthBar.vue';

export default {
  components: {
    monster: Monster,
    healthbar: HealthBar
  },
  data: function() {
    return {
      gameIsRunning: false,
      level: 1,
      health: this.level*200,
      healthTotal: this.level*200,
      monsterLevel: 1,
      monsterLevels: [1,2,3,4,5]
    }
  },
  methods: {
    getHealth: function() {
      this.health = this.level*200;
      this.total = this.level*200;
    },
    startGame: function() {
      this.getHealth();
      this.gameIsRunning = true;
      while(this.gameIsRunning) {
        setTimeout(this.gameLoop, 3000);
      }
    },
    gameLoop: function() {
      console.log("Loop");
      this.monsterAttack();
      console.log("Player Health: " + this.health);
      if(this.health <= 0 || this.monsterLevels.length == 0) {
        this.gameIsRunning = false;
      }
      console.log(this.gameLooping);
    },
    monsterAttack: function() {
      let attack = 0;
      for(let i = 0; i < this.monsterLevels.length; i++) {
        attack += this.monsterLevels[i];
      }
      this.health -= attack;
    }
  }
}
</script>

<style lang="css">
.player-side{
  float: left;
  width: 50%;
}
.monster-side{
  float: right;
  width: 50%;
}
</style>
