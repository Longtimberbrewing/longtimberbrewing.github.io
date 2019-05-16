<template>
    <div class="menu--disclaimer">
        <div class="row">
          <div class="col-6">
            <img src="~assets/images/less-gluten.svg" alt="Less Gluten Option">
            <p>Less-gluten option. Long Timber can not guarantee that a dish is gluten free. These are options that we do not add gluten to or can be modified to not include gluten</p>
          </div>
          <div class="col-6">
            <img src="~assets/images/raw.svg" alt="Raw Disclaimer">
            <p>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness</p>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        description: String
    }
}
</script>
<style lang="scss">
.menu--disclaimer {
  display: inline-flex;
  flex-direction: row;
  img, p {
    display: inline;
  }
  img {
    align-self: flex-start;
    width: auto;
    height: 24px;
  }

  p {
    margin: 0;
    font-size: 8pt;
  }

  @media print {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
