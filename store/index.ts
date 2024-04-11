import { create } from "zustand";

type Store = {
    image_count: number;
    inc_image_count: () => void;
};

const useStore = create<Store>()((set) => ({
    image_count: 1,
    inc_image_count: () =>
        set((state) => ({ image_count: state.image_count + 1 })),
}));
