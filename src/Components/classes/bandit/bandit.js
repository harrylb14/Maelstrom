import { banditAttack } from "../../characterAnimation/bandit/bandit_attack.js";
import { banditDead } from "../../characterAnimation/bandit/bandit_dead.js";
import { banditIdle } from "../../characterAnimation/bandit/bandit_idle.js";
import Character from "../character_super/character_super.js";


const STARTING_HITPOINTS = 125;

class Bandit extends Character {

  constructor(idleImage = banditIdle, attackImage = banditAttack, deathImage = banditDead, deathFrameNumber = 7, idleSourceY = 0, deathSourceY = 3, attackSourceY = 2){
    super(idleImage, attackImage, deathImage, deathFrameNumber, idleSourceY, deathSourceY, attackSourceY)
    this.name = 'Opponent_Placeholder'
    this.hp = STARTING_HITPOINTS
    this.MAX_HP = STARTING_HITPOINTS
    this.money = 0
  }
}

export default Bandit;