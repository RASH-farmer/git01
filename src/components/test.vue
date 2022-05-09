 
 <template>
  <div id="app">
    <div style="width: 400px">
      <div class="title">
        <h5>{{ title }}</h5>
        <button @click="isShow = !isShow">
          <!-- {{msg}} -->
          {{ isShow ? "展开" : "收起" }}
        </button>
      </div>
      <div class="container" v-show="!isShow">
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </div>
  </div>
</template>
 <style>
.title {
  display: flex;
  width: 400px;
  height: 30px;
  border: 1px solid #000;
  box-sizing: border-box;
  align-items: center;
}

.title h5 {
  width: 80%;
}

button {
  width: 20%;
  height: 100%;
  border: none;
}

.container {
  width: 400px;
  border: 1px solid #000;
  line-height: 1;
  box-sizing: border-box;
}
</style>

<script>
export default {
  props: ["title"],
  data() {
    return {
      msg: "展开",
      isShow: true,
    };
  },
  methods: {
    fn: function () {
      if (isShow) {
        this.msg = "展开";
        this.isShow = false;
      } else {
        this.msg = "收起";
        this.isShow = true;
      }
    },
  },
};
</script>
