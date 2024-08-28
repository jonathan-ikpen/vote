import { create } from 'zustand'
import { RegistrationData, RegistrationState } from '@/types/register';

const initialData: RegistrationData = {
    firstname: '',
    phone: 0,
    dob: new Date(),
    lastname: '',
    matricnum: '',
    gender: '',
    email: '',
    department: '',
}


export const useOnboardingStore = create<RegistrationState>((set) => ({
  step: 1,
  data: initialData,
  nextStep: () => set((state) => ({ step: state.step + 1})),
  prevStep: () => set((state) => ({ step: state.step - 1})),
  setData: (newData) => set((state) => ({ data: {...state.data, ...newData}})),
  reset: () => set((state) => ({ step: 1, data: initialData })),
}));