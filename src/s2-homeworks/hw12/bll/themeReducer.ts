type initStateType={
    themeId:number
}
const initState:initStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {themeId: action.id}
        }
        default:
            return state
    }
}

type changeThemeIdType= ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
