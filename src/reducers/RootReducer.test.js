import {rootReducer} from './RootReducer'


describe('Root reducer', () => {
    it('should wire in the Post reducer', () => {
        let result = rootReducer({},{});
        expect(result.posts).toBeDefined()
    })
})