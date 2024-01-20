import { atom } from "recoil"

const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})
const messagesAtom = atom({
    key: "messagesAtom",
    default: 0
})
const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export { notificationAtom, messagesAtom, jobsAtom, networkAtom };