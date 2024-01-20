import { selector } from "recoil";
import { notificationAtom } from "./atoms";

const allNotificationCountSelector = selector({
    key: "allNotifications",
    get: ({ get }) => {
        const totalNotification = get(notificationAtom);
        return totalNotification.notifications + totalNotification.jobs + totalNotification.messages + totalNotification.network;
    }
})

export { allNotificationCountSelector };