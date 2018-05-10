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

- [aMap](https://docs.apicloud.com/Client-API/Open-SDK/aMap)
	
	aMap 模块封装了高德地图的原生 SDK，集成了高德地图常用基本接口。

- [UIButton](https://docs.apicloud.com/Client-API/UI-Layout/UIButton)
	
	UIButton 是 button 模块的优化升级版，用原生代码实现了一个可自定义的按钮，开发者使用此模块可以实现在一个模块视图上添加自定义按钮的功能，本模块支持手指拖动改变按钮位置功能。
## aMap模块使用注意事项

使用此模块之前必须先配置 config 文件，配置方法如下：
* 名称：aMap
* 参数：android_api_key、ios_api_key
* 备注：同一个 App 需要同时支持 iOS 和 Android 平台，必须单独申请各自的 apiKey，并同时配置在 config 文件中
* 配置示例：

```html
<feature name="aMap">
    <param name="android_api_key" value="f7Is0dWLom2q6rV3ZfFPZ1aa" />
    <param name="ios_api_key" value="81qz3dBYB5q2nGji4IYrawr1" />
</feature>
```
* 字段描述：

	- android_api_key：在高德地图开放平台申请的 Android 端 AK
	- ios_api_key：在高德地图开放平台申请的 iOS 端 AK
	
用户在使用本模块之前需要获取高德地图API Key，Key 申请的具体流程请参照 - [申请Key](http://lbs.amap.com/api/ios-location-sdk/summary/#getkey)。