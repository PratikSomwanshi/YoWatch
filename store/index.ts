import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface USER {
    email: string;
    userName: string;
    token: string;
}

type Store = {
    image_count: number;
    inc_image_count: () => void;
    user: {
        email?: string;
        userName?: string;
        token?: string;
    };

    setUser: (payload: USER) => void;
};

const useStore = create<Store>()(
    devtools(
        immer((set) => ({
            image_count: 1,
            user: {
                email: "",
                userName: "",
                token: "",
            },
            inc_image_count: () =>
                set((state) => ({ image_count: state.image_count + 1 })),
            setUser: (payload) =>
                set((state) => ({
                    user: {
                        email: payload.email,
                        userName: payload.userName,
                        token: payload.token,
                    },
                })),
        }))
    )
);

export default useStore;
