<template>
    
     <hsc-window-style-metal style="z-index: 10;" >

    <hsc-window class="btn btn-info" title="Daily Limit" :closeButton="false" :isOpen.sync="isOpen"
     :left.sync="left"
      :top.sync="top">
     
      <fieldset>
        <legend>Fund</legend>
        <input type="range" />
      </fieldset>
    </hsc-window>
  </hsc-window-style-metal>

</template>

<script>
export default {
  props: ['isOpen'],
   data() {
    return {
      left: 130,
      top: 390,
      x: 0
    }
  },
  methods: {
    // mousedown(MouseEvent1) {
    //   const baseLeft = this.left
    //   const baseTop = this.top
    //   const mousemove = (MouseEvent2) => {
    //     this.left = baseLeft + MouseEvent2.screenX - MouseEvent1.screenX
    //     this.top = baseTop + MouseEvent2.screenY - MouseEvent1.screenY
    //   }
    //   const mouseup = () => {
    //     document.removeEventListener('mousemove', mousemove)
    //     document.removeEventListener('mouseup', mouseup)
    //   }
    //   document.addEventListener('mousemove', mousemove)
    //   document.addEventListener('mouseup', mouseup)
    // }
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 40px;
  background-color: aqua;
  box-shadow: 0 0 4pt rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  cursor: grab;
}
</style>