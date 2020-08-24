<template>
    <div class="container">
        <app-header></app-header>

        <div class="row">
            <div class="col-md-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'


    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
     body {
         padding: 30px;
     }
     .slide-enter-active {
         animation: slide-in 200ms ease-out forwards;
     }
     .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
     }

     @keyframes slide-in {
         from {
             transform: translateY(-30px);
             opacity: 0;
         }
         to {
             transform: translateY(0);
             opacity: 1;
         }
     }

     @keyframes slide-out {
         from {
             transform: translateY(0);
             opacity: 1;
         }
         to {
             transform: translateY(-30px);
             opacity: 0;
         }
     }

     .radial-gradient-1 {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    ellipse farthest-corner at 45px 45px,
    #00ffff 0%,
    rgba(0, 0, 255, 0) 50%,
    #0000ff 95%
  );
}
.radial-gradient-2 {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    farthest-corner at 45px 45px,
    #ff0000 0%,
    #0000ff 100%
  );
}
table {
  border-collapse: collapse;
}
td {
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
}
th {
  color: white;
  background-color: #000;
}
.blockPointerEvents {
  pointer-events: none;
}

</style>
