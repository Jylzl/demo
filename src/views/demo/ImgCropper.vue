<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 15:42:33
 -->
<template>
	<div>
		<meta name="referrer" content="no-referrer" />
		<div>
			<img
				src="http://img01.store.sogou.com/net/a/04/link?appid=100520029&url=http://mmbiz.qpic.cn/mmbiz_png/qZLqymwTlXVXYZagTD1zWZwibd0a8AUianp6RribzY8icViaebU8UIzYiaJQ7IsCQXkZ5BB8CrV7IACgwJ7XiaF5vDxdw/0"
				alt
			/>
		</div>
		<div class="cropper-content">
			<div class="cropper">
				<vueCropper
					ref="cropper"
					:img="option.img"
					:outputSize="option.size"
					:outputType="option.outputType"
					:info="true"
					:full="option.full"
					:canMove="option.canMove"
					:canMoveBox="option.canMoveBox"
					:original="option.original"
					:autoCrop="option.autoCrop"
					:autoCropWidth="option.autoCropWidth"
					:autoCropHeight="option.autoCropHeight"
					:fixedBox="option.fixedBox"
					@realTime="realTime"
					@imgLoad="imgLoad"
				></vueCropper>
			</div>
			<div
				class="show-preview"
				:style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}"
			>
				<div :style="previews.div" class="preview">
					<img :src="previews.url" :style="previews.img" />
				</div>
			</div>
		</div>

		<div class="footer-btn">
			<div class="scope-btn">
				<label class="btn" for="uploads">更换图片</label>
				<input
					type="file"
					id="uploads"
					style="position:absolute; clip:rect(0 0 0 0);"
					accept="image/png, image/jpeg, image/gif, image/jpg"
					@change="uploadImg($event, 1)"
				/>

				<button @click="changeScale(1)">+</button>
				<button @click="changeScale(-1)">-</button>
				<button @click="rotateLeft">↺</button>
				<button @click="rotateRight">↻</button>
			</div>
			<div class="upload-btn">
				<button @click="down('blob')">下载</button>
			</div>
			<div>
				<button
					@click="showImg('http://mmbiz.qpic.cn/mmbiz_png/qZLqymwTlXVXYZagTD1zWZwibd0a8AUianp6RribzY8icViaebU8UIzYiaJQ7IsCQXkZ5BB8CrV7IACgwJ7XiaF5vDxdw/0')"
				>weixin</button>
			</div>
		</div>
	</div>
</template>


<script>
import { VueCropper } from "vue-cropper";
export default {
	components: {
		VueCropper
	},

	data() {
		return {
			crap: false,
			previews: {},
			option: {
				img: "",
				info: true, // 裁剪框的大小信息
				outputSize: 0.8, // 裁剪生成图片的质量
				outputType: "jpeg", // 裁剪生成图片的格式
				canScale: false, // 图片是否允许滚轮缩放
				autoCrop: true, // 是否默认生成截图框
				// autoCropWidth: 300, // 默认生成截图框宽度
				// autoCropHeight: 200, // 默认生成截图框高度
				fixedBox: false, // 固定截图框大小 不允许改变
				fixed: true, // 是否开启截图框宽高固定比例
				fixedNumber: [7, 5], // 截图框的宽高比例
				full: true, // 是否输出原图比例的截图
				canMoveBox: true, // 截图框能否拖动
				original: false, // 上传图片按照原始比例渲染
				centerBox: false, // 截图框是否被限制在图片里面
				infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
			},
			downImg: "#"
		};
	},
	methods: {
		showImg(url) {
			var frameid = "frameimg" + Math.random();
			console.debug(frameid);
			console.debug(url);
			window.img =
				'<img id="img" style="width:100%" src=\'' +
				url +
				"?" +
				Math.random() +
				"' /><script>window.onload = function() { parent.document.getElementById('" +
				frameid +
				"').height = document.getElementById('img').height+'px'; }<" +
				"/script>";
			document.write(
				'<iframe id="' +
					frameid +
					'" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="45%"></iframe>'
			);
		},
		changeScale(num) {
			num = num || 1;
			this.$refs.cropper.changeScale(num);
		},
		rotateLeft() {
			this.$refs.cropper.rotateLeft();
		},
		rotateRight() {
			this.$refs.cropper.rotateRight();
		},
		finish(type) {
			// 输出
			// var test = window.open('about:blank')
			// test.document.body.innerHTML = '图片生成中..'
			if (type === "blob") {
				this.$refs.cropper.getCropBlob(data => {
					var img = window.URL.createObjectURL(data);
					this.model = true;
					this.modelSrc = img;
				});
			} else {
				this.$refs.cropper.getCropData(data => {
					this.model = true;
					this.modelSrc = data;
				});
			}
		},
		// 实时预览函数
		realTime(data) {
			this.previews = data;
		},
		down(type) {
			this.option.img =
				"http://192.168.0.166:8090/api/static/file/da5ac843-6347-4a52-9526-a736d46178cf.jpg";
			return false;
			// event.preventDefault()
			var aLink = document.createElement("a");
			aLink.download = "author-img";
			// 输出
			if (type === "blob") {
				this.$refs.cropper.getCropBlob(data => {
					console.log(data);
					this.downImg = window.URL.createObjectURL(data);
					// aLink.download = this.downImg;
					console.log(this.downImg);
					aLink.href = window.URL.createObjectURL(data);
					aLink.click();
				});
			} else {
				this.$refs.cropper.getCropData(data => {
					this.downImg = data;
					aLink.href = data;
					aLink.click();
				});
			}
		},
		uploadImg(e, num) {
			//上传图片
			// this.option.img var file = e.target.files[0]
			if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
				alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
				return false;
			}
			var reader = new FileReader();
			reader.onload = e => {
				let data;
				if (typeof e.target.result === "object") {
					// 把Array Buffer转化为blob 如果是base64不需要
					data = window.URL.createObjectURL(
						new Blob([e.target.result])
					);
				} else {
					data = e.target.result;
				}
				if (num === 1) {
					this.option.img = data;
				} else if (num === 2) {
					this.example2.img = data;
				}
			};
			// 转化为base64
			// reader.readAsDataURL(file)
			// 转化为blob reader.readAsArrayBuffer(file)
		},
		imgLoad(msg) {
			console.log(msg);
		}
	}
};
</script>
<style lang="scss">
.cropper-content {
	display: flex;
	display: -webkit-flex;
	justify-content: flex-end;
	-webkit-justify-content: flex-end;

	.cropper {
		width: 350px;
		height: 300px;
	}

	.show-preview {
		flex: 1;
		-webkit-flex: 1;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		-webkit-justify-content: center;

		.preview {
			overflow: hidden;
			border-radius: 50%;
			border: 1px solid #cccccc;
			background: #cccccc;
			margin-left: 40px;
		}
	}
}

.footer-btn {
	margin-top: 30px;
	display: flex;
	display: -webkit-flex;
	justify-content: flex-end;
	-webkit-justify-content: flex-end;

	.scope-btn {
		width: 350px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
	}

	.upload-btn {
		flex: 1;
		-webkit-flex: 1;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		-webkit-justify-content: center;
	}

	.btn {
		outline: none;
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		-webkit-appearance: none;
		text-align: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		-webkit-transition: 0.1s;
		transition: 0.1s;
		font-weight: 500;
		padding: 8px 15px;
		font-size: 12px;
		border-radius: 3px;
		color: #fff;
		background-color: #67c23a;
		border-color: #67c23a;
	}
}
</style>