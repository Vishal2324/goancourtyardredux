
export function headerData() { 
	return {
        type: 'HEADER_CALL',
        payload: 'HEADER_CALL'
    }
}

export function homeData() { 
	return {
        type: 'HOME_CALL',
        payload: 'HOME_CALL'
    }
}

export function roomData(roomname) { 
	return {
        type: 'ROOM_CALL',
        payload: roomname
    }
}

export function loginAction(logindata) { 
    return {
        type: 'LOGIN_ACTION',
        payload: logindata
    }
}

export function baz() { headerData(); homeData(); roomData(); loginAction() }

export default {headerData, homeData, roomData, loginAction, baz}
