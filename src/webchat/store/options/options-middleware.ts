import { Middleware } from "redux";
import { getOptionsKey } from "./options";
import { StoreState } from "../store";
import { SetOptionsAction } from "./options-reducer";
import { resetState } from "../reducer";
import { getStorage } from "../../helper/storage";

type Actions = SetOptionsAction

export const optionsMiddleware: Middleware<{}, StoreState> = store => next => (action: Actions) => {
    const key = getOptionsKey(store.getState().options);
    const { active } = store.getState().config; // Actual settings are loaded
    const { disableLocalStorage, disablePersistentHistory, useSessionStorage } = store.getState().config.settings;
    const { userId } = store.getState().options;
    const browserStorage = getStorage({ useSessionStorage, disableLocalStorage });

    switch (action.type) {
        case 'SET_OPTIONS': {
            // TODO decouple this into a separate action or middleware handler
            if (browserStorage) {
                const key = getOptionsKey(action.options);
                const persistedString = browserStorage.getItem(key);

                if (persistedString) {
                    try {
                        const persisted = JSON.parse(persistedString);

                        store.dispatch(resetState(persisted));
                    } catch (e) { }
                }
            }
        }
    }

    if (browserStorage && active && userId && !disablePersistentHistory) {
        const { messages, rating } = store.getState();
        browserStorage.setItem(key, JSON.stringify({
            messages,
            rating,
        }));
    }

    return next(action);
}