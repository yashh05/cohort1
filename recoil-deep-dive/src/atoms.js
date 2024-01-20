import { atom, selector } from "recoil"

//this is how to use asynchronous data queries
const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationSelector",
        get: async () => {
            const response = await fetch("/api/notifications");
            return response.data;
        }
    })
})


export { notificationAtom };