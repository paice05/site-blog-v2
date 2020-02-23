import React from "react";

import { useHistory } from "react-router-dom";

// core
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// icons
import {
  Home,
  RecentActors,
  Category,
  Schedule,
  ImportContacts
} from "@material-ui/icons";

const SideList = ({ classes, side, toggleDrawer }) => {
  const history = useHistory();

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Remake Blog" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          { text: "HomePage", icon: Home, path: '/' },
          { text: "Posts", icon: ImportContacts, path: '/posts' },
          { text: "Autores", icon: RecentActors, path: '/' }
        ].map(({ text, icon: Icon, path }, index) => (
          <ListItem button key={text} onClick={() => history.push(path)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Recentes", icon: Schedule },
          { text: "Categorias", icon: Category }
        ].map(({ text, icon: Icon }, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideList;
