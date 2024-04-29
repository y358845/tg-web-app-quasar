<template>
  <div class="titles">
    <img src="../../assets/images/title_icon.svg" alt="title_icon" />
    <slot></slot>
  </div>
</template>

<style lang="scss">
.titles {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $Montserrat-Medium;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 142.7%;
  color: #232323;

  img {
    margin-right: 18px;
  }
}

@media (max-width: 992px) {
  .titles {
    font-size: 24px;
    line-height: 142.7%;

    img {
      height: 9.98px;
      margin-right: 8px;
    }
  }
}
</style>
