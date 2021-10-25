
<template>
  <div id="app">
    <!-- date-picker 日期选择器 -->
    <h1>datePicker</h1>
    <vp-date-picker v-model="datePicker" placeholder="请选择日期" />

    <!-- tab -->
    <h1>tabs</h1>
    <vp-tabs v-model="tabsActiveName" @tab-click="handleTabClick">
      <vp-tab-pane label="小卡车" name="n1">小卡车</vp-tab-pane>
      <vp-tab-pane label="蜘蛛侠" name="n2">蜘蛛侠</vp-tab-pane>
      <vp-tab-pane label="猪猪侠" name="n3">猪猪侠</vp-tab-pane>
    </vp-tabs>

    <!-- timeline -->
    <h1>timeline</h1>
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        :color="time.color"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>

    <!-- pagination -->
    <br />
    <h1>pagination</h1>
    <vp-pagination
      :total="100"
      :current-page.sync="currentPage1"
      @pre-click="handlePreClick"
      @next-click="handleNextClick"
      @current-change="handleCurrentChange"
      :layout="'jumper'"
    />
    <vp-switch v-model="switchValue" @change="changeHandle" />
    <vp-pagination
      :total="6"
      :current-page.sync="currentPage1"
      :hide-on-single-page="switchValue"
      :prev-text="'前一页'"
      :next-text="'后一页'"
    />

    <!-- select -->
    <br />
    <h1>select</h1>
    <div style="height: 300px">
      <vp-select v-model="selectValue">
        <vp-option
          v-for="option in selectOption"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        ></vp-option>
      </vp-select>

      <vp-select v-model="selectValue" disabled>
        <vp-option
          v-for="option in selectOption"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        ></vp-option>
      </vp-select>

      <vp-select v-model="selectValue" clearable>
        <vp-option
          v-for="option in selectOption"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        ></vp-option>
      </vp-select>

      <vp-select v-model="selectValue" filterable>
        <vp-option
          v-for="option in selectOption"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        ></vp-option>
      </vp-select>
    </div>

    <!-- button -->
    <br />
    <h1>button</h1>
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
    <br />
    <h1>input</h1>
    <!-- <vp-input
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
    <vp-input @blur="blur" @focus="focus" /> -->
    <vp-input
      type="text"
      placeholder="请输入信息"
      v-model="username"
      @input="inputHandle"
    >
      <template v-slot:prefix>
        <span class="iconfont icon-rili"></span>
      </template>
    </vp-input>

    <vp-input
      type="text"
      placeholder="请输入信息"
      v-model="username"
      @input="inputHandle"
      clearable
    >
      <template v-slot:suffix>
        <span class="iconfont icon-rili"></span>
      </template>
    </vp-input>

    <!-- radio -->
    <br />
    <h1>radio</h1>
    <vp-radio v-model="radio1" label="loll">LOL</vp-radio>
    <vp-radio v-model="radio1" label="L" disabled>L</vp-radio>
    <vp-radio v-model="radio1" label="A" @change="changeHandle">A</vp-radio>
    <vp-radio v-model="radio1" label="B" border>B</vp-radio>

    <!-- radio-group -->
    <h1>radio group</h1>
    <vp-radio-group v-model="radio1">
      <vp-radio label="loll">LOL</vp-radio>
      <vp-radio label="L" disabled>L</vp-radio>
      <vp-radio label="A" @change="changeHandle">A</vp-radio>
      <vp-radio label="B" border>B</vp-radio>
    </vp-radio-group>

    <!-- switch -->
    <br />
    <h1>switch</h1>
    <vp-switch v-model="switchValue" @change="changeHandle" disabled />
    <vp-switch v-model="switchValue" @change="changeHandle" />

    <!-- form -->
    <!-- form -->
    <br />
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
    <br />
    <h1>container</h1>
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
    <br />
    <h1>checkbox</h1>
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
    <br />
    <h1>image</h1>
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
    <br />
    <h1>message</h1>
    <vp-button @click="messageHandle">info message</vp-button>
    <vp-button @click="messageSuccessHandle">success message</vp-button>
    <vp-button @click="messageWarnHandle">warn message</vp-button>
    <vp-button @click="messageErrorHandle">error message</vp-button>

    <!-- menu -->
    <br />
    <h1>menu</h1>
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
    <vp-menu
      mode="vertical"
      @select="selectedHandle"
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
      <vp-menu-item index="5" disabled>我是item - 5</vp-menu-item>
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

    <!-- VpTooltip -->
    <br />
    <h1>tooltip</h1>
    <div class="tooltip">
      <vp-tooltip content="小卡车加油！！！">
        <vp-button>VpTooltip-default</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="bottom" content="小卡车加油！！！">
        <vp-button>VpTooltip-bottom</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="left" content="小卡车加油！！！————">
        <vp-button>VpTooltip-left-------</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="right" content="小卡车加油！！！————">
        <vp-button>VpTooltip-right-------</vp-button>
      </vp-tooltip>
    </div>

    <!-- divider -->
    <br />
    <h1>divider</h1>
    <vp-divider>小卡车加油</vp-divider>
    <vp-divider content-position="left">小卡车加油</vp-divider>
    <vp-divider content-position="right">小卡车加油</vp-divider>
    <vp-divider direction="vertical"></vp-divider>
    小卡车加油

    <!-- backtop -->
    <br />
    <h1>backtop</h1>
    <div class="backtop-div">
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
    <vp-backtop @backtop="backtopHandle"></vp-backtop>
    <vp-backtop
      target=".backtop-div"
      :right="backtopRight"
      :bottom="backtopBottom"
    >
      Top
    </vp-backtop>

    <!-- progress -->
    <br />
    <h1>progress</h1>
    <vp-progress
      :color="[
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ]"
      :percentage="percentage"
    ></vp-progress>
    <vp-progress
      color="#f56c6c"
      :percentage="percentage"
      text-inside
    ></vp-progress>
    <vp-progress :percentage="per" status="success"></vp-progress>
    <vp-progress :percentage="per" color="#e6a23c"></vp-progress>
    <vp-progress :percentage="per"></vp-progress>

    <!-- table -->
    <br />
    <h1>table</h1>
    <vp-table :data="tableData">
      <vp-table-column prop="name" label="名称"></vp-table-column>
      <vp-table-column prop="age" label="年龄"></vp-table-column>
      <vp-table-column label="爱好">
        <!-- <template v-slot:default="slotsProps"> -->
        <template v-slot:data="slotsProps">
          <div>
            <vp-button @click="tableBtnHandle(slotsProps)"
              >小卡车加油！！！</vp-button
            >
            <!-- <p>name: {{ slotsProps.data.name }}</p> -->
            <!-- <p>age: {{ slotsProps.data.age }}</p> -->
          </div>
        </template>
        <!-- </template> -->
        <!-- <div>哈哈哈</div> -->
      </vp-table-column>
    </vp-table>

    <!-- tag -->
    <br />
    <h1>tag</h1>
    <vp-tag>小卡车加油！！！</vp-tag>
    <vp-tag type="success">小卡车加油！！！</vp-tag>
    <vp-tag type="info">小卡车加油！！！</vp-tag>
    <vp-tag type="warning">小卡车加油！！！</vp-tag>
    <vp-tag type="danger">小卡车加油！！！</vp-tag>
    <vp-tag closable>小卡车加油！！！</vp-tag>
    <vp-tag type="success" closable>小卡车加油！！！</vp-tag>
    <vp-tag type="info" closable>小卡车加油！！！</vp-tag>
    <vp-tag type="warning" closable>小卡车加油！！！</vp-tag>
    <vp-tag type="danger" closable @close="closeTagHandle"
      >小卡车加油！！！</vp-tag
    >
    <vp-tag effect="dark">小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="success">小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="info">小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="warning">小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="danger">小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" closable>小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="success" closable>小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="info" closable>小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="warning" closable>小卡车加油！！！</vp-tag>
    <vp-tag effect="dark" type="danger" closable>小卡车加油！！！</vp-tag>

    <!-- carousel -->
    <br />
    <h1>carousel</h1>
    <div class="carousel">
      <vp-carousel :height="carouselHeight">
        <vp-carousel-item v-for="img in imgList" :key="img.id">
          <vp-image :src="img.src" width="600px" height="500px"></vp-image>
        </vp-carousel-item>
      </vp-carousel>
    </div>
  </div>
</template>

<script>
import VpTimelineItem from "./components/timeline/vp-timeline-item.vue";
import VpAside from "./components/vp-aside.vue";
import VpPagination from "./components/vp-pagination.vue";
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
      img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imgList: [
        {
          id: 1,
          src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        },
        {
          id: 2,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
        {
          id: 3,
          src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        },
      ],
      imgList1: [
        {
          id: 4,
          src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          fit: "fill",
        },
        {
          id: 5,
          src: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          fit: "contain",
        },
        {
          id: 6,
          src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          fit: "cover",
        },
      ],
      backtopRight: 200,
      backtopBottom: 200,
      percent: 0,
      timer: null,
      per: 80,
      tableData: [
        {
          id: 1,
          name: "小卡车",
          age: 20,
        },
        {
          id: 2,
          name: "蜘蛛侠",
          age: 18,
        },
        {
          id: 3,
          name: "钢铁侠",
          age: 30,
        },
      ],
      carouselHeight: "500",

      // 选择器
      selectOption: [
        {
          value: "1",
          label: "小卡车1",
        },
        {
          value: "2",
          label: "小卡车2",
        },
        {
          value: "3",
          label: "小卡车3",
        },
        {
          value: "4",
          label: "小卡车4",
          disabled: true,
        },
        {
          value: "5",
          label: "小卡车5",
        },
        {
          value: "6",
          label: "小卡车6",
        },
        {
          value: "7",
          label: "小卡车7",
        },
        {
          value: "8",
          label: "小卡车8",
        },
      ],
      selectValue: "6",
      // 分页
      currentPage1: 1,

      // 时间线
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
          color: "#3B86E8",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],

      // tabs 标签页
      tabsActiveName: "n2",

      // 日历
      datePicker: "",
    };
  },
  watch: {
    selectValue: {
      handler(val) {
        console.log("app.vue", val);
      },
      immediate: true,
    },
  },
  components: {
    VpPagination,
    VpTimelineItem,
    /*     VpRadioGroup,
    VpSwitch,
    VpAside,
    VpRadio, */
    /*     vpButton,
    vpInput,
    vpRadio */
  },
  computed: {
    percentage() {
      clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        this.percent += 1;
        if (this.percent >= 100) {
          clearTimeout(this.timer);
          this.percent = 100;
        } else {
          this.percent += 1;
        }
      }, 50);
      return this.percent;
    },
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
    },
    backtopHandle(e) {
      console.log(e);
    },
    tableBtnHandle(slotsPropsData, e) {
      console.log(slotsPropsData);
    },
    closeTagHandle() {
      console.log("closeTag");
    },
    // 分页
    handlePreClick(currentPage) {
      console.log(currentPage);
    },
    handleNextClick(currentPage) {
      console.log(currentPage);
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage);
    },

    // 标签页
    handleTabClick(vm, e) {
      console.log(vm, e);
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
.tooltip {
  display: flex;
  justify-content: space-around;
  margin: 100px;
}
.backtop-div {
  /*   width: 200px;
  height: 300px; */
  background-color: aquamarine;
}

/* .vp-carousel-item {
  background-color: lightblue;
} */
.carousel {
  width: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
