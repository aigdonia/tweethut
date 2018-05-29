<template lang="pug">
  a.person(href='')
    img.person__avatar(:src="person.avatar")
    span.person__twitter @{{person.name}}
</template>

<script>
export default {
  name: 'person',
  props: ['person']
}
</script>

<style lang="stylus">
.person
  display: flex;
  flex-direction: column;
  align-items center;
  padding: 0.5rem;
  text-decoration: none;
  color: #333333;
  width: 30%;
  box-sizing: border-box;
  margin: 1rem 0;

  &__avatar
    width: 70px;
    border-radius: 50%;

  &__twitter
    font-size: 1.1rem;
    padding-top: 0.5rem;

</style>
