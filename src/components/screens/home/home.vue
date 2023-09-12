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

      <iconButton @onclick="turnOffVolume">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM10 8.82998V15.17L7.83 13H5V11H7.83L10 8.82998ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" fill="currentColor"/>
        </svg>
      </iconButton>

      <iconButton @onclick="turnOffVolume">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M19.901 5.89L18.8507 1.52C18.6306 0.62 17.8504 0 16.9401 0H3.04562C2.14533 0 1.35507 0.63 1.145 1.52L0.094666 5.89C-0.145411 6.91 0.0746596 7.95 0.714866 8.77C0.794891 8.88 0.904927 8.96 0.994956 9.06V16C0.994956 17.1 1.89525 18 2.9956 18H17.0001C18.1005 18 19.0007 17.1 19.0007 16V9.06C19.0908 8.97 19.2008 8.88 19.2808 8.78C19.921 7.96 20.1511 6.91 19.901 5.89ZM16.9101 1.99L17.9604 6.36C18.0604 6.78 17.9704 7.2 17.7103 7.53C17.5703 7.71 17.2702 8 16.77 8C16.1598 8 15.6297 7.51 15.5596 6.86L14.9795 2L16.9101 1.99ZM10.9982 2H12.9588L13.499 6.52C13.549 6.91 13.429 7.3 13.1689 7.59C12.9488 7.85 12.6287 8 12.2186 8C11.5484 8 10.9982 7.41 10.9982 6.69V2ZM6.48672 6.52L7.0369 2H8.99753V6.69C8.99753 7.41 8.44735 8 7.70712 8C7.36701 8 7.05691 7.85 6.81683 7.59C6.56675 7.3 6.44671 6.91 6.48672 6.52ZM2.03529 6.36L3.04562 2H5.01625L4.43606 6.86C4.35604 7.51 3.83587 8 3.22567 8C2.73552 8 2.42542 7.71 2.29537 7.53C2.02529 7.21 1.93526 6.78 2.03529 6.36ZM2.9956 16V9.97C3.07563 9.98 3.14565 10 3.22567 10C4.09595 10 4.88621 9.64 5.46639 9.05C6.06659 9.65 6.86684 10 7.77714 10C8.64742 10 9.42767 9.64 10.0079 9.07C10.598 9.64 11.3983 10 12.2986 10C13.1389 10 13.9391 9.65 14.5393 9.05C15.1195 9.64 15.9098 10 16.78 10C16.8601 10 16.9301 9.98 17.0101 9.97V16H2.9956Z" fill="currentColor"/>
        </svg>
      </iconButton>

      <iconButton @onclick="turnOffVolume">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M16.7368 21.15H14.6316V30.6H16.7368V21.15ZM23.0526 21.15H20.9474V30.6H23.0526V21.15ZM32 33.3H12V36H32V33.3ZM29.3684 21.15H27.2632V30.6H29.3684V21.15ZM22 12.051L27.4842 15.75H16.5158L22 12.051ZM22 9L12 15.75V18.45H32V15.75L22 9Z" fill="currentColor"/>
        </svg>
      </iconButton>

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

export default Vue.extend({
  name: 'home',
  components: {
    layout,
    infoBlockM,
    infoBlockS,
    bank,
    skipButton,
    iconButton
  },
  methods: {
    nextFunc() {
      console.log('Next step')
    },
    turnOffVolume() {
      console.log('turn off volume')
    }
  },
})
</script>

<style module='styles'>
  
</style>