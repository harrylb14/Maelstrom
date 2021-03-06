import React from "react";
import FightCanvas from '../../../Components/screens/FightCanvas.js'
import OpponentContext from '../../../config/opponentContext.js'
import PlayerContext from '../../../config/playerContext'
import { render, cleanup } from "@testing-library/react";
import FightRoundsContext from "../../../config/fightRoundsContext.js";


const OpponentObj  = { name: "Mouldie Harry", hp: 1, deathImage: jest.fn(), attackImage: jest.fn(), idleImage: jest.fn() };
const PlayerObj = { name: "Righteous Ilja", hp: 10000, is_attacking: false, current_avatar_text: jest.fn(), deathImage: jest.fn(), attackImage: jest.fn(), idleImage: jest.fn() };
const FightRounds = { round: 0 };
const fightCanvasRender = (
  <PlayerContext.Provider value={{PlayerObj}}>
      <OpponentContext.Provider value={{OpponentObj}}>
          <FightRoundsContext.Provider value={{FightRounds}}>
            <FightCanvas />
          </FightRoundsContext.Provider>
      </OpponentContext.Provider>
  </PlayerContext.Provider>
  )

afterEach(cleanup);

test("healthbars are rendered", () =>{
    const { queryByTestId } = render(fightCanvasRender);
    expect(queryByTestId("healthbars")).toBeTruthy();
    
});

test("canvas is rendered", () => {
    const { queryByTestId } = render(fightCanvasRender);
    expect(queryByTestId("game-area")).toBeTruthy();
});
