import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Skeleton from '@material-ui/lab/Skeleton';

const Loading = ({ avatar, text }) => [1, 2, 3, 4].map(() => (
  <Card style={{ margin: '24px 0' }}>
    <CardHeader
      avatar={avatar && (
        <Skeleton
          animation="wave"
          variant="circle"
          width={40}
          height={40}
        />
      )}
      title={text && (
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      )}
      subheader={text
        && <Skeleton animation="wave" height={10} width="40%" />}
    />
  </Card>
));

export default Loading;
