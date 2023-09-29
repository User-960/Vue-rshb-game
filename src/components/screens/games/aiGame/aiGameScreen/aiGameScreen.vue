<template>
  <div :class='styles.border' data-testid='aiGameScreen'>
    <div :class='styles.screen'>
      <ul :class='styles.levelsList'>

        <li :class='styles.levelsItem'>
          <ul :class='styles.indicatorsList'>
            <li :class='[styles.indicatorsItem, styles.moistureItem]'>
              <div :class='[
                  styles.moistureIcon, 
                  {[styles.moistureIconCritical]: isTomatoMoistureLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                  <path d="M14.7361 4.43618C13.3777 2.84401 11.8488 1.41031 10.1778 0.161582C10.0299 0.0564142 9.85363 0 9.67302 0C9.49241 0 9.31618 0.0564142 9.16826 0.161582C7.50028 1.41083 5.9744 2.84452 4.61877 4.43618C1.59567 7.95965 0 11.674 0 15.1785C0 17.7833 1.01958 20.2814 2.83445 22.1233C4.64932 23.9652 7.11081 25 9.67742 25C12.244 25 14.7055 23.9652 16.5204 22.1233C18.3353 20.2814 19.3548 17.7833 19.3548 15.1785C19.3548 11.674 17.7592 7.95965 14.7361 4.43618ZM9.67742 23.2143C7.57818 23.2119 5.56559 22.3645 4.0812 20.858C2.59681 19.3515 1.76186 17.309 1.75953 15.1785C1.75953 8.79113 7.8596 3.45961 9.67742 2.0087C11.4952 3.45961 17.5953 8.7889 17.5953 15.1785C17.593 17.309 16.758 19.3515 15.2736 20.858C13.7893 22.3645 11.7767 23.2119 9.67742 23.2143Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.moistureNumber, {[styles.moistureNumberCritical]: isTomatoMoistureLineCritical}]'></div>
                  <div :class='[
                      styles.moistureLineFull, 
                      {[styles.moistureLineFullCritical]: isTomatoMoistureLineCritical}
                    ]'
                  ></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.temperatureItem]'>
              <div :class='[
                  styles.temperatureIcon, 
                  {[styles.temperatureIconCritical]: isTomatoTemperatureLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M20.9333 10.2667V7.06667C20.9333 6.78377 21.0457 6.51246 21.2458 6.31242C21.4458 6.11238 21.7171 6 22 6C22.2829 6 22.5542 6.11238 22.7542 6.31242C22.9543 6.51246 23.0667 6.78377 23.0667 7.06667V10.2667C23.0667 10.5496 22.9543 10.8209 22.7542 11.0209C22.5542 11.221 22.2829 11.3333 22 11.3333C21.7171 11.3333 21.4458 11.221 21.2458 11.0209C21.0457 10.8209 20.9333 10.5496 20.9333 10.2667ZM30.5333 22C30.5333 23.6877 30.0329 25.3376 29.0952 26.7409C28.1576 28.1442 26.8248 29.2379 25.2656 29.8838C23.7063 30.5296 21.9905 30.6986 20.3352 30.3694C18.6799 30.0401 17.1594 29.2274 15.966 28.034C14.7726 26.8406 13.9599 25.3201 13.6306 23.6648C13.3014 22.0095 13.4704 20.2937 14.1162 18.7344C14.7621 17.1752 15.8558 15.8424 17.2591 14.9048C18.6624 13.9671 20.3123 13.4667 22 13.4667C24.2624 13.4691 26.4315 14.369 28.0312 15.9688C29.631 17.5685 30.5309 19.7376 30.5333 22ZM28.4 22C28.4 20.7342 28.0246 19.4968 27.3214 18.4444C26.6182 17.3919 25.6186 16.5716 24.4492 16.0872C23.2797 15.6028 21.9929 15.476 20.7514 15.723C19.5099 15.9699 18.3696 16.5795 17.4745 17.4745C16.5795 18.3696 15.9699 19.5099 15.723 20.7514C15.476 21.9929 15.6028 23.2797 16.0872 24.4492C16.5716 25.6186 17.3919 26.6182 18.4444 27.3214C19.4968 28.0246 20.7342 28.4 22 28.4C23.6968 28.3982 25.3237 27.7234 26.5235 26.5235C27.7234 25.3237 28.3982 23.6968 28.4 22ZM12.712 14.2213C12.9121 14.4215 13.1836 14.5339 13.4667 14.5339C13.7497 14.5339 14.0212 14.4215 14.2213 14.2213C14.4215 14.0212 14.5339 13.7497 14.5339 13.4667C14.5339 13.1836 14.4215 12.9121 14.2213 12.712L12.088 10.5787C11.8878 10.3785 11.6164 10.2661 11.3333 10.2661C11.0503 10.2661 10.7788 10.3785 10.5787 10.5787C10.3785 10.7788 10.2661 11.0503 10.2661 11.3333C10.2661 11.6164 10.3785 11.8878 10.5787 12.088L12.712 14.2213ZM12.712 29.7787L10.5787 31.912C10.3785 32.1121 10.2661 32.3836 10.2661 32.6667C10.2661 32.9497 10.3785 33.2212 10.5787 33.4213C10.7788 33.6215 11.0503 33.7339 11.3333 33.7339C11.6164 33.7339 11.8878 33.6215 12.088 33.4213L14.2213 31.288C14.3204 31.1889 14.3991 31.0712 14.4527 30.9418C14.5063 30.8123 14.5339 30.6735 14.5339 30.5333C14.5339 30.3932 14.5063 30.2544 14.4527 30.1249C14.3991 29.9954 14.3204 29.8778 14.2213 29.7787C14.1222 29.6796 14.0046 29.6009 13.8751 29.5473C13.7456 29.4937 13.6068 29.4661 13.4667 29.4661C13.3265 29.4661 13.1877 29.4937 13.0582 29.5473C12.9288 29.6009 12.8111 29.6796 12.712 29.7787ZM30.5333 14.5333C30.6735 14.5334 30.8122 14.5059 30.9417 14.4524C31.0712 14.3989 31.1889 14.3204 31.288 14.2213L33.4213 12.088C33.6215 11.8878 33.7339 11.6164 33.7339 11.3333C33.7339 11.0503 33.6215 10.7788 33.4213 10.5787C33.2212 10.3785 32.9497 10.2661 32.6667 10.2661C32.3836 10.2661 32.1121 10.3785 31.912 10.5787L29.7787 12.712C29.6293 12.8612 29.5276 13.0513 29.4864 13.2583C29.4451 13.4654 29.4663 13.68 29.5471 13.875C29.6279 14.07 29.7647 14.2366 29.9403 14.3538C30.1159 14.471 30.3222 14.5335 30.5333 14.5333ZM31.288 29.7787C31.0878 29.5785 30.8164 29.4661 30.5333 29.4661C30.2503 29.4661 29.9788 29.5785 29.7787 29.7787C29.5785 29.9788 29.4661 30.2503 29.4661 30.5333C29.4661 30.8164 29.5785 31.0878 29.7787 31.288L31.912 33.4213C32.0111 33.5204 32.1288 33.5991 32.2582 33.6527C32.3877 33.7063 32.5265 33.7339 32.6667 33.7339C32.8068 33.7339 32.9456 33.7063 33.0751 33.6527C33.2046 33.5991 33.3222 33.5204 33.4213 33.4213C33.5204 33.3222 33.5991 33.2046 33.6527 33.0751C33.7063 32.9456 33.7339 32.8068 33.7339 32.6667C33.7339 32.5265 33.7063 32.3877 33.6527 32.2582C33.5991 32.1288 33.5204 32.0111 33.4213 31.912L31.288 29.7787ZM11.3333 22C11.3333 21.7171 11.221 21.4458 11.0209 21.2458C10.8209 21.0457 10.5496 20.9333 10.2667 20.9333H7.06667C6.78377 20.9333 6.51246 21.0457 6.31242 21.2458C6.11238 21.4458 6 21.7171 6 22C6 22.2829 6.11238 22.5542 6.31242 22.7542C6.51246 22.9543 6.78377 23.0667 7.06667 23.0667H10.2667C10.5496 23.0667 10.8209 22.9543 11.0209 22.7542C11.221 22.5542 11.3333 22.2829 11.3333 22ZM22 32.6667C21.7171 32.6667 21.4458 32.779 21.2458 32.9791C21.0457 33.1791 20.9333 33.4504 20.9333 33.7333V36.9333C20.9333 37.2162 21.0457 37.4875 21.2458 37.6876C21.4458 37.8876 21.7171 38 22 38C22.2829 38 22.5542 37.8876 22.7542 37.6876C22.9543 37.4875 23.0667 37.2162 23.0667 36.9333V33.7333C23.0667 33.4504 22.9543 33.1791 22.7542 32.9791C22.5542 32.779 22.2829 32.6667 22 32.6667ZM36.9333 20.9333H33.7333C33.4504 20.9333 33.1791 21.0457 32.9791 21.2458C32.779 21.4458 32.6667 21.7171 32.6667 22C32.6667 22.2829 32.779 22.5542 32.9791 22.7542C33.1791 22.9543 33.4504 23.0667 33.7333 23.0667H36.9333C37.2162 23.0667 37.4875 22.9543 37.6876 22.7542C37.8876 22.5542 38 22.2829 38 22C38 21.7171 37.8876 21.4458 37.6876 21.2458C37.4875 21.0457 37.2162 20.9333 36.9333 20.9333Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.temperatureNumber, {[styles.temperatureNumberCritical]: isTomatoTemperatureLineCritical}]'></div>
                  <div :class='[styles.temperatureLineFull, {[styles.temperatureLineFullCritical]: isTomatoTemperatureLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.healthItem]'>
              <div :class='[
                  styles.healthIcon, 
                  {[styles.healthIconCritical]: isTomatoHealthLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 14.7133L21.3883 15.2848C21.4666 15.3686 21.5613 15.4355 21.6666 15.4812C21.7718 15.5269 21.8853 15.5504 22 15.5504C22.1147 15.5504 22.2282 15.5269 22.3335 15.4812C22.4387 15.4355 22.5334 15.3686 22.6117 15.2848L22 14.7133ZM19.1356 29.4727C17.517 28.16 15.6283 26.4376 14.1503 24.5522C12.6556 22.6467 11.6744 20.6898 11.6744 18.8926H10C10 21.2558 11.2614 23.5832 12.832 25.5858C14.4193 27.6097 16.4153 29.4214 18.0807 30.7732L19.1356 29.4727ZM11.6744 18.8926C11.6744 15.6498 13.0899 13.6461 14.8402 12.9596C16.5872 12.2753 19.0307 12.7643 21.3883 15.2848L22.6117 14.1417C19.946 11.2908 16.8082 10.3911 14.2296 11.4002C11.6543 12.4093 10 15.1799 10 18.8926H11.6744ZM25.9181 30.7721C27.5847 29.4203 29.5807 27.6085 31.168 25.5847C32.7386 23.5821 34 21.2547 34 18.8904H32.3256C32.3256 20.6898 31.3433 22.6456 29.8497 24.5511C28.3717 26.4364 26.483 28.1589 24.8644 29.4716L25.9181 30.7721ZM34 18.8904C34 15.1788 32.3457 12.4082 29.7693 11.4002C27.1907 10.3899 24.054 11.2885 21.3883 14.1406L22.6117 15.2848C24.9693 12.7643 27.4128 12.2742 29.1598 12.9585C30.9101 13.6439 32.3256 15.6487 32.3256 18.8904H34ZM18.0807 30.7732C19.4984 31.9252 20.4841 32.7702 22 32.7702V31.0958C21.1929 31.0958 20.6906 30.7341 19.1356 29.4727L18.0807 30.7732ZM24.8644 29.4716C23.3094 30.733 22.8071 31.0958 22 31.0958V32.7702C23.5159 32.7702 24.5016 31.9252 25.9193 30.7732L24.8644 29.4716Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.healthNumber, {[styles.healthNumberCritical]: isTomatoHealthLineCritical}]'></div>
                  <div :class='[styles.healthLineFull, {[styles.healthLineFullCritical]: isTomatoHealthLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.caterpillarItem]'>
              <div :class='[
                  styles.caterpillarIcon, 
                  {[styles.caterpillarIconCritical]: isTomatoCaterpillarLineCritical}
                ]'
              >
                <img src='../../../../../../public/images/caterpillarAiGame.svg' alt='image of worm' draggable='false' />
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.caterpillarNumber, {[styles.caterpillarNumberCritical]: isTomatoCaterpillarLineCritical}]'></div>
                  <div :class='[styles.caterpillarLineFull, {[styles.caterpillarLineFullCritical]: isTomatoCaterpillarLineCritical}]'></div>
                </div>
              </div>
            </li>
          </ul>

          <div :class='styles.aiLevel'>
            <div :class='styles.aiLevelImgWrapper' @click='chooseTomatoLevel'>
              <img 
                :class='[
                  styles.aiLevelImg, 
                  {[styles.aiTomatoLevelImgActive]: isChosenTomatoLevel}
                ]' 
                src='../../../../../../public/images/tomatoBushGreen.svg' 
                alt='image of first level' 
                draggable='false' 
              />
            </div>

            <button :class='[
                styles.restartSystemBtn, 
                {[styles.isTomatoBtnRestartActive]: isTomatoBtnRestart}
              ]'
              @click='restartTomatoSystem'
            >Перезапуск системы</button>
          </div>
        </li>
        
        <li :class='styles.levelsItem' @click='chooseTomatoLevel'>
          <ul :class='styles.indicatorsList'>
            <li :class='[styles.indicatorsItem, styles.moistureItem]'>
              <div :class='[
                  styles.moistureIcon, 
                  {[styles.moistureIconCritical]: isStrawberryLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                  <path d="M14.7361 4.43618C13.3777 2.84401 11.8488 1.41031 10.1778 0.161582C10.0299 0.0564142 9.85363 0 9.67302 0C9.49241 0 9.31618 0.0564142 9.16826 0.161582C7.50028 1.41083 5.9744 2.84452 4.61877 4.43618C1.59567 7.95965 0 11.674 0 15.1785C0 17.7833 1.01958 20.2814 2.83445 22.1233C4.64932 23.9652 7.11081 25 9.67742 25C12.244 25 14.7055 23.9652 16.5204 22.1233C18.3353 20.2814 19.3548 17.7833 19.3548 15.1785C19.3548 11.674 17.7592 7.95965 14.7361 4.43618ZM9.67742 23.2143C7.57818 23.2119 5.56559 22.3645 4.0812 20.858C2.59681 19.3515 1.76186 17.309 1.75953 15.1785C1.75953 8.79113 7.8596 3.45961 9.67742 2.0087C11.4952 3.45961 17.5953 8.7889 17.5953 15.1785C17.593 17.309 16.758 19.3515 15.2736 20.858C13.7893 22.3645 11.7767 23.2119 9.67742 23.2143Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.moistureNumber, {[styles.moistureNumberCritical]: isStrawberryLineCritical}]'></div>
                  <div :class='[styles.moistureLineFull, {[styles.moistureLineFullCritical]: isStrawberryLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.temperatureItem]'>
              <div :class='[
                  styles.temperatureIcon, 
                  {[styles.temperatureIconCritical]: isStrawberryLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M20.9333 10.2667V7.06667C20.9333 6.78377 21.0457 6.51246 21.2458 6.31242C21.4458 6.11238 21.7171 6 22 6C22.2829 6 22.5542 6.11238 22.7542 6.31242C22.9543 6.51246 23.0667 6.78377 23.0667 7.06667V10.2667C23.0667 10.5496 22.9543 10.8209 22.7542 11.0209C22.5542 11.221 22.2829 11.3333 22 11.3333C21.7171 11.3333 21.4458 11.221 21.2458 11.0209C21.0457 10.8209 20.9333 10.5496 20.9333 10.2667ZM30.5333 22C30.5333 23.6877 30.0329 25.3376 29.0952 26.7409C28.1576 28.1442 26.8248 29.2379 25.2656 29.8838C23.7063 30.5296 21.9905 30.6986 20.3352 30.3694C18.6799 30.0401 17.1594 29.2274 15.966 28.034C14.7726 26.8406 13.9599 25.3201 13.6306 23.6648C13.3014 22.0095 13.4704 20.2937 14.1162 18.7344C14.7621 17.1752 15.8558 15.8424 17.2591 14.9048C18.6624 13.9671 20.3123 13.4667 22 13.4667C24.2624 13.4691 26.4315 14.369 28.0312 15.9688C29.631 17.5685 30.5309 19.7376 30.5333 22ZM28.4 22C28.4 20.7342 28.0246 19.4968 27.3214 18.4444C26.6182 17.3919 25.6186 16.5716 24.4492 16.0872C23.2797 15.6028 21.9929 15.476 20.7514 15.723C19.5099 15.9699 18.3696 16.5795 17.4745 17.4745C16.5795 18.3696 15.9699 19.5099 15.723 20.7514C15.476 21.9929 15.6028 23.2797 16.0872 24.4492C16.5716 25.6186 17.3919 26.6182 18.4444 27.3214C19.4968 28.0246 20.7342 28.4 22 28.4C23.6968 28.3982 25.3237 27.7234 26.5235 26.5235C27.7234 25.3237 28.3982 23.6968 28.4 22ZM12.712 14.2213C12.9121 14.4215 13.1836 14.5339 13.4667 14.5339C13.7497 14.5339 14.0212 14.4215 14.2213 14.2213C14.4215 14.0212 14.5339 13.7497 14.5339 13.4667C14.5339 13.1836 14.4215 12.9121 14.2213 12.712L12.088 10.5787C11.8878 10.3785 11.6164 10.2661 11.3333 10.2661C11.0503 10.2661 10.7788 10.3785 10.5787 10.5787C10.3785 10.7788 10.2661 11.0503 10.2661 11.3333C10.2661 11.6164 10.3785 11.8878 10.5787 12.088L12.712 14.2213ZM12.712 29.7787L10.5787 31.912C10.3785 32.1121 10.2661 32.3836 10.2661 32.6667C10.2661 32.9497 10.3785 33.2212 10.5787 33.4213C10.7788 33.6215 11.0503 33.7339 11.3333 33.7339C11.6164 33.7339 11.8878 33.6215 12.088 33.4213L14.2213 31.288C14.3204 31.1889 14.3991 31.0712 14.4527 30.9418C14.5063 30.8123 14.5339 30.6735 14.5339 30.5333C14.5339 30.3932 14.5063 30.2544 14.4527 30.1249C14.3991 29.9954 14.3204 29.8778 14.2213 29.7787C14.1222 29.6796 14.0046 29.6009 13.8751 29.5473C13.7456 29.4937 13.6068 29.4661 13.4667 29.4661C13.3265 29.4661 13.1877 29.4937 13.0582 29.5473C12.9288 29.6009 12.8111 29.6796 12.712 29.7787ZM30.5333 14.5333C30.6735 14.5334 30.8122 14.5059 30.9417 14.4524C31.0712 14.3989 31.1889 14.3204 31.288 14.2213L33.4213 12.088C33.6215 11.8878 33.7339 11.6164 33.7339 11.3333C33.7339 11.0503 33.6215 10.7788 33.4213 10.5787C33.2212 10.3785 32.9497 10.2661 32.6667 10.2661C32.3836 10.2661 32.1121 10.3785 31.912 10.5787L29.7787 12.712C29.6293 12.8612 29.5276 13.0513 29.4864 13.2583C29.4451 13.4654 29.4663 13.68 29.5471 13.875C29.6279 14.07 29.7647 14.2366 29.9403 14.3538C30.1159 14.471 30.3222 14.5335 30.5333 14.5333ZM31.288 29.7787C31.0878 29.5785 30.8164 29.4661 30.5333 29.4661C30.2503 29.4661 29.9788 29.5785 29.7787 29.7787C29.5785 29.9788 29.4661 30.2503 29.4661 30.5333C29.4661 30.8164 29.5785 31.0878 29.7787 31.288L31.912 33.4213C32.0111 33.5204 32.1288 33.5991 32.2582 33.6527C32.3877 33.7063 32.5265 33.7339 32.6667 33.7339C32.8068 33.7339 32.9456 33.7063 33.0751 33.6527C33.2046 33.5991 33.3222 33.5204 33.4213 33.4213C33.5204 33.3222 33.5991 33.2046 33.6527 33.0751C33.7063 32.9456 33.7339 32.8068 33.7339 32.6667C33.7339 32.5265 33.7063 32.3877 33.6527 32.2582C33.5991 32.1288 33.5204 32.0111 33.4213 31.912L31.288 29.7787ZM11.3333 22C11.3333 21.7171 11.221 21.4458 11.0209 21.2458C10.8209 21.0457 10.5496 20.9333 10.2667 20.9333H7.06667C6.78377 20.9333 6.51246 21.0457 6.31242 21.2458C6.11238 21.4458 6 21.7171 6 22C6 22.2829 6.11238 22.5542 6.31242 22.7542C6.51246 22.9543 6.78377 23.0667 7.06667 23.0667H10.2667C10.5496 23.0667 10.8209 22.9543 11.0209 22.7542C11.221 22.5542 11.3333 22.2829 11.3333 22ZM22 32.6667C21.7171 32.6667 21.4458 32.779 21.2458 32.9791C21.0457 33.1791 20.9333 33.4504 20.9333 33.7333V36.9333C20.9333 37.2162 21.0457 37.4875 21.2458 37.6876C21.4458 37.8876 21.7171 38 22 38C22.2829 38 22.5542 37.8876 22.7542 37.6876C22.9543 37.4875 23.0667 37.2162 23.0667 36.9333V33.7333C23.0667 33.4504 22.9543 33.1791 22.7542 32.9791C22.5542 32.779 22.2829 32.6667 22 32.6667ZM36.9333 20.9333H33.7333C33.4504 20.9333 33.1791 21.0457 32.9791 21.2458C32.779 21.4458 32.6667 21.7171 32.6667 22C32.6667 22.2829 32.779 22.5542 32.9791 22.7542C33.1791 22.9543 33.4504 23.0667 33.7333 23.0667H36.9333C37.2162 23.0667 37.4875 22.9543 37.6876 22.7542C37.8876 22.5542 38 22.2829 38 22C38 21.7171 37.8876 21.4458 37.6876 21.2458C37.4875 21.0457 37.2162 20.9333 36.9333 20.9333Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.temperatureNumber, {[styles.temperatureNumberCritical]: isStrawberryLineCritical}]'></div>
                  <div :class='[styles.temperatureLineFull, {[styles.temperatureLineFullCritical]: isStrawberryLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.healthItem]'>
              <div :class='[
                  styles.healthIcon, 
                  {[styles.healthIconCritical]: isStrawberryLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 14.7133L21.3883 15.2848C21.4666 15.3686 21.5613 15.4355 21.6666 15.4812C21.7718 15.5269 21.8853 15.5504 22 15.5504C22.1147 15.5504 22.2282 15.5269 22.3335 15.4812C22.4387 15.4355 22.5334 15.3686 22.6117 15.2848L22 14.7133ZM19.1356 29.4727C17.517 28.16 15.6283 26.4376 14.1503 24.5522C12.6556 22.6467 11.6744 20.6898 11.6744 18.8926H10C10 21.2558 11.2614 23.5832 12.832 25.5858C14.4193 27.6097 16.4153 29.4214 18.0807 30.7732L19.1356 29.4727ZM11.6744 18.8926C11.6744 15.6498 13.0899 13.6461 14.8402 12.9596C16.5872 12.2753 19.0307 12.7643 21.3883 15.2848L22.6117 14.1417C19.946 11.2908 16.8082 10.3911 14.2296 11.4002C11.6543 12.4093 10 15.1799 10 18.8926H11.6744ZM25.9181 30.7721C27.5847 29.4203 29.5807 27.6085 31.168 25.5847C32.7386 23.5821 34 21.2547 34 18.8904H32.3256C32.3256 20.6898 31.3433 22.6456 29.8497 24.5511C28.3717 26.4364 26.483 28.1589 24.8644 29.4716L25.9181 30.7721ZM34 18.8904C34 15.1788 32.3457 12.4082 29.7693 11.4002C27.1907 10.3899 24.054 11.2885 21.3883 14.1406L22.6117 15.2848C24.9693 12.7643 27.4128 12.2742 29.1598 12.9585C30.9101 13.6439 32.3256 15.6487 32.3256 18.8904H34ZM18.0807 30.7732C19.4984 31.9252 20.4841 32.7702 22 32.7702V31.0958C21.1929 31.0958 20.6906 30.7341 19.1356 29.4727L18.0807 30.7732ZM24.8644 29.4716C23.3094 30.733 22.8071 31.0958 22 31.0958V32.7702C23.5159 32.7702 24.5016 31.9252 25.9193 30.7732L24.8644 29.4716Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.healthNumber, {[styles.healthNumberCritical]: isStrawberryLineCritical}]'></div>
                  <div :class='[styles.healthLineFull, {[styles.healthLineFullCritical]: isStrawberryLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.caterpillarItem]'>
              <div :class='[
                  styles.temperatureIcon, 
                  {[styles.temperatureIconCritical]: isStrawberryLineCritical}
                ]'
              >
                <img src='../../../../../../public/images/bugAiGame.svg' alt='image of worm' draggable='false' />
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.caterpillarNumber, {[styles.caterpillarNumberCritical]: isStrawberryLineCritical}]'></div>
                  <div :class='[styles.caterpillarLineFull, {[styles.caterpillarLineFullCritical]: isStrawberryLineCritical}]'></div>
                </div>
              </div>
            </li>
          </ul>

          <div :class='styles.aiLevel'>
            <div :class='styles.aiLevelImgWrapper'>
              <img 
                :class='[
                  styles.aiLevelImg, 
                  {[styles.aiLevelImgActive]: isChosenTomatoLevel}
                ]' 
                src='../../../../../../public/images/pepperBushGreen.svg' 
                alt='image of first level' 
                draggable='false' 
              />
            </div>

            <button :class='styles.restartSystemBtn'>Перезапуск системы</button>
          </div>
        </li>

        <li :class='styles.levelsItem' @click='chooseTomatoLevel'>
          <ul :class='styles.indicatorsList'>
            <li :class='[styles.indicatorsItem, styles.moistureItem]'>
              <div :class='[
                  styles.moistureIcon, 
                  {[styles.moistureIconCritical]: isPepperLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                  <path d="M14.7361 4.43618C13.3777 2.84401 11.8488 1.41031 10.1778 0.161582C10.0299 0.0564142 9.85363 0 9.67302 0C9.49241 0 9.31618 0.0564142 9.16826 0.161582C7.50028 1.41083 5.9744 2.84452 4.61877 4.43618C1.59567 7.95965 0 11.674 0 15.1785C0 17.7833 1.01958 20.2814 2.83445 22.1233C4.64932 23.9652 7.11081 25 9.67742 25C12.244 25 14.7055 23.9652 16.5204 22.1233C18.3353 20.2814 19.3548 17.7833 19.3548 15.1785C19.3548 11.674 17.7592 7.95965 14.7361 4.43618ZM9.67742 23.2143C7.57818 23.2119 5.56559 22.3645 4.0812 20.858C2.59681 19.3515 1.76186 17.309 1.75953 15.1785C1.75953 8.79113 7.8596 3.45961 9.67742 2.0087C11.4952 3.45961 17.5953 8.7889 17.5953 15.1785C17.593 17.309 16.758 19.3515 15.2736 20.858C13.7893 22.3645 11.7767 23.2119 9.67742 23.2143Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.moistureNumber, {[styles.moistureNumberCritical]: isPepperLineCritical}]'></div>
                  <div :class='[styles.moistureLineFull, {[styles.moistureLineFullCritical]: isPepperLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.temperatureItem]'>
              <div :class='[
                  styles.temperatureIcon, 
                  {[styles.temperatureIconCritical]: isPepperLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M20.9333 10.2667V7.06667C20.9333 6.78377 21.0457 6.51246 21.2458 6.31242C21.4458 6.11238 21.7171 6 22 6C22.2829 6 22.5542 6.11238 22.7542 6.31242C22.9543 6.51246 23.0667 6.78377 23.0667 7.06667V10.2667C23.0667 10.5496 22.9543 10.8209 22.7542 11.0209C22.5542 11.221 22.2829 11.3333 22 11.3333C21.7171 11.3333 21.4458 11.221 21.2458 11.0209C21.0457 10.8209 20.9333 10.5496 20.9333 10.2667ZM30.5333 22C30.5333 23.6877 30.0329 25.3376 29.0952 26.7409C28.1576 28.1442 26.8248 29.2379 25.2656 29.8838C23.7063 30.5296 21.9905 30.6986 20.3352 30.3694C18.6799 30.0401 17.1594 29.2274 15.966 28.034C14.7726 26.8406 13.9599 25.3201 13.6306 23.6648C13.3014 22.0095 13.4704 20.2937 14.1162 18.7344C14.7621 17.1752 15.8558 15.8424 17.2591 14.9048C18.6624 13.9671 20.3123 13.4667 22 13.4667C24.2624 13.4691 26.4315 14.369 28.0312 15.9688C29.631 17.5685 30.5309 19.7376 30.5333 22ZM28.4 22C28.4 20.7342 28.0246 19.4968 27.3214 18.4444C26.6182 17.3919 25.6186 16.5716 24.4492 16.0872C23.2797 15.6028 21.9929 15.476 20.7514 15.723C19.5099 15.9699 18.3696 16.5795 17.4745 17.4745C16.5795 18.3696 15.9699 19.5099 15.723 20.7514C15.476 21.9929 15.6028 23.2797 16.0872 24.4492C16.5716 25.6186 17.3919 26.6182 18.4444 27.3214C19.4968 28.0246 20.7342 28.4 22 28.4C23.6968 28.3982 25.3237 27.7234 26.5235 26.5235C27.7234 25.3237 28.3982 23.6968 28.4 22ZM12.712 14.2213C12.9121 14.4215 13.1836 14.5339 13.4667 14.5339C13.7497 14.5339 14.0212 14.4215 14.2213 14.2213C14.4215 14.0212 14.5339 13.7497 14.5339 13.4667C14.5339 13.1836 14.4215 12.9121 14.2213 12.712L12.088 10.5787C11.8878 10.3785 11.6164 10.2661 11.3333 10.2661C11.0503 10.2661 10.7788 10.3785 10.5787 10.5787C10.3785 10.7788 10.2661 11.0503 10.2661 11.3333C10.2661 11.6164 10.3785 11.8878 10.5787 12.088L12.712 14.2213ZM12.712 29.7787L10.5787 31.912C10.3785 32.1121 10.2661 32.3836 10.2661 32.6667C10.2661 32.9497 10.3785 33.2212 10.5787 33.4213C10.7788 33.6215 11.0503 33.7339 11.3333 33.7339C11.6164 33.7339 11.8878 33.6215 12.088 33.4213L14.2213 31.288C14.3204 31.1889 14.3991 31.0712 14.4527 30.9418C14.5063 30.8123 14.5339 30.6735 14.5339 30.5333C14.5339 30.3932 14.5063 30.2544 14.4527 30.1249C14.3991 29.9954 14.3204 29.8778 14.2213 29.7787C14.1222 29.6796 14.0046 29.6009 13.8751 29.5473C13.7456 29.4937 13.6068 29.4661 13.4667 29.4661C13.3265 29.4661 13.1877 29.4937 13.0582 29.5473C12.9288 29.6009 12.8111 29.6796 12.712 29.7787ZM30.5333 14.5333C30.6735 14.5334 30.8122 14.5059 30.9417 14.4524C31.0712 14.3989 31.1889 14.3204 31.288 14.2213L33.4213 12.088C33.6215 11.8878 33.7339 11.6164 33.7339 11.3333C33.7339 11.0503 33.6215 10.7788 33.4213 10.5787C33.2212 10.3785 32.9497 10.2661 32.6667 10.2661C32.3836 10.2661 32.1121 10.3785 31.912 10.5787L29.7787 12.712C29.6293 12.8612 29.5276 13.0513 29.4864 13.2583C29.4451 13.4654 29.4663 13.68 29.5471 13.875C29.6279 14.07 29.7647 14.2366 29.9403 14.3538C30.1159 14.471 30.3222 14.5335 30.5333 14.5333ZM31.288 29.7787C31.0878 29.5785 30.8164 29.4661 30.5333 29.4661C30.2503 29.4661 29.9788 29.5785 29.7787 29.7787C29.5785 29.9788 29.4661 30.2503 29.4661 30.5333C29.4661 30.8164 29.5785 31.0878 29.7787 31.288L31.912 33.4213C32.0111 33.5204 32.1288 33.5991 32.2582 33.6527C32.3877 33.7063 32.5265 33.7339 32.6667 33.7339C32.8068 33.7339 32.9456 33.7063 33.0751 33.6527C33.2046 33.5991 33.3222 33.5204 33.4213 33.4213C33.5204 33.3222 33.5991 33.2046 33.6527 33.0751C33.7063 32.9456 33.7339 32.8068 33.7339 32.6667C33.7339 32.5265 33.7063 32.3877 33.6527 32.2582C33.5991 32.1288 33.5204 32.0111 33.4213 31.912L31.288 29.7787ZM11.3333 22C11.3333 21.7171 11.221 21.4458 11.0209 21.2458C10.8209 21.0457 10.5496 20.9333 10.2667 20.9333H7.06667C6.78377 20.9333 6.51246 21.0457 6.31242 21.2458C6.11238 21.4458 6 21.7171 6 22C6 22.2829 6.11238 22.5542 6.31242 22.7542C6.51246 22.9543 6.78377 23.0667 7.06667 23.0667H10.2667C10.5496 23.0667 10.8209 22.9543 11.0209 22.7542C11.221 22.5542 11.3333 22.2829 11.3333 22ZM22 32.6667C21.7171 32.6667 21.4458 32.779 21.2458 32.9791C21.0457 33.1791 20.9333 33.4504 20.9333 33.7333V36.9333C20.9333 37.2162 21.0457 37.4875 21.2458 37.6876C21.4458 37.8876 21.7171 38 22 38C22.2829 38 22.5542 37.8876 22.7542 37.6876C22.9543 37.4875 23.0667 37.2162 23.0667 36.9333V33.7333C23.0667 33.4504 22.9543 33.1791 22.7542 32.9791C22.5542 32.779 22.2829 32.6667 22 32.6667ZM36.9333 20.9333H33.7333C33.4504 20.9333 33.1791 21.0457 32.9791 21.2458C32.779 21.4458 32.6667 21.7171 32.6667 22C32.6667 22.2829 32.779 22.5542 32.9791 22.7542C33.1791 22.9543 33.4504 23.0667 33.7333 23.0667H36.9333C37.2162 23.0667 37.4875 22.9543 37.6876 22.7542C37.8876 22.5542 38 22.2829 38 22C38 21.7171 37.8876 21.4458 37.6876 21.2458C37.4875 21.0457 37.2162 20.9333 36.9333 20.9333Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.temperatureNumber, {[styles.temperatureNumberCritical]: isPepperLineCritical}]'></div>
                  <div :class='[styles.temperatureLineFull, {[styles.temperatureLineFullCritical]: isPepperLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.healthItem]'>
              <div :class='[
                  styles.healthIcon, 
                  {[styles.healthIconCritical]: isPepperLineCritical}
                ]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M22 14.7133L21.3883 15.2848C21.4666 15.3686 21.5613 15.4355 21.6666 15.4812C21.7718 15.5269 21.8853 15.5504 22 15.5504C22.1147 15.5504 22.2282 15.5269 22.3335 15.4812C22.4387 15.4355 22.5334 15.3686 22.6117 15.2848L22 14.7133ZM19.1356 29.4727C17.517 28.16 15.6283 26.4376 14.1503 24.5522C12.6556 22.6467 11.6744 20.6898 11.6744 18.8926H10C10 21.2558 11.2614 23.5832 12.832 25.5858C14.4193 27.6097 16.4153 29.4214 18.0807 30.7732L19.1356 29.4727ZM11.6744 18.8926C11.6744 15.6498 13.0899 13.6461 14.8402 12.9596C16.5872 12.2753 19.0307 12.7643 21.3883 15.2848L22.6117 14.1417C19.946 11.2908 16.8082 10.3911 14.2296 11.4002C11.6543 12.4093 10 15.1799 10 18.8926H11.6744ZM25.9181 30.7721C27.5847 29.4203 29.5807 27.6085 31.168 25.5847C32.7386 23.5821 34 21.2547 34 18.8904H32.3256C32.3256 20.6898 31.3433 22.6456 29.8497 24.5511C28.3717 26.4364 26.483 28.1589 24.8644 29.4716L25.9181 30.7721ZM34 18.8904C34 15.1788 32.3457 12.4082 29.7693 11.4002C27.1907 10.3899 24.054 11.2885 21.3883 14.1406L22.6117 15.2848C24.9693 12.7643 27.4128 12.2742 29.1598 12.9585C30.9101 13.6439 32.3256 15.6487 32.3256 18.8904H34ZM18.0807 30.7732C19.4984 31.9252 20.4841 32.7702 22 32.7702V31.0958C21.1929 31.0958 20.6906 30.7341 19.1356 29.4727L18.0807 30.7732ZM24.8644 29.4716C23.3094 30.733 22.8071 31.0958 22 31.0958V32.7702C23.5159 32.7702 24.5016 31.9252 25.9193 30.7732L24.8644 29.4716Z" fill="currentColor"/>
                </svg>
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.healthNumber, {[styles.healthNumberCritical]: isPepperLineCritical}]'></div>
                  <div :class='[styles.healthLineFull, {[styles.healthLineFullCritical]: isPepperLineCritical}]'></div>
                </div>
              </div>
            </li>

            <li :class='[styles.indicatorsItem, styles.caterpillarItem]'>
              <div :class='[
                  styles.temperatureIcon, 
                  {[styles.temperatureIconCritical]: isPepperLineCritical}
                ]'
              >
                <img src='../../../../../../public/images/locustsAiGame.svg' alt='image of worm' draggable='false' />
              </div>

              <div :class='styles.indicatorLine'>
                <div :class='styles.indicatorLineWrapper'>
                  <p>0</p>
                  <div :class='[styles.caterpillarNumber, {[styles.caterpillarNumberCritical]: isPepperLineCritical}]'></div>
                  <div :class='[styles.caterpillarLineFull, {[styles.caterpillarLineFullCritical]: isPepperLineCritical}]'></div>
                </div>
              </div>
            </li>
          </ul>

          <div :class='styles.aiLevel'>
            <div :class='styles.aiLevelImgWrapper'>
              <img 
                :class='[
                  styles.aiLevelImg, 
                  {[styles.aiLevelImgActive]: isChosenTomatoLevel}
                ]' 
                src='../../../../../../public/images/strawberryBushGreen.svg' 
                alt='image of first level' 
                draggable='false' 
              />
            </div>

            <button :class='styles.restartSystemBtn'>Перезапуск системы</button>
          </div>
        </li>

        <li :class='[
          styles.systemNotification, 
          {[styles.systemNotificationActive]: isTomatoSystemBroken}
          ]'
        >
          Ошибка в системе участка с томатами!
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { EN_AiGameGetters } from '@/store/modules/aiGame/getters'
import { EN_AiGameMutation } from '@/store/modules/aiGame/mutations'
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import { EN_CONFIG } from '../config/config'
import { getRandomNumber } from '../helpers/helpers'
import { AUDIO_CONFIG } from '@/config/audio'

export default Vue.extend({
  name: 'aiGameScreen',
  data: () => ({
    isChosenTomatoLevel: false,
    isChosenPepperLevel: false,
    isChosenStrawberryLevel: false,

    isTomatoMoistureLineCritical: false,
    isTomatoMoistureLineReturn: false,
    isTomatoTemperatureLineCritical: false,
    isTomatoHealthLineCritical: false,
    isTomatoCaterpillarLineCritical: false,
    isTomatoBtnRestart: false,
    tomatoLevelMistakes: 1,
    isTomatoSystemBroken: false,
    isTomatoLevelRestart: true,

    isPepperLineCritical: false,
    isStrawberryLineCritical: false,
  }),
  computed: {
    ...mapGetters([
      EN_AiGameGetters.GET_START_GAME_AI,
      EN_AiGameGetters.GET_GAME_LOOP_AI,
      EN_AiGameGetters.GET_TOMATO_LEVEL_NUM_AI,
      EN_AiGameGetters.GET_PEPPER_LEVEL_NUM_AI,
      EN_AiGameGetters.GET_STRAWBERRY_LEVEL_NUM_AI,
      EN_AiGameGetters.GET_TIMER_AI,
      EN_AiGameGetters.GET_CHOSEN_BOOK_AI,
      EN_AiGameGetters.GET_CHOSEN_NUMPAD_AI
    ]),
  },
  watch: {
    GET_GAME_LOOP_AI() {
      if (this.GET_GAME_LOOP_AI < 4 && this.GET_START_GAME_AI) {
        let numberLevel = getRandomNumber(1, 2)

        if (this.GET_TOMATO_LEVEL_NUM_AI === numberLevel) {
          this.startTomatoLevel()
        }

        if (this.GET_PEPPER_LEVEL_NUM_AI === numberLevel) {
          this.startPepperLevel()
        }

        if (this.GET_STRAWBERRY_LEVEL_NUM_AI === numberLevel) {
          this.startStrawberryLevel()
        }
      } else {
        this.FINISH_GAME_AI()
        if (!this.GET_START_GAME_AI) {
          this.SHOW_VICTORY_BLOCK_AI()
        }
      }
    },
    // Tomato Level
    GET_CHOSEN_NUMPAD_AI() {
      if (this.isChosenTomatoLevel && 
          this.isTomatoMoistureLineCritical && 
          this.GET_CHOSEN_BOOK_AI
        ) {

        if (this.isTomatoMoistureLineCritical) {
          this.isTomatoMoistureLineCritical = false

          this.isChosenTomatoLevel = false
          this.isTomatoLevelRestart = true
          this.NOT_CHOOSE_BOOK_AI()
          this.NOT_CHOOSE_NUMPAD_AI()

          this.PLUS_POINTS_AI()
          this.GAME_LOOP_AI()
        }

      }
    },
    isTomatoMoistureLineCritical() {
      if (this.isTomatoMoistureLineCritical && !this.isTomatoSystemBroken) {
        setTimeout(() => {
          if (!this.isTomatoLevelRestart && 
              this.GET_TIMER_AI > 0 && 
              this.isTomatoMoistureLineCritical
            ) {
              if (this.tomatoLevelMistakes === 2) {
                this.NOT_CHOOSE_BOOK_AI()
                this.NOT_CHOOSE_NUMPAD_AI()

                this.MINUS_POINTS_AI()
                this.SHOW_LOSS_BLOCK_AI()
                this.START_FINISH_TIMER_AI()
              } else {
                this.isTomatoHealthLineCritical = true
                this.tomatoLevelMistakes += 1

                this.isTomatoMoistureLineCritical = false
                this.isChosenTomatoLevel = false
                this.isTomatoLevelRestart = true
                this.NOT_CHOOSE_BOOK_AI()
                this.NOT_CHOOSE_NUMPAD_AI()

                this.MINUS_POINTS_AI()
                this.GAME_LOOP_AI()
              }
          }
        }, 5000)
      }
    },
    isTomatoSystemBroken() {
      if (this.isTomatoSystemBroken && !this.isTomatoMoistureLineCritical) {
        setTimeout(() => {
          if (!this.isTomatoLevelRestart && 
              this.GET_TIMER_AI > 0 && 
              this.isTomatoSystemBroken
            ) {
              if (this.tomatoLevelMistakes === 2) {
                this.MINUS_POINTS_AI()
                this.SHOW_LOSS_BLOCK_AI()
                this.START_FINISH_TIMER_AI()
              } else {
                this.isTomatoHealthLineCritical = true
                this.isTomatoBtnRestart = false
                this.tomatoLevelMistakes += 1

                this.isTomatoSystemBroken = false
                this.isChosenTomatoLevel = false
                this.isTomatoLevelRestart = true

                this.MINUS_POINTS_AI()
                this.GAME_LOOP_AI()
              }
          }
        }, 5000)
      }
    },
    // Pepper Level
    isChosenPepperLevel() {
      // if (this.isDroneActive && this.isBugActive  && this.isPepperLineCritical) {
      //   this.isDroneMovedPepper = true
      // }

      // if (this.isDroneMovedPepper) {
      //   setTimeout(() => {
      //       this.isUltrasoundPepperActive = true
      //   }, EN_CONFIG.TIMING_DRONE_MOVED_PEPPER)
      // }
    },
    // Strawberry Level
    isChosenStrawberryLevel() {
      // if (this.isDroneActive && this.isLocustsActive && this.isStrawberryLineCritical) {
      //   this.isDroneMovedStrawberry = true
      // }

      // if (this.isDroneMovedStrawberry) {
      //   setTimeout(() => {
      //       this.isUltrasoundStrawberryActive = true
      //   }, EN_CONFIG.TIMING_DRONE_MOVED_STRAWBERRY)
      // }
    },
  },
  components: {},
  methods: {
    ...mapMutations([
      EN_AiGameMutation.START_GAME_AI,
      EN_AiGameMutation.FINISH_GAME_AI,
      EN_AiGameMutation.GAME_LOOP_AI,
      EN_AiGameMutation.PLUS_POINTS_AI,
      EN_AiGameMutation.MINUS_POINTS_AI,
      EN_AiGameMutation.SHOW_VICTORY_BLOCK_AI,
      EN_AiGameMutation.SHOW_LOSS_BLOCK_AI,
      EN_AiGameMutation.NOT_CHOOSE_BOOK_AI,
      EN_AiGameMutation.NOT_CHOOSE_NUMPAD_AI,
      EN_AiGameMutation.START_FINISH_TIMER_AI
    ]),
    startTomatoLevel() {
      let numberIndicator = getRandomNumber(1, 3)

      if (numberIndicator === 1) {
        this.isTomatoLevelRestart = false
        setTimeout(() => {
          this.isTomatoMoistureLineCritical = true
        }, EN_CONFIG.TIMING_LINE_CRITICAL_TOMATO)
      }

      // if (numberIndicator === 2) {
      //   this.isTomatoLevelRestart = false
      //   setTimeout(() => {
      //     this.isTomatoTemperatureLineCritical = true
      //   }, EN_CONFIG.TIMING_LINE_CRITICAL_TOMATO)
      // }

      if (numberIndicator === 2) {
        this.isTomatoLevelRestart = false
        setTimeout(() => {
          this.isTomatoSystemBroken = true
        }, EN_CONFIG.TIMING_SYSTEM_TOMATO)
      }
    },
    startPepperLevel() {
      setTimeout(() => {
        this.isPepperLineCritical = true
      }, EN_CONFIG.TIMING_LINE_CRITICAL_PEPPER)
    },
    startStrawberryLevel() {
      setTimeout(() => {
        this.isStrawberryLineCritical = true
      }, EN_CONFIG.TIMING_LINE_CRITICAL_STRAWBERRY)
    },
    chooseTomatoLevel() {
      const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		  audio.autoplay = true
		  audio.volume = 1

      if (this.isTomatoMoistureLineCritical) {
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenTomatoLevel = true
      }

      if (this.isTomatoSystemBroken) {
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenTomatoLevel = true
        this.isTomatoBtnRestart = true
      }
    },
    choosePepperLevel() {
      if (this.isPepperLineCritical) {
        const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		    audio.autoplay = true
		    audio.volume = 1

        this.isChosenTomatoLevel = false
        this.isChosenStrawberryLevel = false
        this.isChosenPepperLevel = true
      }
    },
    chooseStrawberryLevel() {
      if (this.isStrawberryLineCritical) {
        const audio = new Audio(AUDIO_CONFIG.AUDIO_CHOOSE_ACTION_COMPUTER)
		    audio.autoplay = true
		    audio.volume = 1
        
        this.isChosenTomatoLevel = false
        this.isChosenPepperLevel = false
        this.isChosenStrawberryLevel = true
      }
    },
    restartTomatoSystem() {
      if (this.isChosenTomatoLevel && this.isTomatoSystemBroken) {
          this.isTomatoSystemBroken = false
          this.isTomatoBtnRestart = false
          this.isChosenTomatoLevel = false
          this.isTomatoLevelRestart = true

          this.PLUS_POINTS_AI()
          this.GAME_LOOP_AI()
        
      }
    }
  }
})
</script>

<style src='./aiGameScreen.css' module='styles'>
  
</style>