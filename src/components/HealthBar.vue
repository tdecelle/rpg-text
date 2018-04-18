<template lang="html">
  <div>
    <div class="healthbar" :style="{width: (current/total)*100 + '%'}">
    </div>
  </div>
</template>

<script>
export default {
  props: ['current', 'total']
}
</script>

<style lang="css" scoped>
div{
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
  text-align: center;
}
.healthbar{
  background: #c54;
  height: 20px;
  position: relative;
  transition: width .5s linear;
}
span{
  width: 100%
}
</style>
