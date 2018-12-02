import { AudioPlayer } from "../src/Adapter";
let player = new AudioPlayer();
player.play("mp3", "aa.mp3");
player.play("vlc", "bb.vlc");
player.play("mp4", "cc.mp4");

test("playing to be true", () => {
  expect(player.play("mp3", "aa.mp3")).toBe(true);
  expect(player.play("mp4", "bb.mp4")).toBe(true);
  expect(player.play("vlc", "cc.vlc")).toBe(true);
});
