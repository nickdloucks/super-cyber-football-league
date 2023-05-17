
<script setup lang="ts">
    import type {TeamDisplay} from "../types/team"
    // import { ref } from "vue";

    const props = defineProps<{
        items: Array<TeamDisplay>
        tableTitle: string
        columnHeaders: Array<string>
    }>()

</script>

<!-- let teams: Array<TeamDisplay> = [
    // {"team_name", "conference", "color_1", "color_2", "color_3", "color_4"}
    {team_name: "Bats", conference: "NC", color_1: "#4b0082", color_2: "#818181", color_3: "#000", color_4:"#1f1f1f"},
    {team_name: "Yetis", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Flyingfish", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Sharks", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""},
    {team_name: "Zephyrs", conference: "NC", color_1: "", color_2: "", color_3: "", color_4: ""}
] -->

/////////////////////////////////////////////////////////////////
<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th colspan="8">{{ props.tableTitle }}</th>
        </tr>
        <tr>
          <th v-for="header in props.columnHeaders">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" :class="{ 'playoffs-cutoff': index === 1 }">
           <!-- :class="{ 'odd-row': index % 2 === 1 }" -->
          <!-- <td>{{ item.logo }}</td> -->
          <td>{{ item.team_name }}</td>
          <td>{{ item.conference }}</td>
          <td :background-color="item.color_1">{{ item.color_1 }}</td>
          <td>{{ item.color_2 }}</td>
          <td>{{ item.color_3 }}</td>
          <td>{{ item.color_4 }}</td>
          <!-- <td>{{ item.record }}</td>
          <td>{{ item.winPct }}</td>
          <td>{{ item.conference }}</td>
          <td>{{ item.confPct }}</td>
          <td>{{ item.sos }}</td>
          <td>{{ item.sov }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.table {
  /* border-collapse: collapse; */
  width: 100%;
}

th,tr {
  border: 3px solid #000;
  padding: 8px;
}

th{
    min-width: max-content;
}

th {
  text-align: center;
  background-color: #444;
}

tbody:nth-child(-n + 2) {
  /* border-bottom: 2px dotted aqua; */
}

.playoffs-cutoff{
  border-bottom: #222 dotted;
  background-color: aqua;
}

.table-container {
  padding: 10px;
  background-color: #f6f6f6;
  overflow-x: auto;
  border-radius: 8px;
}
</style>
