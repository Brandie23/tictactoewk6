// ACTIONS TESTS

import {
    SHOW_MESSAGE,
} from "../client/actions/index.js";

test("SHOW_MESSAGE returns message", () => {
    //Arrange
    const expected = {
        type: SHOW_MESSAGE
    };
    //Act
    const actual = showMessage();
    //Assert
    expect(actual).toEqual(expected);
});