import { selector } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./atoms";

const allNotification = selector({
    key: "allNotifications",
    value: ({ get }) => {
        return get(notificationAtom) + get(messagesAtom) + get(jobsAtom) + get(networkAtom);
    }
})

export { allNotification };