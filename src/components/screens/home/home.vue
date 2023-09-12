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
          <skipButton @onclick="nextFunc">
            Далее
          </skipButton>
        </template>
      </infoBlockM>

      <infoBlockS>
        <template v-slot:contentText>
          <p>Кликни на первую локацию</p>
        </template>

        <template v-slot:nextBtn>
          <skipButton @onclick="nextFunc">
            Далее
          </skipButton>
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
          <skipButton @onclick="nextFunc">
            Взять деньги
          </skipButton>
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
          <skipButton @onclick="nextFunc">
            Выйти
          </skipButton>
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
          <skipButton @onclick="nextFunc">
            Вернуть деньги
          </skipButton>
        </template>
      </bank>

      <navigation/>

      <blockButton>
        <template v-slot:contentIconBtn>
          <iconButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.9474 5.01778V2.61111C18.9474 1.45 18 0.5 16.8421 0.5H2.10526C0.936842 0.5 0 1.45 0 2.61111V17.3889C0 18.55 0.936842 19.5 2.10526 19.5H16.8421C18 19.5 18.9474 18.55 18.9474 17.3889V14.9822C19.5684 14.6128 20 13.9478 20 13.1667V6.83333C20 6.05222 19.5684 5.38722 18.9474 5.01778ZM17.8947 6.83333V13.1667H10.5263V6.83333H17.8947ZM2.10526 17.3889V2.61111H16.8421V4.72222H10.5263C9.36842 4.72222 8.42105 5.67222 8.42105 6.83333V13.1667C8.42105 14.3278 9.36842 15.2778 10.5263 15.2778H16.8421V17.3889H2.10526Z" fill="currentColor"/>
              <path d="M13.6842 11.5833C14.5562 11.5833 15.2632 10.8745 15.2632 10C15.2632 9.12555 14.5562 8.41667 13.6842 8.41667C12.8122 8.41667 12.1053 9.12555 12.1053 10C12.1053 10.8745 12.8122 11.5833 13.6842 11.5833Z" fill="currentColor"/>
            </svg>
          </iconButton>
        </template>

        <template v-slot:contentIndicator>
          0
        </template>
      </blockButton>

      <exitButton/>

    </template>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue'
import layout from '../../layout/layout.vue'
import infoBlockM from '@/components/ui/infoBlock/infoBlockM/infoBlockM.vue'
import infoBlockS from '@/components/ui/infoBlock/infoBlockS/infoBlockS.vue'
import bank from '@/components/ui/bank/bank.vue'
import skipButton from '@/components/ui/button/skipButton/skipButton.vue'
import iconButton from '@/components/ui/button/iconButton/iconButton.vue'
import blockButton from '@/components/ui/button/blockButton/blockButton.vue'
import exitButton from '@/components/ui/button/exitButton/exitButton.vue'
import navigation from '@/components/ui/navigation/navigation.vue'

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    infoBlockM,
    infoBlockS,
    bank,
    skipButton,
    iconButton,
    navigation,
    blockButton,
    exitButton
  },
  methods: {
    nextFunc() {
      console.log('Next step')
    }
  }
})
</script>

<style module='styles'>
  
</style>