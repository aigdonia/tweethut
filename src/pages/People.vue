<template lang="pug">
#peoplePage.page
  header
    h1 People
    p This is a handpicked list of most inspiring, and influencing people on Twitter
    a.cta Start Discovering

  section.peopleList
    <Person v-for="person in people" :key="person.id" :person="person"/>

</template>

<style lang="stylus" scoped>
.peopleList
  min-height: 100vh;
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: flex-start
</style>

<script>
import peopleList from '../data/people.json'
import Person from '../components/PeoplePerson.vue'

export default {
  components: {
    Person
  },
  data () {
    return {
      people: peopleList
    }
  }
}
</script>
