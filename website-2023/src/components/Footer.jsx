import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Tooltip,
} from '@mui/material';
import attributionsIcon from '../images/icons/heart pink.png';
import { useState } from 'react';

const Footer = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Box
        textAlign="left"
        margin="80px 0px 24px 48px"
      >
        <Tooltip
          title="Resource Credits"
          placement="right"
        >
          <IconButton
            sx={{ flexGrow: 0 }}
            to="https://github.com/nicoleang09"
            onClick={() => setDialogOpen(true)}
          >
            <img
              src={attributionsIcon}
              style={{
                height: '2.25rem',
                filter:
                  'invert(50%) sepia(35%) saturate(360%) hue-rotate(345deg) brightness(95%) contrast(92%)',
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        style={{ textAlign: 'center' }}
      >
        <DialogTitle
          className="section-header"
          height="auto"
        >
          <p>ATTRIBUTIONS</p>
        </DialogTitle>
        <DialogContent>
          <Link
            href="https://www.flaticon.com/premium-icon/coding_2822611"
            target="_BLANK"
            title="coding icons"
          >
            Coding icons created by Freepik - Flaticon
          </Link>
          <Link
            href="https://www.flaticon.com/premium-icon/coding_2822445"
            target="_BLANK"
            title="coding icons"
          >
            Coding icons created by Freepik - Flaticon
          </Link>
          <Link
            href="https://www.flaticon.com/free-icon/send_736161"
            target="_BLANK"
            title="send icon"
          >
            Send icon created by Freepik - Flaticon
          </Link>
          <Link
            href="https://www.flaticon.com/free-icon/send_736212"
            target="_BLANK"
            title="send icon"
          >
            Send icon created by Freepik - Flaticon
          </Link>
          <Link
            href="https://iconscout.com/icon/home-2456658"
            target="_BLANK"
            title="work icon"
          >
            Home Icon in Line Style created by Piqo Design
          </Link>
          <Link
            href="https://iconscout.com/icon/home-2456682"
            target="_BLANK"
            title="work icon"
          >
            Home Icon in Line Style created by Piqo Design
          </Link>
          <Link
            href="https://iconscout.com/icon/work-1779700"
            target="_BLANK"
            title="work icon"
          >
            Work Icon in Colored Outline Style created by Google Inc.
          </Link>
          <Link
            href="https://iconscout.com/icon/work-1779524"
            target="_BLANK"
            title="work icon"
          >
            Work Icon in Glyph Style created by Google Inc.
          </Link>
          <Link
            href="https://iconscout.com/icon/top-arrow-1667915"
            target="_BLANK"
            title="top arrow icon"
          >
            Top arrow Icon in Line Style by Denis Kluchnikov
          </Link>
          <Link
            href="https://iconscout.com/icon/close-1439771"
            target="_BLANK"
            title="close icon"
          >
            Close Icon in Line Style by Unicons Font
          </Link>
          <Link
            href="https://iconscout.com/icon/social-147"
            target="_BLANK"
            title="github icon"
          >
            Github Logo Icon in Line Style by Those Icons
          </Link>
          <Link
            href="https://iconscout.com/icon/heart-2456659"
            target="_BLANK"
            title="heart icon"
          >
            Heart Icon in Line Style by Piqo Design
          </Link>
          <Link
            href="https://iconscout.com/icons/menu"
            target="_BLANK"
          >
            Menu Icon by Akveo
          </Link>
          <Link
            href="https://lottiefiles.com/8167-simple-scroll-down-icon"
            target="_BLANK"
            title="scroll down animation"
          >
            Simple Scroll Down Icon by Matt Wood
          </Link>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
