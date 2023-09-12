<template>
  <layout>
    <template v-slot:default>
      <p>Home</p>

      <infoBlockM>
        <template v-slot:contentText>
          <p>
            Ты – молодой специалист, который недавно завершил обучение на перспективном направлении «Плодово-ягодные культуры» в сельскохозяйственной школе <span>“Своё фермерство”</span>.
          </p>
          <br/>
          <p>
          Ты учился с большим интересом и почерпнул много полезной информации из агросферы. Тебе не терпится применить полученные знания в реальном деле.
          </p>
        </template>

        <template v-slot:nextBtn>
          <startButton @onclick="nextFunc">
            Далее
          </startButton>
        </template>
      </infoBlockM>

      <infoBlockS>
        <template v-slot:contentText>
          <p>Кликни на первую локацию</p>
        </template>

        <template v-slot:nextBtn>
          <startButton @onclick="nextFunc">
            Далее
          </startButton>
        </template>
      </infoBlockS>

      <bank>
        <template v-slot:contentImg>
          <img 
            src='../../../../public/images/bank.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Вам одобрили кредит. Процент за пользование кредитом составит 3%. Заемные средства необходимо вернуть после прохождения первой локации.
          </p>
        </template>

        <template v-slot:nextBtn>
          <startButton @onclick="nextFunc">
            Взять деньги
          </startButton>
        </template>
      </bank>

      <bank>
        <template v-slot:contentImg>
          <img 
            src='../../../../public/images/flowers.svg' 
            alt='bank'  
            draggable='false'
          />
        </template>

        <template v-slot:contentText>
          <p>
            Благодарим, что выбрали наш банк! Денежные средства будут перечислены на ваш счет.
          </p>
        </template>

        <template v-slot:nextBtn>
          <startButton @onclick="nextFunc">
            Выйти
          </startButton>
        </template>
      </bank>
      
      <bank>
        <template v-slot:contentImgs>
          <div>
            <img 
              src='../../../../public/images/bank.svg' 
              alt='bank'  
              draggable='false'
            />
            <span>Кредит</span>
          </div>
          <div>
            <img 
              src='../../../../public/images/plus.svg' 
              alt='bank'  
              draggable='false'
            />
          </div>
          <div>
            <img 
              src='../../../../public/images/bankPercent.svg' 
              alt='bank'  
              draggable='false'
            />
            <span>% за пользование заемными средствами</span>
          </div>
        </template>

        <template v-slot:contentText>
          <p>
            Срок вашего кредитование подошел к концу, просим вернуть ссуженные средства.
          </p>
        </template>

        <template v-slot:nextBtn>
          <startButton @onclick="nextFunc">
            Вернуть деньги
          </startButton>
        </template>
      </bank>

    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../layout/layout.vue'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'
import infoBlockS from '@/components/ui/infoBlock/infoBlockS/infoBlockS.vue'
import bank from '@/components/ui/bank/bank.vue'
import startButton from '@/components/ui/button/startButton/startButton.vue'

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    infoBlockM,
    infoBlockS,
    bank,
    startButton
  },
  methods: {
    nextFunc() {
      console.log('Next step')
    }
  },
})
</script>

<style module='styles'>
  
</style>