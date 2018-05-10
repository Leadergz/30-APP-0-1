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

- [UIChatBox](https://docs.apicloud.com/Client-API/UI-Layout/UIChatBox)
	
	UIChatBox 模块是一个聊天输入框模块，开发者可自定义该输入框的功能。通过 open 接口可在当前 window 底部打开一个输入框，该输入框的生命属于当前 window 所有。当输入框获取焦点后，会自动弹动到软键盘之上。开发者可通过监听输入框距离底部弹动的高度，来改变聊天对话界面的高度，从而实现类似 QQ 聊天页面的功能。UIChatBox 模块是 chatBox 模块的优化版。