import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'it\'s my first post', likesCount: 25}
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('New Text');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it('message of new posts should be correct', () => {
    let action = addPostActionCreator('New Text');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('New Text');
});

it('after deleting length should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(10);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});