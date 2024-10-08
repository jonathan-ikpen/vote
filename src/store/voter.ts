import { contestants } from "@/data/contestants";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { VoterState, ContestantsVoted, LoggedUser, StateStorage } from "@/types/voter";
import { loginVoter } from "@/lib/api/login";
import { getCookie, setCookie, deleteCookie } from "@/app/actions";
import { getElectionData } from "@/lib/api/election";
import { getContestantsVoted } from "@/lib/utils";
import { voteContestant } from "@/lib/api/vote";
import CountdownTimer from "@/components/shared/timer";

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
          voterId: "",
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
          contestants_voted: {},
          election: null,
          hours: "",
          fetchElectionData: () => {
            getElectionData().then(async (r) => {
              if(r.success && 'data' in r) {
                set({
                  election: r.data[0]
                })
                return await r.data[0]
              }
            })
          },
          login: async (voterId) => {
            set({ loading: true, error: null });

            const election = await getElectionData().then(async (r) => {
              if(r.success && 'data' in r) {
                set({ hours: r.data[0].no_of_hours})
                return await r.data[0]
              }
            })

            return loginVoter(voterId).then(async (r) => {
              if(r.success && 'data' in r) {
                  set({
                    user: r.data,
                    voterId: voterId,
                    isAuthenticated: true,
                    election: election,
                    contestants_voted: await getContestantsVoted(r.data.voted)
                  });
                  await setCookie(voterId)
                  return {
                    user: r.data,
                    voterId: voterId,
                    isAuthenticated: true,
                    contestants_voted: await getContestantsVoted(r.data.voted),
                    election: election,
                    loading: false,
                    error: null,
                  }
              } else {
                if (!navigator.onLine) {
                  return {
                    user: null,
                    voterId: "",
                    isAuthenticated: false,
                    loading: false,
                    error: 'You are offline',
                  }
                }
                return {
                    user: null,
                    voterId: "",
                    isAuthenticated: false,
                    loading: false,
                    error: 'Invalid Voters ID',
                }
              }
            })
          },
          logout: async () => {
            await deleteCookie()
            set({ user: null, voterId: "", isAuthenticated: false, election: null, contestants_voted: {}, hours: "" })
            useVoterStore.persist.clearStorage()
          },
          vote: async (contestantId) => {
            set((state) => ({ contestants_voted: {...state.contestants_voted, ...contestantId }}))

            return voteContestant(get().voterId, get().contestants_voted).then((r) => {
              if(r.success && 'data' in r) {
                return {
                  status: 'success',
                  message: r.data.message,
                }
              } else {
                return {
                  status: 'error',
                  message: "Sorry your Vote was not successful"
                }
              }
            })
          },
          unvote: (position) => set((state) => ({ contestants_voted: { ...state.contestants_voted, position: "" }})),
          reset: () => set((state) => ({ contestants_voted: {}})),
        }),
        {
          name: 'user', // name of item in the storage (must be unique)
          storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
          partialize: (state) => ({ voterId: state.voterId, isAuthenticated: state.isAuthenticated, election: state.election, user: state.user, contestants_voted: state.contestants_voted, hours: state.hours }),
        },
    ),
)