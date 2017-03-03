function underline (state = [], action){
	if (action.type === 'ADD_ACTIVE_BORDER'){
		return action.event
		
	}else{
		return ""
	}
}

export default underline ;