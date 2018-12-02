"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Adapter_1 = require("../src/Adapter");
ava_1.default("MediaAdapter play", t => {
    let player = new Adapter_1.AudioPlayer();
    let playing = player.play("mp3", "aa.mp3");
    t.true(playing);
});
