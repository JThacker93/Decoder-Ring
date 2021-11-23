const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution", () => {
    it("should return false if the given alphabet is not exactly 26 characters long", () => {
        let actual = substitution("message","fjdifjewpaj");
        expect(actual).to.be.false;
    })
})
describe("substitution", () => {
    it("should correctly translate the message based on given alphabet", () => {
        let expected = "ykrrpik";
        let actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should decode the message with the given alphabet", () => {
        let expected = "message";
        let actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq",false);
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should maintain spaces before and after decoding", () => {
        let expected = "ykr rpik";
        let actual = substitution("mes sage", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should maintain spaces before and after decoding", () => {
        let expected = "mes sage";
        let actual = substitution("ykr rpik", "plmoknijbuhvygctfxrdzeswaq",false);
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should ignore capital letters", () => {
        let expected = "ykrrpik";
        let actual = substitution("MeSsAge", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should return false if the given alphabet has duplicates", () => {
        let actual = substitution("message", "plmopnijbupvygctfxrdzeswaq");
        expect(actual).to.be.false;
    })
})
