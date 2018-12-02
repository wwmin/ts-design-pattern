"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VlcPlayer {
    playVlc(fileName) {
        console.log("playing vlc file......." + fileName);
    }
}
class Mp4Player {
    playMp4(fileName) {
        console.log("playing mp4 file......." + fileName);
    }
}
class MediaAdapter {
    constructor(type) {
        // 根据type 生成哪一个播放类
        if (type === "vlc") {
            this.player = new VlcPlayer();
        }
        else if (type === "mp4") {
            this.player = new Mp4Player();
        }
        else {
            this.player = new Mp4Player(); // 默认使用mp4player
        }
    }
    play(type, fileName) {
        // 因为特定的播放类有特定的播放方法，所以还需要再根据type调用特定的播放类
        if (type === "vlc") {
            if (this.player.playVlc)
                this.player.playVlc(fileName);
        }
        else if (type === "mp4") {
            if (this.player.playMp4)
                this.player.playMp4(fileName);
        }
        else {
            return null;
        }
    }
}
class AudioPlayer {
    play(type, fileName) {
        if (type === "mp3") {
            console.log("播放器内置支持mp3, " + fileName + "已开始播放.");
            return true;
        }
        else if (type === "vlc" || type === "mp4") {
            let ma = new MediaAdapter(type);
            ma.play(type, fileName);
            return true;
        }
        else {
            console.log("不支持当前格式");
            return false;
        }
    }
}
exports.AudioPlayer = AudioPlayer;
let player = new AudioPlayer();
player.play("mp3", "aa.mp3");
player.play("vlc", "bb.vlc");
player.play("mp4", "cc.mp4");
