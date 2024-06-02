import { useState } from "react";
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { SvgIconComponent } from '@mui/icons-material';

interface IconCardProps {
  Icon: SvgIconComponent;
  Icon_color: string;
  bottom_color: string;
  hobby_JPN: string;
  hobby_ENG: string;
}

const IconContainer = styled(Box)(({ theme }) => ({
  height: '66%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: '#f0f0f0', // アイコンの背景色を設定
}));

const IconTextContainer = styled(Box)(({ theme }) => ({
  height: '34%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
}));

export default function IconCard({ Icon, Icon_color, bottom_color, hobby_JPN, hobby_ENG }: IconCardProps) {
  return (
    <Card sx={{ width:300, height:300 }}>
      <IconContainer className="bg-rei-cream"> {/* Tailwind CSSの背景色を設定 */}
        <Icon className={`text-${Icon_color}`} style={{ fontSize: 200 }} /> {/* Tailwind CSSのテキスト色を設定 */}
      </IconContainer>
      <IconTextContainer className={`bg-${bottom_color}`}>
        <Typography className={"text-rei-cream"} variant="h5">{hobby_JPN}</Typography>
        <Typography className={"text-rei-cream"} variant="h6">{hobby_ENG}</Typography>
      </IconTextContainer>
    </Card>
  );
}
