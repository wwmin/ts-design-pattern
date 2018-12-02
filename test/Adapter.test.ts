import { AudioPlayer } from "../src/Adapter";
test("playing to be true", () => {
  let player = new AudioPlayer();
  expect(player.play("mp3", "aa.mp3")).toBe(true);
  expect(player.play("mp4", "bb.mp4")).toBe(true);
  expect(player.play("vlc", "cc.vlc")).toBe(true);
});