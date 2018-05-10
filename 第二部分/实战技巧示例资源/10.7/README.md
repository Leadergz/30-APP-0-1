# README

## DEMO 运行流程说明

- 在云端 [APICloud](https://www.apicloud.com) 的控制台新创建一个Native应用
	
	![创建应用](./readmeImgs/createApp.png)

- 根据下面提供的**使用模块列表**，将对应的模块添加到应用
	
	![添加模块](./readmeImgs/addModule.png)

- 使用 [APICloud Studio2](https://www.apicloud.com/devtools) 或其他 SVN工具将新建的应用代码从云端下载到本地
	
	![从云端下载应用](./readmeImgs/downApp.png)

- 下载本 DEMO 的源代码，使用 DEMO 源码覆盖上面新建的应用代码（注意在config.xml中使用新建应用的appId）

- 将代码保存并同步到云端
	
	![同步新代码到云端](./readmeImgs/uploadApp.png)

- 在 [APICloud](https://www.apicloud.com) 控制台云编译本项目
	
	![控制台云编译](./readmeImgs/buildApp.png)
	
- 使用手机扫描二维码下载安装本项目，即可查看 DEMO 的运行效果

## 使用模块列表

- [pieChart](https://docs.apicloud.com/Client-API/UI-Layout/pieChart)
	
	pieChart是一个饼图数据展示控件，可识别手势转动该饼图，旋转动画结束返回特定位置的数据库的下标。支持开发者自定义数据块样式。
	
- [UIBarChart](https://docs.apicloud.com/Client-API/UI-Layout/UIBarChart)
	
	UIBarChart 是一个柱状图模块，可自定义 X、Y 轴样式以及柱子的个数和颜色。本模块可监听左右拖动到头的事件，可向当前数据拼接加载、刷新等操作。同一个页面可以打开多个模块实例，以模块 id 区分。
	
- [UILineChart](https://docs.apicloud.com/Client-API/UI-Layout/UILineChart)
	
	UILineChart 模块可用于生成折线图(K线图)视图，并支持多条折线。开发者可自定义 X、Y 轴样式以及折线的个数和颜色。本模块还可监听左右拖动到头的事件，可向当前数据拼接加载、刷新等操作。同一个页面可以打开多个模块实例，以模块 id 区分。

- [doubleBarChart](https://docs.apicloud.com/Client-API/UI-Layout/doubleBarChart)
	
	doubleBarChart 是一个柱状图模块，可自定义 X、Y 轴样式以及柱子的个数和颜色。本模块可监听左右拖动到头的事件，可向当前数据拼接加载、刷新等操作。同一个页面可以打开多个模块实例，以模块 id 区分。