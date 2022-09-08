const copy = (obj) => JSON.parse(JSON.stringify(obj))

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return { ...state, profile: { ...state.profile, name: action.data } }
    case 'changeOwner':
      return { ...state, profile: { ...state.profile, owner: action.data } }
    case 'updateInstructions': {
      if (action.data.type === 'userInstructions') {
        return { ...state, userInstructions: { content: action.data.content, update: new Date() } }
      } else if (action.data.type === 'reviewerInstructions') {
        return { ...state, reviewerInstructions: { content: action.data.content, update: new Date() } }
      } else {
        return { ...state, warningInstructions: { content: action.data.content, update: new Date() } }
      }
    }
    case 'updateField': {
      const st = copy(state)
      const fieldset = st.fieldsets.find((fs) => fs.id === action.data.fieldset.id)
      const field = fieldset.fields.find((f) => f.id === action.data.field.id)
      field.help = action.data.update
      return { ...state, ...st }
    }

    default:
      throw new Error()
  }
}

export default reducer
