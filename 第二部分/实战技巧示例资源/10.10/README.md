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

- [aMap](https://www.apicloud.com/mod_detail/51164)
	
	aMap 模块封装了高德地图的原生 SDK，集成了高德地图常用基本接口；手机版原生地图，不同于 js 地图，相对于js地图而言，本模块封装的原生手机地图更加流畅迅速、动画效果更加逼真。使用此模块可轻松把高德地图集成到自己的app内，实现高德地图常用的定位、关键字搜索、周边搜索、自定义标注及气泡、查公交路线等各种功能；另外本模块已支持高德地图离线版本。 若某些带UI的接口不能满足开发设计需求，开发者（借助于原生开发者）可在本模块基础上修改少量原生代码，随心所欲的自定义高德地图所具有的原生功能，简单、轻松、快捷、高效、迅速集成高德地图，将自己的 app 和高德地图实现无缝链接。