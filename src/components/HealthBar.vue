<template lang="html">
  <div>
    <div class="healthbar text-center">
      {{ health }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['health'],
}
</script>

<style lang="css" scoped>
{
  width: 200px;
  height: 30px;
  padding: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
  text-align: center;
}
.healthbar{
  background: #c54;
  width: 100%;
  height: 20px;
  position: relative;

  transition: width .5s linear;
}
</style>
