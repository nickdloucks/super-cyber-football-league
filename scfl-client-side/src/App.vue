<script setup lang="ts">
  import StandingsTable from './components/StandingsTable.vue'
  import type { TeamDisplay } from './types/team';
  let standingsHeaders = ['Team', 'Conference', 'Color 1', 'Color 2', 'Color 3', 'Color 4 TEST']
  let teams: Array<TeamDisplay> = [
    // {"team_name", "conference", "color_1", "color_2", "color_3", "color_4"}
    {team_name: "Bats", conference: "NC", color_1: "#4b0082", color_2: "#818181", color_3: "#000", color_4:"#1f1f1f"},
    {team_name: "Yetis", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Flyingfish", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Sharks", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Zephyrs", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""}
]
</script>

<template>
  <StandingsTable :items="teams" tableTitle="Northern Conference" :columnHeaders="standingsHeaders"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
