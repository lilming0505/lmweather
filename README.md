# 项目介绍
首先这是一个基于uniapp框架开发的天气查询项目，目前呢只适配移动端，且仅在微信小程序上线
芝士二维码：
![gh_be15d61fcc12_258 (1).jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/28499732/1665149991995-6fd36cf5-1509-410c-ae0d-eb7e73acebdf.jpeg#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u04101577&margin=%5Bobject%20Object%5D&name=gh_be15d61fcc12_258%20%281%29.jpg&originHeight=258&originWidth=258&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48147&status=done&style=none&taskId=u72cdd35e-bff1-4ec3-9845-405b323ac4e&title=)
## 主要实现的功能

1. 10小时的天气预报
2. 7天内的天气预报
3. 空气指数
4. 天气指数
5. 生活指数

![cf0b89f15f0196d0737b244e52304c3.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665152213780-b80d64fc-78ae-4ec0-9162-019b012c7cef.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=516&id=u787845e2&margin=%5Bobject%20Object%5D&name=cf0b89f15f0196d0737b244e52304c3.png&originHeight=1074&originWidth=495&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76271&status=done&style=none&taskId=u74941fff-3921-42c8-b960-102fd2ad01f&title=&width=238)![fff25dd55ab1377b4f4d2ab5ecf1223.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665151919111-1d3454b3-8d10-4929-90ed-c2e9af710c09.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=512&id=u29dea63b&margin=%5Bobject%20Object%5D&name=fff25dd55ab1377b4f4d2ab5ecf1223.png&originHeight=1063&originWidth=515&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92348&status=done&style=none&taskId=u94760290-d3b4-4f16-8f85-eeeae095e87&title=&width=248)
## 城市切换
![967526cda0f31c22c6655f6f549134f.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665152046428-1bdb24b7-062d-43a5-a4bc-4359de67d9d7.png#clientId=u71dd48f8-494e-4&crop=0&crop=0.1341&crop=0.9941&crop=0.9073&from=drop&height=295&id=u5a1ac71b&margin=%5Bobject%20Object%5D&name=967526cda0f31c22c6655f6f549134f.png&originHeight=410&originWidth=338&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27824&status=done&style=none&taskId=u573e9fc3-9b13-4585-91a5-92a3b00bcf2&title=&width=243)![aff222c8825a5a4c04858e80f0d02ec.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665152032205-5f766dc5-3f0c-40c2-8ff1-e19f9f38a880.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=230&id=ua652657e&margin=%5Bobject%20Object%5D&name=aff222c8825a5a4c04858e80f0d02ec.png&originHeight=386&originWidth=395&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22195&status=done&style=none&taskId=u87a1b6fe-3c75-4e50-b380-0db886214fe&title=&width=235)
## 暗夜模式的切换
点击城市选择最右边的按钮就可以切换主题了
## ![3380940c7ccbab8b6c0cb5d6a807132.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665151994010-980a7799-bd3c-4a09-87cf-4ca94473d2c0.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=497&id=u8fb47000&margin=%5Bobject%20Object%5D&name=3380940c7ccbab8b6c0cb5d6a807132.png&originHeight=1077&originWidth=520&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75416&status=done&style=none&taskId=ufa782583-7465-4bd5-975f-90d5fc51cce&title=&width=240)
# 遇到的问题与我是如何克服的（有些没能克服555）
## 微信小程序合法域名的配置
我在这个项目中用了四个不同的天气api（因为有些api提供的数据不全或者要收费）
我在项目上线的最后阶段，发现有些天气数据获取不到了，还有阿里云数据库的城市列表和城市对应的id都获取失败了，代码肯定是没问题的，那肯定是配置哪里出问题了
解决方法：
在开发环境下，微信开发者工具默认不校验域名，但是在最后上线的时候要设置小程序的合法域名，像这样：
![abeefa9dffeb32f970f4aa77d46cc55.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665153482615-4b29047f-31bb-4eae-96ad-f85803abb614.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=274&id=u593d5ef7&margin=%5Bobject%20Object%5D&name=abeefa9dffeb32f970f4aa77d46cc55.png&originHeight=584&originWidth=945&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16076&status=done&style=none&taskId=u6cb4cc34-da10-449c-b397-6192e2ac5cc&title=&width=443)
但是，等一下，阿里云数据库的域名我从哪里拿到呢，代码里没有出现服务器域名，因为是直接在uniapp里关联了之后连接的，在阿里云控制台没找到，我在网上搜索了很久也没找到解决方法。在那天的晚上，我抓耳挠腮找不到解决方案，躺在床上准备放弃的时候，我灵光一现，把微信开发者工具的不校验合法域名去掉，不就会有报错提示“XXX”不是合法的域名了吗，那我就可以拿到服务器的域名了。现在想想其实是很好解决的，但是我当时却被卡了好久。
## 组件达不到自己想实现的效果
在我使用uniapp的自定义导航栏组件的时候，我发现这个导航栏下面总是有一条白色的实线，在白天模式下不明显，在暗夜模式下就很明显，而官方文档里也没有给出去除实线的方法。
解决方法：
修改组件的代码，打开组件的路径，打开文件，我猜这个实线的宽度为1px，查找定位到了之后，就把width改成0px就可以了
## 奇怪的下拉选择框（算是解决了）
uniapp给出了下拉选择框的组件，我需要两个下拉选择框，一个选择省份，一个选择市，但是当我点击第一个选择框时，也就是我选择了省份时，既执行了第一个组件的change事件，也执行了第二个组件的change事件，而且只在第一次点击组件时生效，之后就都正常了，这就导致我第一次选择省份时数据重新加载了一遍。
我的解决方案：
加一个bool类型的数据，初始值true，第一次点击改为false，第二组件的change事件判断一下，不是第一次点击才执行
虽然我解决了，但是这个问题的出现真的好迷
## 从数据库获取城市数据
我不但需要两级的城市列表，作为我城市选择框的数据，还需要城市对应的id来作为api的参数，我是下载了某个天气api的城市id表，做一些数据加工，由于数据太大了，不能直接放在本地里（浪费空间），更不能直接保存在页面里（内存直接炸了）
解决方法：
我用了uniCloud的阿里云数据库，直接用uniapp提供的方法，先添加数据，等数据导入了之后再去读取。
## 最后上线的效果和开发环境下的有差别（未解决）
这是上线环境：
![Screenshot_20221007_220120_com.tencent.mm.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/28499732/1665155744445-c6f74844-3c5c-4577-b9f8-be839b649dae.jpeg#clientId=u71dd48f8-494e-4&crop=0.0045&crop=0&crop=1&crop=0.3149&from=drop&height=782&id=uc33b4a19&margin=%5Bobject%20Object%5D&name=Screenshot_20221007_220120_com.tencent.mm.jpg&originHeight=2400&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=527451&status=done&style=none&taskId=ubddee897-693a-4f41-9722-ce45d6164dc&title=&width=352)
这是开发环境：
![[{0$U((HY$O58@UE]4~JNZN.png](https://cdn.nlark.com/yuque/0/2022/png/28499732/1665155850311-0737a4b2-589e-4aea-87a6-7b5ac9ff6fdb.png#clientId=u71dd48f8-494e-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=237&id=uc3b90cce&margin=%5Bobject%20Object%5D&name=%5B%7B0%24U%28%28HY%24O58%40UE%5D4~JNZN.png&originHeight=337&originWidth=501&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21530&status=done&style=none&taskId=u6477e7b9-7859-476e-82fb-6b3642ceb5b&title=&width=353)
如图，小程序上线之后图表把城市名给挡住了
修改了z-index也无济于事，看组件的代码也看不出什么端倪，完全没有头绪
## 获取定位（未解决）
uniapp官方提供了获取地址的接口和第三方的高德SDK
分别是：[https://uniapp.dcloud.net.cn/api/location/location.html](https://uniapp.dcloud.net.cn/api/location/location.html)
[https://ask.dcloud.net.cn/article/35070](https://ask.dcloud.net.cn/article/35070)
但是这两种方法都试过了，都会报错，如果不用uniapp用小程序提供的接口是可以的，因为精力有限，也就没有继续研究了
# 我的收获与成长
这次项目应该是我做过最好的一次了，我之前还完全是一个懵懵懂懂的状态，其实我连原生的开发都不熟练，就尝试做uniapp开发了，这过程十分曲折，在一路跌跌撞撞下，学会自己解决问题，学会去阅读文档，查找信息，解决bug。总之这次项目让我技术提高了不少，学到了很多东西，过了一个充实的国庆假期。最后，十分期待能和杭电助手的各位大佬们交流学习！
