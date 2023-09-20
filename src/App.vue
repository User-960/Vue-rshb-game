<template>
  <div id="app" data-testid="app">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/start">Start</router-link> |
      <router-link to="/robot-collector">Robot Collector</router-link> |
      <router-link to="/finish">Finish</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
