<template lang="pug">
    header
      img.logo(src='../assets/hut.png')
      nav
        router-link.nav-link(to='people') People
        router-link.nav-link(to='topics') Topics
</template>

<style lang="stylus" scoped>
  @import '../styl/_variables';
  header
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    // border-bottom: 1px solid;
    img.logo
      // display: block;
      width: 64px;
      @media screen and (max-width: 360px)
        width: 40px;

  nav
    a.nav-link
      text-decoration: none;
      margin: 0 5px;
      padding: 0.3rem 1.5rem;
      font-size: 1rem;
      border: 1px solid;
      border-radius: 6px;
      color: themeColor;
</style>
