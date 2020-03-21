import React, { useEffect } from 'react';

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

const Authors = () => {
  const dispacth = useDispatch();

  const { byId, allId } = useSelector((state) => state.authors);

  useEffect(() => {
    dispacth(actionsAuthors.listAuthors());
  }, [dispacth]);

  return (
    <List>
      {allId.map((author) => (
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
