<template>
  <div class="a-container">
    <div class="aa">
      <div class="a-span1">
        <span class="a-text1">
          <span class="a-text2">Dgaf App</span>
          <span class="a-text3">
            is now
            <span v-html="rawbrxs"></span>
          </span>
          <span>Live!</span>
        </span>
      </div>
      <div class="a-span2"><span class="a-text5">Download</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'A',
  data() {
    return {
      rawbrxs: ' ',
    }
  },
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.a-container {
  width: 100%;
  height: 42px;
  display: flex;
  overflow: auto;
  align-items: center;
  flex-direction: column;
}
 
.aa {
  height: 40px;
  display: flex;
  width: 100%;
  background: linear-gradient(to right top, #EB5D47 0%, #A933B2 50%, #A4F9FF 100%);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.6000000238418579) ;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.a-span1 {
  top: 8px;
  left: 583.421875px;
  width: 168px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
 
.a-text1 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  font-stretch: normal;
  text-decoration: none;
}
 
.a-text2 {
  font-weight: 700;
}
 
.a-text3 {
  font-weight: 300;
}
 
.a-span2 {
  top: 7px;
  left: 792.1875px;
  width: 74px;
  display: flex;
  padding: 4px 8.390625px 4px 7px;
  position: absolute;
  align-items: flex-start;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
}
 
.a-text5 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 12px;
  font-style: Bold;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 18px;
  font-stretch: normal;
  text-decoration: none;
}
</style>
