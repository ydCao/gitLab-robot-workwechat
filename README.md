# gitLab-robort-workwechat
通过云函数创建一个企业微信机器人
1. `git clone https://github.com/ydCao/gitLab-robot-workwechat.git`

2. 企业微信拉个群，添加一个机器人，你会得到一些机器人的信息。见图，保留这个key！
![](https://tuchuang-1251767583.cos.ap-guangzhou.myqcloud.com/wework-demo.jpg)

3. 注册并登陆腾讯云管理后台，新建一个云函数，可以先选个Node的Helloworld模板

4. 将代码中的`cloudGitLab`目录上传，如图
![](https://tuchuang-1251767583.cos.ap-guangzhou.myqcloud.com/git-robot/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202020-01-16%20%E4%B8%8A%E5%8D%8811.03.40.png)

5. 点击保存（保存后测试一下）
![](https://tuchuang-1251767583.cos.ap-guangzhou.myqcloud.com/git-robot/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_0dc98a64-9a31-4bcb-bf67-dbba9ed2327f.png)

6. 选择触发方式，添加新的触发方式，类型选择API网关，保存后得到url
![](https://tuchuang-1251767583.cos.ap-guangzhou.myqcloud.com/git-robot/add_new.png)

![](https://tuchuang-1251767583.cos.ap-guangzhou.myqcloud.com/git-robot/save_new.png)

7. ok!可以填到GitLab的webhook里了，类型选择`Send me everything`，也可以自定义，url填上上面的url，**别忘了要在后面加上`?id={你创建的微信机器人id}`作为参数**。

9. github和gitlab实现方式有些区别。[请点击这里](https://github.com/LeoEatle/git-webhook-wework-robot)本项目在此基础上实现，再次表示感谢。
