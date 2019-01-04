Page({
  data: {
    name:"我的",
    headerImg:""
  },
  onPageScroll(e) {
    
  },
  onSearchBarTap() {
    my.navigateTo({
    });
  },
  onTabBarTap(e) {
   
  },
  onLoad() {
    if(!this.data.headerImg){
      this.setData({
        headerImg:'/image/image/user.png'
      })
    }else{
      console.log("1111")
    }
    my.setNavigationBar({
      title:this.data.name
    })
  },
  goMins(){
   my.navigateTo({ url: '../../order/aboutMins/aboutMins' });
  }
});