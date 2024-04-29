<template>
  <button class="connection_btn">
    <span>связаться с нами</span>
  </button>
</template>
<style lang="scss">
.connection_btn {
  max-width: 410px;
  width: 100%;
  display: block;
  background: #037798;
  border-radius: 5px;
  font-family: Gilroy-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 142.7%;
  text-align: center;
  letter-spacing: 0.38em;
  color: #ffffff;
  padding: 40px 0;
  border: 0;
  cursor: pointer;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -120%;
    width: 100%;
    height: 100%;
    background: linear-gradient(140.53deg,
        transparent 22.47%,
        #09accb 58%,
        transparent 78.71%);
    border-radius: 5px;
    transition: 0.3s;
    z-index: 1;
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(125%);
    }

    100% {
      transform: translateX(250%);
    }
  }
}
</style>
