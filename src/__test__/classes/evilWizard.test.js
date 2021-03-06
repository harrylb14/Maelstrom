import EvilWizard, {STARTING_HITPOINTS as WIZARD_HP} from '../../Components/classes/evilWizard/evilWizard.js'

const evilWizard = new EvilWizard()

describe("evilWizard", function() {

    it("has a name", function() {
        expect(evilWizard.name).toEqual('Evil Wizard')
    });

    it("has hp", function() {
        expect(evilWizard.hp).toEqual(WIZARD_HP);
    });

    it("has a starting max hp reference", function() {
        expect(evilWizard.MAX_HP).toEqual(WIZARD_HP);
    });

    it("its attacking property is false", function() {
        expect(evilWizard.is_attacking).toEqual(false);
    });
})