import { contestants } from "@/data/contestants";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { VoterState, ContestantsVoted, LoggedUser, StateStorage } from "@/types/voter";
import { getCookie, setCookie, deleteCookie } from "@/app/actions";

const initialData: ContestantsVoted = {
    president: "",
    vice_president: "",
    sec_general: "",
    sport_director: "",
    financial_secretary: "",
    financial_secretary_assistant: "",
    social_director: "",
    welfarer: "",
    welfarer_assistant: "",
}

const getInitialState = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser
      ? {
          user: JSON.parse(storedUser),
          voterId: JSON.parse(storedUser),
          isAuthenticated: true,
        }
      : {
          voterId: null,
          user: null,
          isAuthenticated: false,
        };
};

export const useVoterStore = create<VoterState>()(
    persist(
        (set, get) => ({
          voterId: null,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
          contestants_voted: initialData,
          login: async (voterId) => {
            set({ loading: true, error: null });

            if(voterId == "admin") {
               set({
                user: { voterId },
                voterId: voterId,
                isAuthenticated: true
               });
               await setCookie(voterId)
               return {
                user: { voterId },
                voterId: voterId,
                isAuthenticated: true,
                loading: false,
                error: null,
               };
            } else {
                return {
                    user: null,
                    voterId: null,
                    isAuthenticated: false,
                    loading: false,
                    error: 'Invalid Voters ID',
                }
            }
          },
          logout: async () => {
            await deleteCookie()
            set({ user: null, voterId: null, isAuthenticated: false })
          },
          vote: (contestantId) => set((state) => ({ contestants_voted: {...state.contestants_voted, ...contestantId }})),
          unvote: (position) => set((state) => ({ contestants_voted: { ...state.contestants_voted, position: "" }})),
          reset: () => set((state) => ({ contestants_voted: initialData})),
        }),
        {
          name: 'user', // name of item in the storage (must be unique)
          storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
          partialize: (state) => ({ voterId: state.voterId, isAuthenticated: state.isAuthenticated }),
        },
    ),
)