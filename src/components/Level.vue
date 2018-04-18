<template lang="html">
  <div class="component">
    <div class="player-side">
      <h1>Level {{ level }}</h1>
      <healthbar :current="health" :total="healthTotal"></healthbar>
      <button v-if="!gameIsRunning" type="button" @click="startGame">Start Game</button>
    </div>
    <div v-if="gameIsRunning" class="monster-side">
      <template v-for="monsterLevel in monsterLevels">
        <monster :level=monsterLevel @destroy="destroy($event)"></monster>
      </template>
    </div>
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
  created: function() {
    console.log(this.level);
    this.health = this.level*200;
    this.healthTotal = this.health;
  },
  methods: {
    getHealth: function() {
      this.health = this.level*200;
      this.total = this.level*200;
    },
    getMonsters: function() {
      this.monsterLevels = [1,2,3,4,5];
    },
    startGame: function() {
      console.log("STARTING");
      this.getHealth();
      this.getMonsters();
      this.gameIsRunning = true;

       setTimeout(() => {this.gameLoop();}, 3000);
    },
    gameLoop: function() {
      console.log("Loop");
      this.monsterAttack();
      console.log("Player Health: " + this.health);
      if(this.health <= 0 || this.monsterLevels.length <= 0) {
        this.gameIsRunning = false;
      }
      else {
        setTimeout(() => {this.gameLoop();}, 3000); //reloop
      }
    },
    monsterAttack: function() {
      let attack = 0;
      for(let i = 0; i < this.monsterLevels.length; i++) {
        attack += this.monsterLevels[i];
      }
      this.health -= attack;
    },
    destroy: function(level) {
      console.log(level);
      for(let i = 0; i < this.monsterLevels.length; i++){
        if(level === this.monsterLevels[i]) {
          console.log("FOUND IT");
          this.monsterLevels.splice(i, 1);
        }
      }
      console.log(this.monsterLevels);
      console.log("Something is dead!");
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
