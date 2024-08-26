import healthIndicator from '../app'
import { Character } from '../app'

let player1 = new Character("Goblin", 51)
let player2 = new Character("Batman", 35)
let player3 = new Character("Clown", 14)



test('health of character > 50', () => {
    let result = healthIndicator(player1);
    let ideal = "healthy";
    expect(result).toBe(ideal);
});

test('health of character <= 50 or >= 15', () => {
    let result = healthIndicator(player2);
    let ideal = "wounded";
    expect(result).toBe(ideal);
});

test('health of character < 15', () => {
    let result = healthIndicator(player3);
    let ideal = "critical";
    expect(result).toBe(ideal);
});