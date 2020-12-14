
<template>
  <div id="app">
    <!-- 按钮 -->
    <vp-button type="default">default</vp-button>
    <vp-button type="primary">primary</vp-button>
    <vp-button type="success">success</vp-button>
    <vp-button type="info">info</vp-button>
    <vp-button type="warning">warning</vp-button>
    <vp-button type="danger">danger</vp-button>
    <vp-button type="primary" round>round - primary按钮</vp-button>
    <vp-button type="primary" @click="clickHandle">click-primary按钮</vp-button>
    <vp-button type="primary" icon="iconfont icon-redupaixu"
      >icon - primary按钮</vp-button
    >
    <vp-button type="primary"
      ><span class="iconfont icon-redupaixu"></span
    ></vp-button>
    <vp-button type="primary" disabled>primary - disabled 按钮 </vp-button>
    <!-- input -->
    <vp-input
      type="text"
      placeholder="请输入信息"
      v-model="username"
      @input="inputHandle"
    />
    <vp-input type="password" v-model="password" />
    <vp-input type="text" placeholder="请输入信息" disabled />
    <vp-input type="text" placeholder="可清空信息" v-model="text" clearable />
    <vp-input
      type="textarea"
      v-model="textarea"
      @blur="blur"
      @focus="focus"
      @input="textareaInputHandle"
    />
    <vp-input @blur="blur" @focus="focus" />
    <!-- radio -->
    <vp-radio v-model="radio1" label="loll">LOL</vp-radio>
    <vp-radio v-model="radio1" label="L" disabled>L</vp-radio>
    <vp-radio v-model="radio1" label="A" @change="changeHandle">A</vp-radio>
    <vp-radio v-model="radio1" label="B" border>B</vp-radio>
    <!-- radio-group -->
    <vp-radio-group v-model="radio1">
      <vp-radio label="loll">LOL</vp-radio>
      <vp-radio label="L" disabled>L</vp-radio>
      <vp-radio label="A" @change="changeHandle">A</vp-radio>
      <vp-radio label="B" border>B</vp-radio>
    </vp-radio-group>
    <!-- switch -->
    <vp-switch v-model="switchValue" @change="changeHandle" disabled />
    <vp-switch v-model="switchValue" @change="changeHandle" />
    <!-- form -->
    <vp-form :model="form" :rules="rules" ref="form">
      <vp-form-item label="用户名：" prop="name">
        <vp-input
          placeholder="请输入用户名"
          v-model="form.name"
          @input="inputFormHandle"
        ></vp-input>
      </vp-form-item>
      <vp-form-item label="爱好：" prop="hobby">
        <vp-input v-model="form.hobby"></vp-input>
      </vp-form-item>
      <vp-form-item label="性别：">
        <vp-switch v-model="form.sex"></vp-switch>
      </vp-form-item>
      <vp-form-item>
        <vp-checkbox-group v-model="form.checkboxGroup">
          <vp-checkbox label="LOL"></vp-checkbox>
          <vp-checkbox label="使命召唤"></vp-checkbox>
        </vp-checkbox-group>
      </vp-form-item>
      <vp-form-item>
        <vp-button @submit="submitForm">提交</vp-button>
      </vp-form-item>
    </vp-form>
    <!-- container -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
      <vp-footer>Footer</vp-footer>
    </vp-container>
    <br />
    <!-- container - 1 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-container>
          <vp-main>Main</vp-main>
          <vp-footer>Footer</vp-footer>
        </vp-container>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 2 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 3 -->
    <vp-container>
      <vp-aside>Aside</vp-aside>
      <vp-container>
        <vp-header>Header</vp-header>
        <vp-main>Main</vp-main>
        <vp-footer>Footer</vp-footer>
      </vp-container>
    </vp-container>
    <!-- checkbox - group -->
    <vp-checkbox-group v-model="checkboxGroup">
      <vp-checkbox label="LOL"></vp-checkbox>
      <vp-checkbox label="使命召唤"></vp-checkbox>
    </vp-checkbox-group>
    <!-- checkbox -->
    <vp-checkbox v-model="checkbox" disabled>lol</vp-checkbox>
    <div id="loading"></div>
    <div class="test">
      testMessage
      <div class="tt"></div>
    </div>
    <!-- image -->
    <vp-image :src="img"></vp-image>
    <vp-image>
      <template v-slot:error>
        <div>error</div>
      </template>
    </vp-image>
    <div class="img-list">
      <vp-image v-for="img in imgList" :key="img.id" :src="img.src"></vp-image>
    </div>
    <div class="img">
      <div class="img-list1">
        <vp-image
          v-for="img in imgList1"
          :key="img.id"
          :src="img.src"
          width="500px"
          height="400px"
          lazy
          :fit="img.fit"
        ></vp-image>
      </div>
    </div>
    <div class="img-list2">
      <vp-image
        v-for="img in imgList"
        :key="img.id"
        :src="img.src"
        :previewSrc="img.src"
      ></vp-image>
    </div>
    <!-- message -->
    <vp-button @click="messageHandle">info message</vp-button>
    <vp-button @click="messageSuccessHandle">success message</vp-button>
    <vp-button @click="messageWarnHandle">warn message</vp-button>
    <vp-button @click="messageErrorHandle">error message</vp-button>
    <!-- menu -->
    <vp-menu>
      <vp-menu-item
        ><span class="iconfont icon-success"></span>我是item - 1</vp-menu-item
      >
      <vp-submenu>
        <template v-slot:title> 我是title - 2———— </template>
        <vp-menu-item>我是item 2-1</vp-menu-item>
        <vp-menu-item>我是item 2-2</vp-menu-item>
        <vp-menu-item>我是item 2-3</vp-menu-item>
        <vp-submenu>
          <template v-slot:title> 我是title-2-4</template>
          <vp-menu-item>我是item 2-4-1</vp-menu-item>
          <vp-menu-item>我是item 2-4-2</vp-menu-item>
          <vp-menu-item>我是item 2-4-3</vp-menu-item>
          <vp-submenu>
            <template v-slot:title> 我是title 2-5 </template>
            <vp-menu-item>我是item 2-5-1</vp-menu-item>
            <vp-menu-item>我是item 2-5-2</vp-menu-item>
            <vp-menu-item>我是item 2-5-3</vp-menu-item>
          </vp-submenu>
        </vp-submenu>
      </vp-submenu>
      <vp-menu-item>我是item - 6</vp-menu-item>
      <vp-submenu>
        <template v-slot:title> 我是title - 2———— </template>
        <vp-menu-item>我是item 2-1</vp-menu-item>
        <vp-menu-item>我是item 2-2</vp-menu-item>
        <vp-menu-item>我是item 2-3</vp-menu-item>
        <vp-submenu>
          <template v-slot:title> 我是title-2-4</template>
          <vp-menu-item>我是item 2-4-1</vp-menu-item>
          <vp-menu-item>我是item 2-4-2</vp-menu-item>
          <vp-menu-item>我是item 2-4-3</vp-menu-item>
          <vp-submenu>
            <template v-slot:title> 我是title 2-5 </template>
            <vp-menu-item>我是item 2-5-1</vp-menu-item>
            <vp-menu-item>我是item 2-5-2</vp-menu-item>
            <vp-menu-item>我是item 2-5-3</vp-menu-item>
          </vp-submenu>
        </vp-submenu>
      </vp-submenu>
    </vp-menu>
    <!-- menu  vertical -->
    <vp-menu mode="vertical" @select="selectedHandle" 
      background-color="#00f" 
      text-color="#0f0"
      >
      <vp-menu-item index="1">我是item - 1</vp-menu-item>
      <vp-submenu index="2">
        <template v-slot:title> 我是title - 2———— </template>
        <vp-menu-item index="2-1">我是item 2-1</vp-menu-item>
        <vp-menu-item index="2-2">我是item 2-2</vp-menu-item>
        <vp-menu-item index="2-3">我是item 2-3</vp-menu-item>
        <vp-submenu index="2-4">
          <template v-slot:title> 我是title-2-4</template>
          <vp-menu-item index="2-4-1">我是item 2-4-1</vp-menu-item>
          <vp-menu-item index="2-4-2">我是item 2-4-2</vp-menu-item>
          <vp-menu-item index="2-4-3">我是item 2-4-3</vp-menu-item>
          <vp-submenu index="2-5">
            <template v-slot:title> 我是title 2-5 </template>
            <vp-menu-item index="2-5-1">我是item 2-5-1</vp-menu-item>
            <vp-menu-item index="2-5-2">我是item 2-5-2</vp-menu-item>
            <vp-menu-item index="2-5-3">我是item 2-5-3</vp-menu-item>
          </vp-submenu>
        </vp-submenu>
      </vp-submenu>
      <vp-menu-item index="3">我是item - 3</vp-menu-item>
      <vp-menu-item index="4">我是item - 4</vp-menu-item>
      <vp-menu-item index="5">我是item - 5</vp-menu-item>
    </vp-menu>
    <!-- ul -> li -->
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import VpAside from "./components/vp-aside.vue";
import VpRadioGroup from "./components/vp-radio-group.vue";
import VpRadio from "./components/vp-radio.vue";
import VpSwitch from "./components/vp-switch.vue";

export default {
  name: "App",
  data() {
    return {
      username: "小卡车",
      password: "",
      text: "",
      textarea: "",
      radio1: "loll",
      switchValue: false,
      form: {
        name: "",
        hobby: "",
        sex: false,
        checkboxGroup: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["input", "blur"],
          },
        ],
        hobby: [
          { required: true, message: "请输入爱好", trigger: ["input", "blur"] },
        ],
      },
      checkboxGroup: ["LOL", "使命召唤"],
      checkbox: false,
      img:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imgList: [
        {
          id: 1,
          src:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        },
        {
          id: 2,
          src:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
        {
          id: 3,
          src:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        },
      ],
      imgList1: [
        {
          id: 4,
          src:
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          fit: "fill",
        },
        {
          id: 5,
          src:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          fit: "contain",
        },
        {
          id: 6,
          src:
            "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          fit: "cover",
        },
      ],
    };
  },
  components: {
    /*     VpRadioGroup,
    VpSwitch,
    VpAside,
    VpRadio, */
    /*     vpButton,
    vpInput,
    vpRadio */
  },
  mounted() {
    let loadObj = this.$loading({
      // ele: document.getElementsByClassName("test")[0],
      color: "#00a8ff",
      iconfont: "icon-redupaixu",
      // backgroundColor: "#e67e22"
    });
    setTimeout(() => {
      loadObj.close();
    }, 1000);
  },
  methods: {
    inputHandle(e) {
      console.log(e);
    },
    clickHandle(e) {
      console.log(e);
    },
    focus(e) {
      console.log(e);
    },
    blur(e) {
      console.log(e);
    },
    changeHandle(e) {
      console.log(e);
    },
    textareaInputHandle(value) {
      console.log(value);
    },
    submitForm(value, e) {
      let form = this.$refs.form;
      form.validate((valid) => {
        if (valid) {
          console.log("校验成功！");
          console.log(value);
        } else {
          console.log("校验失败！");
        }
      });
    },
    inputFormHandle(value, event) {
      // console.log(value);
    },
    // message
    messageHandle() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<span style="color: green">I am Green</span>',
      });
    },
    messageSuccessHandle() {
      this.$message({
        type: "success",
        message: "小卡车加油！",
      });
    },
    messageWarnHandle() {
      this.$message({
        type: "warn",
      });
    },
    messageErrorHandle() {
      this.$message({
        type: "error",
      });
    },
    selectedHandle(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<style scoped>
/* .vp-input {
  width: 200px !important;
} */
.vp-header {
  background-color: aqua;
  text-align: center;
  line-height: 60px;
}
.vp-main {
  background-color: aquamarine;
  text-align: center;
}
.vp-aside {
  background-color: cornflowerblue;
  text-align: center;
}
.vp-footer {
  background-color: cadetblue;
  text-align: center;
  line-height: 60px;
}
.test {
  background-color: royalblue;
  width: 200px;
  height: 200px;
}
</style>
