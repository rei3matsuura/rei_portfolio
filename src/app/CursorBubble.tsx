// components/DogIconWithTooltip.tsx
import { useState } from "react";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SpaIcon from '@mui/icons-material/Spa';
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import { Typography } from "@mui/material";

interface CursorBubbleProps {
  activity: string;
  detail: string;
  circle_color: string;
}

const IconContainer = styled(Box)(({ theme }) => ({
  width: '4rem', // Tailwindのw-16に相当
  height: '4rem', // Tailwindのh-16に相当
  // backgroundColor: 'blue', // 必要に応じて背景色を設定
  color: 'white', // テキストの色を設定
  borderRadius: '50%', // Tailwindのrounded-fullに相当
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem', // Tailwindのspace-x-4に相当
}));

function CursorBubble({ activity, detail, circle_color }: CursorBubbleProps) {
  return (
    <Container>
      <IconContainer className={`bg-${circle_color}`}>
      {/* <IconContainer className={"bg-rei-blue"}> */}
        <Typography className={"text-rei-cream"} variant="h5">{activity}</Typography>
      </IconContainer>
    </Container>
  );
};

export default CursorBubble;


