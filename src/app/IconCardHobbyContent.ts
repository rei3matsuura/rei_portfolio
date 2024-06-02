import { useState } from "react";
import PianoIcon from '@mui/icons-material/Piano';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const hobbies = [
  {
    Icon: SportsSoccerIcon,
    main_color: "rei-pink",
    hobby_JPN: "バレエ",
    hobby_ENG: "Ballet"
  },
  {
    Icon: PianoIcon,
    main_color: "rei-blue",
    hobby_JPN: "ピアノ",
    hobby_ENG: "Piano"
  },
  {
    Icon: SportsEsportsIcon,
    main_color: "rei-pink",
    hobby_JPN: "ゲーム",
    hobby_ENG: "Game"
  },
  // 他の趣味のデータを追加
];

export default hobbies;