export interface FormState {
  name: string;
  dob: string;
  gender: string;
  isNameValid: boolean;
  isDobValid: boolean;
  isGenderValid: boolean;
}

interface Flag {
  isNameValid: boolean;
  isDobValid: boolean;
  isGenderValid: boolean;
}

export enum ActionType {
  SetName = 'SET_NAME',
  SetDob = 'SET_DOB',
  SetError = 'SET_ERROR',
  SetGender = 'SET_GENDER',
}

interface NameAction {
  type: ActionType.SetName;
  payload: { value: string };
}

interface DobAction {
  type: ActionType.SetDob;
  payload: { value: string };
}

interface GenderAction {
  type: ActionType.SetGender;
  payload: { value: string };
}

interface ErrorAction {
  type: ActionType.SetError;
  payload: { value: Flag };
}

export type FormAction = NameAction | DobAction | GenderAction | ErrorAction;

export const initialState: FormState = {
  isNameValid: true,
  isDobValid: true,
  isGenderValid: true,
  gender: '',
  name: '',
  dob: '',
};

export const validationReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case ActionType.SetName:
      return { ...state, name: action.payload.value };
    case ActionType.SetDob:
      return { ...state, dob: action.payload.value };
    case ActionType.SetGender:
      return { ...state, gender: action.payload.value };
    case ActionType.SetError:
      return { ...state, ...action.payload.value };
    default:
      throw Error('Not supposed to happen');
  }
};
