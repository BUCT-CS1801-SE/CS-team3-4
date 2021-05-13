const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

export default {
    data: {
        text: 'uni-app',
        voicePath: ''
    },
    onLoad() {
        let self = this;
        // recorderManager.onStop(function (res) {
        //     // console.log('recorder stop' + JSON.stringify(res));
        //     self.voicePath = res.tempFilePath;
        // });
        // recorderManager.onStop(res => {
        // 	music.src = res.tempFilePath;
        // 	console.log(music.src);
        // 	qiniuUploader.uploadFile(
        // 		music.src,
        // 		res => {
        // 			musicurl = res.imageURL;
        // 		},
        // 		error => {
        // 			console.error('error: ' + JSON.stringify(error));
        // 		},
        // 		null, // 可以使用上述参数，或者使用 null 作为参数占位符  
        // 		progress => {  
        // 		},  
        // 		cancelTask => {}  
        //     );  
        //     this.hasRecord = true;  
        //     this.recording = false;  
        // });
        recorderManager.onStop(function (res) {
            console.log('recorder stop' + JSON.stringify(res));
            self.voicePath = res.tempFilePath;
            uni.uploadFile({
                    url: 'http://47.93.50.106/',
                    filePath: this.voicePath,//录音结束后返回的临时路径
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success: (uploadFileRes) => {
                        console.log(JSON.stringify(uploadFileRes.data));
                },
                    fail: (res) => {
                        console.log(JSON.stringify(res));
                    }
            });
        });
    },
    methods: {
        startRecord() {
            console.log('开始录音');

            recorderManager.start();
        },
        endRecord() {
            console.log('录音结束');
            recorderManager.stop();
        },
        playVoice() {
            console.log('播放录音');

            if (this.voicePath) {
                innerAudioContext.src = this.voicePath;
                innerAudioContext.play();
            }
        }			
    }
}