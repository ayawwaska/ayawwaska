<template>
  <div class="window">
    <router-view/>
  </div>
</template>

<style>
  .window {
    width: 800px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: rgb(221, 224, 224);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .clearfix:after {
    content: "";
    clear: both;
    display: table;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 1.15em;
  }

  .box {
    text-align: center;
  }

  .text {
    font-size: 40px;
    font-weight: 400;
    margin-top: 30px;
  }

  .header,
  .form-number {
    margin-bottom: 55px;
  }

  .header {
    color: rgb(67, 67, 67);
    margin-top: 50px;
    font-size: 36px;
    font-weight: 600;
  }

  .form-label {
    font-size: 24px;
    font-weight: 600;
    color: rgb(67, 67, 67);
  }

  .form-number {
    width: 400px;
    height: 55px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 28px;
    letter-spacing: 3px;
    text-align: center;
    margin-top: 10px;
  }

  .call-button,
  .call-button-bottom {
    width: 300px;
    height: 55px;
    vertical-align: middle;
    font-size: 22px;
    font-weight: 600;
    line-height: 55px;
    background: #f8bce0;
    cursor: pointer;
    color: rgb(98, 54, 82);
    border-radius: 6px;
    margin: 0 auto;
  }

  .call-button-bottom {
    margin-top: 300px;
  }

  .call-button:hover {
    filter: brightness(95%);
  }

  .error {
    border: 1px solid #ff0000;
    background: rgb(255, 170, 170);
  }
</style>