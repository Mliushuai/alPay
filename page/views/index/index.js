Page({
  data: {
    value: '美食',
    name: "lili"
  },
   handleInput(value) {
     console.log(value)
    this.setData({
      value,
    });
  },
  handleClear(value) {
    this.setData({
      value: '',
    });
  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
  onPageScroll(e) {

  },
  onSearchBarTap() {
    my.navigateTo({
    });
  },
  onTabBarTap(e) {

  },
  tapname() {
   
  },
  onLoad() {
    my.getSystemInfo({

    });
  },
});