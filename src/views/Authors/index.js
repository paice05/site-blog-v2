import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// duck
import { actionsAuthors } from '../../store/ducks/authors';

import Loading from '../../components/Loading';

const Authors = () => {
  const dispacth = useDispatch();

  const [loading, setLoading] = useState(true);

  const { byId, allId } = useSelector((state) => state.authors);

  useEffect(() => {
    dispacth(actionsAuthors.listAuthors());

    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, [dispacth]);

  return (
    <List>
      {loading
        ? <Loading avatar text />
        : allId.map((author) => (
          <div key={byId[author].id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={byId[author].name}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={byId[author].name}
                secondary={(
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {byId[author].bio}
                    </Typography>
                  </>
                  )}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
    </List>
  );
};

export default Authors;
