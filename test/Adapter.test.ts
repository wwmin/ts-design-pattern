import test from "ava";

import { AudioPlayer } from "../src/Adapter";

test("MediaAdapter play", t => {
  let player = new AudioPlayer();
  let playing = player.play("mp3", "aa.mp3");
  t.true(playing);
});
