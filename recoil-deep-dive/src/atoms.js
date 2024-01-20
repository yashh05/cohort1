import { atom } from "recoil"

const notificationAtom = atom({
    key: "notificationAtom",
    default: {
        messages: 4,
        jobs: 2,
        network: 1,
        notifications: 3
    }
})


export { notificationAtom };