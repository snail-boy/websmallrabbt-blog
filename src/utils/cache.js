import storage from 'good-storage'

export function storageFun(params) {
    storage.session.set('name', params)
}

export function removeFun(params) {
    // storage.remove(params)
    storage.session.remove('name', params)
}

export function storageSessionFun(params) {
    storage.session.set('session', params)
}
