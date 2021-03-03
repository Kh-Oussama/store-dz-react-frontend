import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser,
);

export const selectError = createSelector(
    [selectUser],
    user => user.error
);

export const selectSignInError = createSelector(
    [selectUser],
    user => user.sign_in_error
);

export const selectSignUpError = createSelector(
    [selectUser],
    user => user.sign_up_error
);

export const selectLoading = createSelector(
    [selectUser],
    user => user.loading,
);

export const selectCheckLoading= createSelector(
    [selectUser],
    user => user.checkLoading,
);
