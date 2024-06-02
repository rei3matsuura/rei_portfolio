import { useState } from "react";
import PianoIcon from '@mui/icons-material/Piano';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const hobbies = [
  {
    Icon: SportsSoccerIcon,
    Icon_color: "rei-pink",
    bottom_color: "rei-pink",
    hobby_JPN: "バレエ",
    hobby_ENG: "Ballet"
  },
  {
    Icon: PianoIcon,
    Icon_color: "rei-blue",
    bottom_color: "rei-blue",
    hobby_JPN: "ピアノ",
    hobby_ENG: "Piano"
  },
  {
    Icon: SportsEsportsIcon,
    Icon_color: "rei-pink",
    bottom_color: "rei-pink",
    hobby_JPN: "ゲーム",
    hobby_ENG: "Game"
  },
  // 他の趣味のデータを追加
];

export default hobbies;