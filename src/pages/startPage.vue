<template>
  <div>
    <startBlock>
      <template v-slot:title>
        Дорогой друг,
      </template>

      <template v-slot:content>
        <p>
          Приветствую тебя в 2025 году! Здесь сельское хозяйство играет важную роль в обеспечении пищей населения городов и деревень. У нас беда -  урожая на всех не хватает!
        </p>
        <br/>
        <p>
          Помоги главному герою оптимизировать выращивание и сбор растительных культур. Используй современные технологии и автоматизированные системы.
        </p>
      </template>
    </startBlock>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import startBlock from '@/components/ui/startBlock/startBlock.vue'

export default Vue.extend({
  name: 'aboutPage',
  components: {
    startBlock
  },
});
</script>
