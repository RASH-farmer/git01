<template>
  <div id="box">
    <h3>品牌管理</h3>
    <table class="table table-bordered">
      <tbody>
        <tr class="info">
          <th><input type="checkbox" v-model="allCheck" />全选</th>
          <th>编号</th>
          <th>资产名称</th>
          <th>价格</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list">
          <td><input type="checkbox" v-model="item.isCheck" /></td>
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
          <td>{{ item.time }}</td>
          <td><a href=" javascript:" @click="del(index)">删除</a></td>
        </tr>
        <tr v-if="list.length === 0">
          <td colspan="5" style="text-align: center">没有数据了</td>
        </tr>
      </tbody>
    </table>
    <form class="form-inline" v-on:submit.prevent>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="inp1"
          placeholder="资产名称"
          v-model="Assets"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="inp2"
          placeholder="价格"
          v-model="price"
        />
      </div>
      <button class="btn btn-primary" @click="add">添加资产</button>
    </form>
    <p>总价: {{ addPrice }}</p>
    <p>均价:{{ avgPrice }}</p>
  </div>
</template>
<style scoped>
form {
  display: flex;
}
</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 100,
          type: "外套",
          price: 199,
          time: new Date("2012,10,W6 12:00:00"),
          isCheck: false,
        },
        {
          id: 101,
          type: "裤子",
          price: 34,
          time: new Date("1998-1-2 15:00:00"),
          isCheck: false,
        },
        {
          id: 102,
          type: "鞋",
          price: 25.4,
          time: new Date("2014-6-1 17:00:00"),
          isCheck: false,
        },
        {
          id: 103,
          type: "头发",
          price: 19900,
          time: new Date("2022-4-1 01:00:00"),
          isCheck: false,
        },
      ],
      Assets: "",
      price: "",
      // list: JSON.parse(localStorage.getItem("list") || "[]"),
    };
  },
  methods: {
    del(i) {
      if (confirm("确定？")) {
        this.list.splice(i, 1);
      }
    },

    add() {
      if (this.Assets == "" || this.price == "") {
        alert("请输入正确的数据");
        return false;
      }
      const list = this.list;
      const Assets = this.Assets;
      const price = this.price;
      // 方法一
      if (list.length > 0) {
        list.push({
          id: list[list.length - 1].id + 1,
          type: Assets,
          price: price,
          time: new Date(),
        });
      } else {
        list.push({
          id: 1,
          type: Assets,
          price: price,
          time: new Date(),
        });
      }
      this.Assets = "";
      this.price = "";
    },
  },
  computed: {
    allCheck: {
      set(val) {
        console.log("set");
        this.list.forEach((item) => {
          item.isCheck = val;
        });
      },
      get() {
        console.log("get");
        return this.list.every((item) => {
          return item.isCheck == true;
        });
      },
    },
    addPrice() {
      let sum = 0;
      this.list.forEach((item) => {
        sum += item.price;
      });
      return sum;
    },
    avgPrice() {
      return this.addPrice / this.list.length;
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newData, oldData) {
        localStorage.setItem("list", JSON.stringify(newData));
      },
    },
  },
};
</script>