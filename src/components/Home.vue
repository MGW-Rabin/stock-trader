<template>
  <div>
    <div class="col-md-12">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3>Trade or View your portfolio</h3>
        </div>
        <div class="panel-body">
          <h4>Buy stocks > End day and check if the stock price rises.</h4>
          <h6>You may save your current session using "Save Data"</h6>
          <h6>You can load previous session using "Load Data"</h6>
          <br />
          <p>Your Current Funds: {{ funds | currency }}</p>
          <hr>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  components: {
    
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    totalFunds() {
      return this.$store.getters.totalFunds;
    }
  },
};
</script>
