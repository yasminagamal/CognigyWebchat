import * as React from 'react';
import { styled } from '../../style';
import IconButton from './IconButton';
import CloseIcon from '../../assets/baseline-close-24px.svg';
import Button from './Button';

const Wrapper = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',

    padding: theme.blockSize,
    boxSizing: 'border-box',
    backgroundColor: 'hsla(0, 0%, 0%, .33)',

    zIndex: 2,
}));

const Dialog = styled.div(({ theme }) => ({
    padding: theme.unitSize * 2,
    borderRadius: theme.unitSize,

    backgroundColor: '#fafafa',
    color: theme.greyContrastColor,

    boxShadow: theme.shadow,
    textAlign: "center",
}));

const DialogHeader = styled.div(({theme}) => ({
    marginBottom: theme.unitSize * 2
}))

const HeaderIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    right: theme.unitSize,
    top: theme.unitSize + 1,

    color: theme.primaryContrastColor,
    fill: theme.primaryContrastColor,
    borderRadius: "50%",
    "&:focus, &:hover": {
        backgroundColor: theme.primaryStrongColor,
        fill: `${theme.primaryContrastColor} !important`,
        opacity: 0.85,
    }
}));

export default ({ isPermanent, onClose, onConnect }) => {
    return (
        <Wrapper>
            <Dialog>
                {isPermanent ? (
                    <><DialogHeader>Connection lost</DialogHeader>
                    {navigator.onLine ? <Button onClick={onConnect} color="primary">Reconnect</Button> : <div>No network connection</div>}</>
                ) : (
                        <span>Connection lost. Trying to reconnect...</span>
                    )}
            </Dialog>
            <HeaderIconButton
                data-header-close-button
                onClick={onClose}
                className="webchat-header-close-button"
                aria-label="Close Warning"
            >
                <CloseIcon />
            </HeaderIconButton>
        </Wrapper>
    );
};
