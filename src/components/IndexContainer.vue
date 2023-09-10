<script setup lang="ts">
import RunningCard from '@/components/RunningCard.vue'
import SecondHeaders from "@/components/SecondHeaders.vue";
import ScrollContainer from '@/components/RgbInput.vue'
const SecondHeadersTexts = reactive<Array<String>>(['材料', '配方', '来源'])
const activeTab = ref('side-tab1');
const ToggleContainer =ref<Boolean>(true)



const arrive = function (tb) {
  console.log(tb)
}



</script>

<template>
  <div class="index-container">
    <template v-if="ToggleContainer" >
      <div >
        <SecondHeaders></SecondHeaders>
        <div class="header-container">
          <span class="header-item" v-for="(item,index) in SecondHeadersTexts" :key="index">{{item}}</span>
        </div>
        <div style="background: plum;height: 100%;display: flex">
          <div class="tab-labels">
            <div class="tab-label" :class="{ 'active': activeTab === 'side-tab1' }" @click="activeTab = 'side-tab1'">配方管理界面</div>
            <div class="tab-label" :class="{ 'active': activeTab === 'side-tab2' }" @click="activeTab = 'side-tab2'">配方研发界面</div>
          </div>
          <div class="tab-content" style="height: 80vh" >
            <div v-show="activeTab === 'side-tab1'" class="tab-pane">
              <div class="tab-item" style="height:47.5%;background: blueviolet" >
                <div class="content-block" >金纳米棒</div>
                <div class="content-block" style="background: white">
                  <ScrollContainer
                      @arrive="arrive"
                      :height="'200px'"
                      :scrollColor="'#B7E7EF'"
                      :slot-color="'#B7E7EF'"
                  >
                    <ul v-for="item in 17" :key="item">
                      <li >{{ item }} 信息列表</li>
                    </ul>
                  </ScrollContainer>
                </div>
                <div class="content-block">Content 1c</div>
              </div>
              <div style="height: 5%;width: 100%;background: white" ></div>
              <div class="tab-item" style="height: 23.75%;border-bottom: blueviolet solid 1px">
                <div class="content-block">Content 2a</div>
                <div class="content-block-slider">
                  <ScrollContainer
                      @arrive="arrive"
                      :height="'100%'"
                      :scrollColor="'#B7E7EF'"
                      :slot-color="'#B7E7EF'"
                  >
                    <ul v-for="item in 17" :key="item">
                      <li >{{ item }} 信息列表</li>
                    </ul>
                  </ScrollContainer>
                </div>
                <div class="content-block">Content 2c</div>
              </div>
              <div class="tab-item" style="height: 23.75%">
                <div class="content-block">Content 3a</div>
                <div class="content-block-slider" >
                  <ScrollContainer
                      @arrive="arrive"
                      :height="'70 %'"
                      :scrollColor="'#B7E7EF'"
                      :slot-color="'#B7E7EF'"
                  >
                    <ul v-for="item in 17" :key="item">
                      <li >{{ item }} 信息列表</li>
                    </ul>
                  </ScrollContainer>
                </div>
                <div class="content-block">Content 3c</div>
              </div>
            </div>
            <div v-show="activeTab === 'side-tab2'" class="tab-pane">
              <div class="tab-item" style="height:47.5%;background: blueviolet" >
                <div class="content-block" >金纳米棒</div>
                <div class="content-block" style="background: white">
                  <ScrollContainer
                      @arrive="arrive"
                      :height="'200px'"
                      :scrollColor="'#B7E7EF'"
                      :slot-color="'#B7E7EF'"
                  >
                    <ul v-for="item in 17" :key="item">
                      <li >{{ item }} 信息列表</li>
                    </ul>
                  </ScrollContainer>
                </div>
                <div class="content-block">Content 1c</div>
              </div>
              <div style="height: 5%;width: 100%;background: white" ></div>
              <div class="tab-item" style="height: 47.5%">
                <div class="content-block" style="width: 50%; height: calc(100% - 60px); background: yellow; margin: 30px;">
                  123
                </div>
                <div class="content-block" style="width: 50%; height: calc(100% - 60px); background: yellow; margin: 30px;">
                  <button @click="ToggleContainer = !ToggleContainer">运行</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <RunningCard v-else></RunningCard>

  </div>

</template>

<style scoped lang="sass"  src="@/styles/IndexContainer.sass">


</style>
