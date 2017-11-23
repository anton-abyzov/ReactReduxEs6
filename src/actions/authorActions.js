import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export const loadAuthorsSuccess = (authors) => {
    debugger;
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors().then(
            authors => {
                dispatch(loadAuthorsSuccess(authors));
            }
        ).catch(error => {
            throw(error);
        })
    }
}
