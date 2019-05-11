import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../apiData'
import * as types from '../../types/apiData'
import fetchMock from 'fetch-mock'

describe('actions', () => {
  it('should create an register the fetch has failed', () => {
    const expectedAction = {
      type: types.FETCH_API_FAILURE
    }
    expect(actions.APIFailure()).toEqual(expectedAction)
  })

  it('should create an register the fetch has started', () => {
    const expectedAction = {
      type: types.FETCH_API_REQUEST
    }
    expect(actions.APIRequest()).toEqual(expectedAction)
  })
})


// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie', {
//       body: { genres: ['do something'] },
//       headers: { 'content-type': 'application/json' }
//     })

//     const expectedActions = [
//       { type: types.FETCH_CATEGORIES },
//       { type: types.FETCH_API_SUCCESS, body: { todos: ['do something'] } }
//     ]	
//     const store = mockStore({ todos: [] })

//     return store.dispatch(actions.fetchCategories({ key: 'asduyasid'})).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })