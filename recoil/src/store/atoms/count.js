import { atom, selector } from "recoil";

const countAtom = atom({
    key: "count-atom",
    default: 0
})

const evenSelector = selector({
    key: "even-selector",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2 === 0;
    }
})

export { countAtom, evenSelector };