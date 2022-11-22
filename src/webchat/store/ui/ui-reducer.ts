import { Reducer } from "redux";
import { IMessage } from "../../../common/interfaces/message";
import { TTyping } from "../../../common/interfaces/typing";
import { isPageVisible } from '../../helper/page-visibility';

export interface UIState {
    open: boolean;
    typing: TTyping;
    inputMode: string;
    fullscreenMessage: IMessage | undefined;
    agentAvatarOverrideUrl?: string;
    botAvatarOverrideUrl?: string;
    userAvatarOverrideUrl?: string;
    isPageVisible: boolean;
}

export const SET_OPEN = 'SET_OPEN';
export const setOpen = (open: boolean) => ({
    type: SET_OPEN as 'SET_OPEN',
    open
});
export type SetOpenAction = ReturnType<typeof setOpen>;

const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = () => ({
    type: TOGGLE_OPEN as 'TOGGLE_OPEN'
});
export type ToggleOpenAction = ReturnType<typeof toggleOpen>;

const SET_TYPING = 'SET_TYPING';
export const setTyping = (typing: TTyping) => ({
    type: SET_TYPING as 'SET_TYPING',
    typing
});
type SetTypingAction = ReturnType<typeof setTyping>;

const SET_INPUT_MODE = 'SET_INPUT_MODE';
export const setInputMode = (inputMode: string) => ({
    type: SET_INPUT_MODE as 'SET_INPUT_MODE',
    inputMode
});
type SetInputModeAction = ReturnType<typeof setInputMode>;

const SET_FULLSCREEN_MESSAGE = 'SET_FULLSCREEN_MESSAGE';
export const setFullscreenMessage = (fullscreenMessage: IMessage | undefined) => ({
    type: SET_FULLSCREEN_MESSAGE as 'SET_FULLSCREEN_MESSAGE',
    fullscreenMessage
});
type SetFullscreenMessageAction = ReturnType<typeof setFullscreenMessage>;

const SET_AGENT_AVATAR_OVERRIDE_URL = 'SET_AGENT_AVATAR_OVERRIDE_URL';
export const setAgentAvatarOverrideUrl = (url: string) => ({
    type: SET_AGENT_AVATAR_OVERRIDE_URL as 'SET_AGENT_AVATAR_OVERRIDE_URL',
    url
});
type SetAgentAvatarOverrideUrlAction = ReturnType<typeof setAgentAvatarOverrideUrl>;

const SET_BOT_AVATAR_OVERRIDE_URL = 'SET_BOT_AVATAR_OVERRIDE_URL';
export const setBotAvatarOverrideUrl = (url: string) => ({
    type: SET_BOT_AVATAR_OVERRIDE_URL as 'SET_BOT_AVATAR_OVERRIDE_URL',
    url
});
type SetBotAvatarOverrideUrlAction = ReturnType<typeof setBotAvatarOverrideUrl>;

const SET_USER_AVATAR_OVERRIDE_URL = 'SET_USER_AVATAR_OVERRIDE_URL';
export const setUserAvatarOverrideUrl = (url: string) => ({
    type: SET_USER_AVATAR_OVERRIDE_URL as 'SET_USER_AVATAR_OVERRIDE_URL',
    url
});
type SetUserAvatarOverrideUrlAction = ReturnType<typeof setUserAvatarOverrideUrl>;

const SET_PAGE_VISIBLE = 'SET_PAGE_VISIBLE';
export const setPageVisible = (visible: boolean) => ({
    type: SET_PAGE_VISIBLE as 'SET_PAGE_VISIBLE',
    visible
});
export type SetPageVisibleAction = ReturnType<typeof setPageVisible>;


const getInitialState = (): UIState => ({
    open: false,
    typing: 'remove',
    inputMode: 'text',
    fullscreenMessage: undefined,
    agentAvatarOverrideUrl: undefined,
    botAvatarOverrideUrl: undefined,
    userAvatarOverrideUrl: undefined,
    isPageVisible: isPageVisible()
});

type UIAction = SetOpenAction 
    | SetTypingAction 
    | SetInputModeAction 
    | SetFullscreenMessageAction 
    | SetAgentAvatarOverrideUrlAction
    | SetBotAvatarOverrideUrlAction 
    | SetUserAvatarOverrideUrlAction
    | SetPageVisibleAction;


export const ui: Reducer<UIState, UIAction> = (state = getInitialState(), action) => {
    switch (action.type) {
        case SET_OPEN: {
            return {
                ...state,
                open: action.open
            }
        }

        case SET_TYPING: {
            return {
                ...state,
                typing: action.typing
            }
        }

        case SET_INPUT_MODE: {
            return {
                ...state,
                inputMode: action.inputMode
            }
        }

        case SET_FULLSCREEN_MESSAGE: {
            return {
                ...state,
                fullscreenMessage: action.fullscreenMessage
            }
        }

        case SET_AGENT_AVATAR_OVERRIDE_URL: {
            return {
                ...state,
                agentAvatarOverrideUrl: action.url
            }
        }

        case SET_BOT_AVATAR_OVERRIDE_URL: {
            return {
                ...state,
                botAvatarOverrideUrl: action.url
            }
        }

        case SET_USER_AVATAR_OVERRIDE_URL: {
            return {
                ...state,
                userAvatarOverrideUrl: action.url
            }
        }

        case SET_PAGE_VISIBLE: {
            return {
                ...state,
                isPageVisible: action.visible
            }
        }
    }

    return state;
}