import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import { Delete, Edit } from '@material-ui/icons';

// ducks
import { actionsPosts } from '../../store/ducks/posts';

// components
import Loading from '../../components/Loading';

const PostData = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { allId, byId } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(actionsPosts.listPost());

    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);

  const handleDeletePost = (id) => dispatch(actionsPosts.deletePost(id));

  return (
    <List style={{ padding: '24px 0' }}>
      {loading
        ? <Loading text />
        : allId.map((post) => (
          <div key={byId[post].id}>
            <ListItem alignItems="flex-start" style={{ padding: '24px 0' }}>
              <ListItemText
                primary={byId[post].title}
                secondary={(
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {byId[post].subTitle}
                    </Typography>
                  </>
              )}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeletePost(byId[post].id)} edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </div>
        ))}
    </List>
  );
};

export default PostData;
