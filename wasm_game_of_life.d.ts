/* tslint:disable */
/* eslint-disable */
/**
*/
export function init_panic_hook(): void;
/**
*/
export enum Cell {
  Dead,
  Alive,
}
/**
*/
export class Universe {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @returns {Universe}
*/
  static new(width: number, height: number): Universe;
/**
* @returns {string}
*/
  render(): string;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  cells(): number;
/**
* @param {number} width
*/
  set_width(width: number): void;
/**
* @param {number} height
*/
  set_height(height: number): void;
/**
* @param {number} row
* @param {number} col
*/
  toggle_cell(row: number, col: number): void;
/**
* @param {number} row
* @param {number} col
*/
  glider_on(row: number, col: number): void;
/**
* @param {number} row
* @param {number} col
*/
  pulsar_on(row: number, col: number): void;
/**
*/
  reset_cells(): void;
/**
* @param {number} modular1
* @param {number} modular2
*/
  random_cells(modular1: number, modular2: number): void;
/**
*/
  tick(): void;
}
