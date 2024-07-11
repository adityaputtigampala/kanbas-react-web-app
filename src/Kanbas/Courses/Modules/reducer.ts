import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Module {
  _id: string;
  lessons: any[];
  name: string;
  course: string;
  editing?: boolean;
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action: PayloadAction<Omit<Module, '_id' | 'lessons'>>) => {
      const newModule: Module = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: action.payload.name,
        course: action.payload.course,
      };
      state.modules.push(newModule);
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(m => m._id !== action.payload);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map(m =>
        m._id === action.payload._id ? action.payload : m
      );
    },
    editModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.map(m =>
        m._id === action.payload ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
