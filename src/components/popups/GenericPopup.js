import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';

export default function GenericPopup({ popupName, content }) {
  const [anchor, setAnchor] = React.useState(null);
  const popupRef = React.useRef(null);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    setAnchor((prevAnchor) => (prevAnchor ? null : event.currentTarget));
  };

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      event.target.getAttribute('aria-describedby') !== 'simple-popup'
    ) {
      setAnchor(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  return (
    <div style={{ position: 'relative' }}>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        {popupName}
      </Button>
      {open && (
        <BasePopup
          id={id}
          open={open}
          anchor={anchor}
          ref={popupRef}
          modifiers={[
            {
              name: 'preventOverflow',
              options: {
                boundary: 'viewport',
              },
            },
            {
              name: 'offset',
              options: {
                offset: [20, 100],
              },
            },
          ]}
        >
          <PopupBody>{content}</PopupBody>
        </BasePopup>
      )}
    </div>
  );
}

const PopupBody = styled('div')(
  ({ theme }) => `
  min-width: 200px;
  max-width: 300px;
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: ${theme.shape.borderRadius}px;
  border: 1px solid ${
    theme.palette.mode === 'dark'
      ? theme.palette.grey[700]
      : theme.palette.grey[200]
  };
  background-color: ${
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : theme.palette.background.paper
  };
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgba(0, 0, 0, 0.7)`
      : `0px 4px 8px rgba(0, 0, 0, 0.1)`
  };
  color: ${theme.palette.text.primary};
  font-family: ${theme.typography.fontFamily};
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 99999;
  overflow: visible;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${theme.palette.primary.main};
  padding: 8px 16px;
  border-radius: ${theme.shape.borderRadius}px;
  color: ${theme.palette.primary.contrastText};
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${theme.palette.primary.main};
  box-shadow: 0 2px 4px ${
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(186, 163, 74, 0.5)'
  }, inset 0 1.5px 1px ${theme.palette.primary.light}, inset 0 -2px 1px ${
    theme.palette.primary.dark
  };

  &:hover {
    background-color: ${theme.palette.primary.dark};
  }

  &:active {
    background-color: ${theme.palette.primary.dark};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.primary.light};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: ${theme.palette.primary.main};
    }
  }
`,
);
