import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface MapCardProps {
  cardKey: String;
  cardVal: String;
}

export const MapCard: React.FC<MapCardProps> = ({cardKey, cardVal}) => {
  return (
    <Card sx={{ minWidth: 120 }}>
      <CardContent>
        <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          {cardVal}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 16}} color="text.secondary">
          {cardKey}
        </Typography>
      </CardContent>
    </Card>
  );
}
