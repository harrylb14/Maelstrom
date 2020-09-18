import React from "react";
import ReactDOM from "react-dom";
import { Player } from "./player";
import PlayerContext from '../../config/playerContext.js'
import { render, cleanup } from "@testing-library/react";

const PlayerObj  = { name: "Ilja", hp: 100};
const playerRender = (
                      <PlayerContext.Provider value={{PlayerObj}}>
                        <Player />,
                      </PlayerContext.Provider> 
                      )

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render( playerRender, container);
});

afterEach(cleanup);

describe("Player Component", function() {
  it("name and hp fields exist", function() {
    const { getByTestId } = render(<> playerRender </>)
    expect(getByTestId("player_name")).toHaveTextContent("Ilja")
    expect(getByTestId("player_hp")).toHaveTextContent("100");
  })
});

describe("Player Component", function() {
  it("player_name id contains the player's name", function() {
    expect(document.getElementById('player_name').textContent).toContain('Ilja');
  })
});

describe("it can pass hp", function() {
  it("name and hp fields exist", function() {
    expect(container.querySelector("div").textContent).toContain('100')
  })
});
