import { Box, IconButton, Tooltip } from "@mui/material";
import attributionsIcon from "../images/icons/heart pink.png";

const Footer = () => {
  return (
    <Box textAlign="left" margin="80px 0px 24px 48px">
      <Tooltip title="Resource Credits" placement="right">
        <IconButton sx={{ flexGrow: 0 }} to="https://github.com/nicoleang09">
          <img
            src={attributionsIcon}
            style={{
              height: "2.25rem",
              filter:
                "invert(50%) sepia(35%) saturate(360%) hue-rotate(345deg) brightness(95%) contrast(92%)",
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Footer;
